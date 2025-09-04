<?php

return [
    'adminEmail' => 'admin@hr-holding.ru',
    'supportEmail' => 'support@hr-holding.ru',
    'user.passwordResetTokenExpire' => 3600,
    'user.passwordMinLength' => 8,
    
    // HR-Холдинг specific parameters
    'company' => [
        'name' => 'HR-Холдинг',
        'phone' => '+7 (495) 123-45-67',
        'email' => 'info@hr-holding.ru',
        'address' => 'Москва, ул. Примерная, д. 1, БЦ "Примерный", офис 100',
        'workingHours' => 'Пн-Пт: 9:00 - 18:00',
    ],
    
    // File upload settings
    'uploadPath' => '@webroot/uploads/',
    'uploadUrl' => '@web/uploads/',
    'maxFileSize' => 5 * 1024 * 1024, // 5MB
    'allowedExtensions' => ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx'],
    
    // Pagination
    'defaultPageSize' => 20,
    'maxPageSize' => 100,
    
    // API settings
    'api' => [
        'rateLimit' => 100, // requests per minute
        'enableCors' => true,
        'corsOrigin' => ['http://localhost:3000', 'https://hr-holding.ru'],
    ],
    
    // Email templates
    'emailTemplates' => [
        'contact' => '@app/mail/contact',
        'application' => '@app/mail/application',
        'welcome' => '@app/mail/welcome',
    ],
    
    // Cache settings
    'cache' => [
        'duration' => 3600, // 1 hour
        'dependency' => null,
    ],
    
    // Security settings
    'security' => [
        'passwordResetTokenExpire' => 3600,
        'emailVerificationTokenExpire' => 86400, // 24 hours
        'maxLoginAttempts' => 5,
        'lockoutDuration' => 900, // 15 minutes
    ],
];
