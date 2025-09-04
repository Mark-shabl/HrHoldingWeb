<?php

namespace app\modules\api\controllers;

use app\models\Company;
use Yii;
use yii\data\ActiveDataProvider;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;

/**
 * CompanyController implements the CRUD actions for Company model.
 */
class CompanyController extends ActiveController
{
    public $modelClass = 'app\models\Company';

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
        return new ActiveDataProvider([
            'query' => Company::find()->where(['status' => Company::STATUS_ACTIVE]),
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
     * Get company by ID
     */
    public function actionView($id)
    {
        $model = $this->findModel($id);
        
        if ($model->status !== Company::STATUS_ACTIVE) {
            throw new NotFoundHttpException('Компания не найдена или неактивна.');
        }
        
        return $model;
    }

    /**
     * Find model by ID
     */
    protected function findModel($id)
    {
        if (($model = Company::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('Компания не найдена.');
    }
}
