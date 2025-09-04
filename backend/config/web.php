<?php

$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';

$config = [
    'id' => 'hr-holding-backend',
    'name' => 'HR-Холдинг Backend',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'components' => [
        'request' => [
            'cookieValidationKey' => 'hr-holding-cookie-key-2024',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ],
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'useFileTransport' => false,
            'transport' => [
                'class' => 'Swift_SmtpTransport',
                'host' => 'smtp.gmail.com',
                'username' => 'your-email@gmail.com',
                'password' => 'your-password',
                'port' => '587',
                'encryption' => 'tls',
            ],
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => $db,
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                // API routes
                'api/v1/companies' => 'api/company/index',
                'api/v1/companies/<id:\d+>' => 'api/company/view',
                'api/v1/vacancies' => 'api/vacancy/index',
                'api/v1/vacancies/<id:\d+>' => 'api/vacancy/view',
                'api/v1/applications' => 'api/application/index',
                'api/v1/applications/<id:\d+>' => 'api/application/view',
                'api/v1/contacts' => 'api/contact/create',
                'api/v1/auth/login' => 'api/auth/login',
                'api/v1/auth/logout' => 'api/auth/logout',
                'api/v1/auth/register' => 'api/auth/register',
                
                // Web routes
                'admin' => 'admin/default/index',
                'admin/<controller:\w+>' => 'admin/<controller>/index',
                'admin/<controller:\w+>/<action:\w+>' => 'admin/<controller>/<action>',
                'admin/<controller:\w+>/<action:\w+>/<id:\d+>' => 'admin/<controller>/<action>',
                
                // Default routes
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
            ],
        ],
        'authManager' => [
            'class' => 'yii\rbac\DbManager',
        ],
        'formatter' => [
            'class' => 'yii\i18n\Formatter',
            'dateFormat' => 'php:d.m.Y',
            'datetimeFormat' => 'php:d.m.Y H:i',
            'timeFormat' => 'php:H:i:s',
        ],
    ],
    'params' => $params,
    'modules' => [
        'admin' => [
            'class' => 'app\modules\admin\Module',
        ],
        'api' => [
            'class' => 'app\modules\api\Module',
        ],
    ],
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
