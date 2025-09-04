<?php

namespace app\modules\api\controllers;

use app\models\Application;
use app\models\Vacancy;
use Yii;
use yii\data\ActiveDataProvider;
use yii\rest\ActiveController;
use yii\web\BadRequestHttpException;
use yii\web\NotFoundHttpException;
use yii\web\UploadedFile;

/**
 * ApplicationController implements the CRUD actions for Application model.
 */
class ApplicationController extends ActiveController
{
    public $modelClass = 'app\models\Application';

    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        
        // Add CORS filter
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::class,
            'cors' => [
                'Origin' => Yii::$app->params['api']['corsOrigin'],
                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 86400,
            ],
        ];

        return $behaviors;
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        $actions = parent::actions();
        
        // Disable delete action
        unset($actions['delete']);
        
        // Customize data provider
        $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];

        return $actions;
    }

    /**
     * Prepare data provider for index action
     */
    public function prepareDataProvider()
    {
        $query = Application::find()->with(['vacancy', 'company']);

        // Filter by vacancy
        if ($vacancyId = Yii::$app->request->get('vacancy_id')) {
            $query->andWhere(['vacancy_id' => $vacancyId]);
        }

        // Filter by company
        if ($companyId = Yii::$app->request->get('company_id')) {
            $query->andWhere(['company_id' => $companyId]);
        }

        // Filter by status
        if ($status = Yii::$app->request->get('status')) {
            $query->andWhere(['status' => $status]);
        }

        return new ActiveDataProvider([
            'query' => $query,
            'pagination' => [
                'pageSize' => Yii::$app->params['defaultPageSize'],
                'pageSizeLimit' => [1, Yii::$app->params['maxPageSize']],
            ],
            'sort' => [
                'defaultOrder' => [
                    'created_at' => SORT_DESC,
                ]
            ],
        ]);
    }

    /**
     * Create new application
     */
    public function actionCreate()
    {
        $model = new Application();
        
        if ($model->load(Yii::$app->request->post(), '')) {
            // Validate vacancy exists and is active
            $vacancy = Vacancy::findOne($model->vacancy_id);
            if (!$vacancy || $vacancy->status !== Vacancy::STATUS_ACTIVE) {
                throw new BadRequestHttpException('Вакансия не найдена или неактивна.');
            }
            
            $model->company_id = $vacancy->company_id;
            
            // Handle file upload
            $uploadedFile = UploadedFile::getInstanceByName('resume');
            if ($uploadedFile) {
                $fileName = uniqid() . '.' . $uploadedFile->extension;
                $uploadPath = Yii::getAlias('@webroot') . '/uploads/resumes/';
                
                if (!is_dir($uploadPath)) {
                    mkdir($uploadPath, 0755, true);
                }
                
                if ($uploadedFile->saveAs($uploadPath . $fileName)) {
                    $model->resume = 'resumes/' . $fileName;
                }
            }
            
            if ($model->save()) {
                // Send notification email
                $model->sendNotificationEmail();
                
                Yii::$app->response->setStatusCode(201);
                return $model;
            } else {
                Yii::$app->response->setStatusCode(422);
                return $model->errors;
            }
        }
        
        throw new BadRequestHttpException('Неверные данные.');
    }

    /**
     * Get application by ID
     */
    public function actionView($id)
    {
        return $this->findModel($id);
    }

    /**
     * Get application statuses
     */
    public function actionStatuses()
    {
        return [
            Application::STATUS_NEW => 'Новая',
            Application::STATUS_REVIEWED => 'Рассмотрена',
            Application::STATUS_INTERVIEW => 'Собеседование',
            Application::STATUS_ACCEPTED => 'Принята',
            Application::STATUS_REJECTED => 'Отклонена',
        ];
    }

    /**
     * Find model by ID
     */
    protected function findModel($id)
    {
        if (($model = Application::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('Заявка не найдена.');
    }
}
