<?php

namespace app\modules\admin\controllers;

use app\models\Application;
use app\models\Company;
use app\models\Contact;
use app\models\Vacancy;
use yii\web\Controller;

/**
 * Default controller for the `admin` module
 */
class DefaultController extends Controller
{
    /**
     * Renders the index view for the module
     * @return string
     */
    public function actionIndex()
    {
        // Get statistics
        $stats = [
            'companies' => Company::find()->count(),
            'vacancies' => Vacancy::find()->count(),
            'applications' => Application::find()->count(),
            'contacts' => Contact::find()->count(),
            'newApplications' => Application::find()->where(['status' => Application::STATUS_NEW])->count(),
            'newContacts' => Contact::find()->where(['status' => Contact::STATUS_NEW])->count(),
        ];

        // Get recent applications
        $recentApplications = Application::find()
            ->with(['vacancy', 'company'])
            ->orderBy(['created_at' => SORT_DESC])
            ->limit(5)
            ->all();

        // Get recent contacts
        $recentContacts = Contact::find()
            ->orderBy(['created_at' => SORT_DESC])
            ->limit(5)
            ->all();

        return $this->render('index', [
            'stats' => $stats,
            'recentApplications' => $recentApplications,
            'recentContacts' => $recentContacts,
        ]);
    }
}
