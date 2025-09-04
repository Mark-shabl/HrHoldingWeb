<?php

return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=hr_holding',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8mb4',

    // Schema cache options (for production environment)
    'enableSchemaCache' => true,
    'schemaCacheDuration' => 60,
    'schemaCache' => 'cache',

    // Query cache options
    'enableQueryCache' => true,
    'queryCacheDuration' => 60,

    // Connection timeout
    'attributes' => [
        PDO::ATTR_TIMEOUT => 10,
    ],
];
