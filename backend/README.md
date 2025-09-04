# HR-Холдинг Backend API

Backend API для системы HR-Холдинг, построенный на фреймворке Yii2.

## Возможности

- **REST API** для фронтенда
- **Административная панель** для управления
- **Управление компаниями** и вакансиями
- **Обработка заявок** кандидатов
- **Email уведомления** и автоответы
- **Загрузка файлов** (резюме, логотипы)
- **CORS поддержка** для фронтенда
- **Безопасность** и валидация данных

## Быстрый старт

### Требования

- PHP >= 7.4
- MySQL >= 5.7
- Composer
- Веб-сервер (Apache/Nginx)

### Установка

1. **Клонирование и установка зависимостей:**
```bash
git clone <repository-url>
cd hr-holding/backend
composer install
```

2. **Настройка базы данных:**
```bash
# Создайте базу данных
mysql -u root -p
CREATE DATABASE hr_holding CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Настройте подключение в config/db.php
```

3. **Выполнение миграций:**
```bash
php yii migrate
```

4. **Настройка прав доступа:**
```bash
chmod 755 yii
chmod -R 777 runtime/
chmod -R 777 web/assets/
chmod -R 777 web/uploads/
```

5. **Настройка веб-сервера:**
Настройте веб-сервер на папку `web/` как корневую директорию.

## API Endpoints

### Компании
```
GET    /api/v1/companies           # Список компаний
GET    /api/v1/companies/{id}      # Информация о компании
```

### Вакансии
```
GET    /api/v1/vacancies                    # Список вакансий
GET    /api/v1/vacancies/{id}               # Информация о вакансии
GET    /api/v1/vacancies/employment-types   # Типы занятости
GET    /api/v1/vacancies/experience-levels  # Уровни опыта
```

### Заявки
```
GET    /api/v1/applications         # Список заявок
POST   /api/v1/applications         # Создание заявки
GET    /api/v1/applications/{id}    # Информация о заявке
GET    /api/v1/applications/statuses # Статусы заявок
```

### Контакты
```
POST   /api/v1/contacts             # Отправка сообщения
```

## Примеры использования

### Получение списка вакансий
```bash
curl -X GET "http://localhost/api/v1/vacancies" \
  -H "Accept: application/json"
```

### Создание заявки
```bash
curl -X POST "http://localhost/api/v1/applications" \
  -H "Content-Type: application/json" \
  -d '{
    "vacancy_id": 1,
    "full_name": "Иван Иванов",
    "email": "ivan@example.com",
    "phone": "+7 (999) 123-45-67",
    "cover_letter": "Заинтересован в данной позиции..."
  }'
```

### Отправка сообщения
```bash
curl -X POST "http://localhost/api/v1/contacts" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Петр Петров",
    "email": "petr@example.com",
    "phone": "+7 (999) 123-45-67",
    "company": "ООО Пример",
    "message": "Интересуют ваши услуги..."
  }'
```

## Административная панель

Доступна по адресу: `/admin`

Функции:
- Просмотр статистики
- Управление заявками
- Обработка контактов
- Управление компаниями и вакансиями

## Конфигурация

### Основные настройки (config/params.php)
```php
return [
    'adminEmail' => 'admin@hr-holding.ru',
    'company' => [
        'name' => 'HR-Холдинг',
        'phone' => '+7 (495) 123-45-67',
        'email' => 'info@hr-holding.ru',
    ],
    'api' => [
        'corsOrigin' => ['http://localhost:3000', 'https://hr-holding.ru'],
    ],
];
```

### База данных (config/db.php)
```php
return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=hr_holding',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8mb4',
];
```

## Email уведомления

Система автоматически отправляет:
- Уведомления о новых заявках
- Уведомления о контактах
- Автоответы пользователям

Настройка SMTP в `config/web.php`:
```php
'mailer' => [
    'class' => 'yii\swiftmailer\Mailer',
    'transport' => [
        'class' => 'Swift_SmtpTransport',
        'host' => 'smtp.gmail.com',
        'username' => 'your-email@gmail.com',
        'password' => 'your-password',
        'port' => '587',
        'encryption' => 'tls',
    ],
],
```

## Разработка

### Генерация кода
```bash
# Генерация модели
php yii gii/model --tableName=table_name

# Генерация CRUD
php yii gii/crud --modelClass=app\\models\\ModelName

# Генерация миграции
php yii migrate/create create_table_name
```

### Отладка
В режиме разработки доступна отладка по адресу `/debug`

### Тестирование
```bash
# Установка Codeception
composer require --dev codeception/codeception

# Запуск тестов
php vendor/bin/codecept run
```

## Безопасность

- CORS настройки для фронтенда
- Валидация всех входных данных
- Защита от SQL инъекций
- Безопасная загрузка файлов
- Защищенные заголовки HTTP

## Мониторинг

- Логи в `runtime/logs/`
- Кэширование запросов
- Профилирование в dev режиме

## Развертывание

### Production
1. Отключите debug режим
2. Настройте production БД
3. Настройте веб-сервер
4. Настройте SSL
5. Настройте мониторинг

### Docker (планируется)
- Dockerfile для контейнеризации
- docker-compose для разработки

## Поддержка

- Email: support@hr-holding.ru
- Документация: [BACKEND_STRUCTURE.md](./BACKEND_STRUCTURE.md)
- Issues: [ссылка на репозиторий]

## Лицензия

BSD-3-Clause
