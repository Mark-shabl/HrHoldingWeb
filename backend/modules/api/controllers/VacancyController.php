<?php

namespace app\modules\api\controllers;

use app\models\Vacancy;
use Yii;
use yii\data\ActiveDataProvider;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;

/**
 * VacancyController implements the CRUD actions for Vacancy model.
 */
class VacancyController extends ActiveController
{
    public $modelClass = 'app\models\Vacancy';

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
        $query = Vacancy::find()
            ->where(['status' => Vacancy::STATUS_ACTIVE])
            ->with(['company']);

        // Filter by company
        if ($companyId = Yii::$app->request->get('company_id')) {
            $query->andWhere(['company_id' => $companyId]);
        }

        // Filter by employment type
        if ($employmentType = Yii::$app->request->get('employment_type')) {
            $query->andWhere(['employment_type' => $employmentType]);
        }

        // Filter by experience level
        if ($experienceLevel = Yii::$app->request->get('experience_level')) {
            $query->andWhere(['experience_level' => $experienceLevel]);
        }

        // Search by title
        if ($search = Yii::$app->request->get('search')) {
            $query->andWhere(['like', 'title', $search]);
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
     * Get vacancy by ID
     */
    public function actionView($id)
    {
        $model = $this->findModel($id);
        
        if ($model->status !== Vacancy::STATUS_ACTIVE) {
            throw new NotFoundHttpException('Вакансия не найдена или неактивна.');
        }
        
        return $model;
    }

    /**
     * Get employment types
     */
    public function actionEmploymentTypes()
    {
        return [
            Vacancy::EMPLOYMENT_TYPE_FULL_TIME => 'Полная занятость',
            Vacancy::EMPLOYMENT_TYPE_PART_TIME => 'Частичная занятость',
            Vacancy::EMPLOYMENT_TYPE_CONTRACT => 'Контракт',
            Vacancy::EMPLOYMENT_TYPE_INTERNSHIP => 'Стажировка',
        ];
    }

    /**
     * Get experience levels
     */
    public function actionExperienceLevels()
    {
        return [
            Vacancy::EXPERIENCE_LEVEL_INTERN => 'Стажер',
            Vacancy::EXPERIENCE_LEVEL_JUNIOR => 'Junior',
            Vacancy::EXPERIENCE_LEVEL_MIDDLE => 'Middle',
            Vacancy::EXPERIENCE_LEVEL_SENIOR => 'Senior',
            Vacancy::EXPERIENCE_LEVEL_LEAD => 'Lead',
        ];
    }

    /**
     * Find model by ID
     */
    protected function findModel($id)
    {
        if (($model = Vacancy::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('Вакансия не найдена.');
    }
}
