<?php

namespace app\modules\api\controllers;

use app\models\Contact;
use Yii;
use yii\rest\Controller;
use yii\web\BadRequestHttpException;

/**
 * ContactController handles contact form submissions.
 */
class ContactController extends Controller
{
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
     * Create new contact message
     */
    public function actionCreate()
    {
        $model = new Contact();
        
        if ($model->load(Yii::$app->request->post(), '')) {
            if ($model->save()) {
                // Send notification email to admin
                $model->sendNotificationEmail();
                
                // Send auto-reply to user
                $model->sendAutoReply();
                
                Yii::$app->response->setStatusCode(201);
                return [
                    'success' => true,
                    'message' => 'Сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.',
                    'data' => $model
                ];
            } else {
                Yii::$app->response->setStatusCode(422);
                return [
                    'success' => false,
                    'message' => 'Ошибка валидации данных.',
                    'errors' => $model->errors
                ];
            }
        }
        
        throw new BadRequestHttpException('Неверные данные.');
    }
}
