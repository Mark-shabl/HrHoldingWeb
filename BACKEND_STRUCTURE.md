# Структура бэкенда HR-Холдинг (Yii2)

## Обзор

Бэкенд HR-Холдинг построен на фреймворке Yii2 и предоставляет REST API для фронтенда, а также административную панель для управления системой.

## Структура проекта

```
backend/
├── config/                     # Конфигурационные файлы
│   ├── web.php                # Конфигурация веб-приложения
│   ├── console.php            # Конфигурация консольного приложения
│   ├── db.php                 # Конфигурация базы данных
│   └── params.php             # Параметры приложения
├── models/                     # Модели данных
│   ├── User.php               # Модель пользователя
│   ├── Company.php            # Модель компании
│   ├── Vacancy.php            # Модель вакансии
│   ├── Application.php        # Модель заявки
│   └── Contact.php            # Модель контакта
├── modules/                    # Модули приложения
│   ├── api/                   # API модуль
│   │   ├── controllers/       # API контроллеры
│   │   │   ├── CompanyController.php
│   │   │   ├── VacancyController.php
│   │   │   ├── ApplicationController.php
│   │   │   └── ContactController.php
│   │   └── Module.php
│   └── admin/                 # Административный модуль
│       ├── controllers/       # Админ контроллеры
│       │   └── DefaultController.php
│       └── Module.php
├── migrations/                 # Миграции базы данных
│   ├── m240101_000001_create_user_table.php
│   ├── m240101_000002_create_company_table.php
│   ├── m240101_000003_create_vacancy_table.php
│   ├── m240101_000004_create_application_table.php
│   └── m240101_000005_create_contact_table.php
├── mail/                       # Шаблоны email
│   ├── contact.php            # Уведомление о контакте
│   ├── contact-auto-reply.php # Автоответ на контакт
│   └── application.php        # Уведомление о заявке
├── web/                        # Веб-файлы
│   ├── index.php              # Точка входа
│   └── uploads/               # Загруженные файлы
├── yii                        # Консольный скрипт
├── composer.json              # Зависимости Composer
└── README.md                  # Документация
```

## Модели данных

### User (Пользователь)
- Управление пользователями системы
- Аутентификация и авторизация
- Статусы: активный, неактивный, удаленный

### Company (Компания)
- Информация о компаниях-клиентах
- Связь с вакансиями и заявками
- Логотип и контактная информация

### Vacancy (Вакансия)
- Описание вакансий
- Требования, обязанности, условия
- Типы занятости и уровни опыта
- Связь с компанией и заявками

### Application (Заявка)
- Заявки кандидатов на вакансии
- Резюме и сопроводительные письма
- Статусы обработки заявок
- Уведомления по email

### Contact (Контакт)
- Обращения через форму контактов
- Автоматические уведомления
- Статусы обработки обращений

## API Endpoints

### Компании
- `GET /api/v1/companies` - Список активных компаний
- `GET /api/v1/companies/{id}` - Информация о компании

### Вакансии
- `GET /api/v1/vacancies` - Список активных вакансий
- `GET /api/v1/vacancies/{id}` - Информация о вакансии
- `GET /api/v1/vacancies/employment-types` - Типы занятости
- `GET /api/v1/vacancies/experience-levels` - Уровни опыта

### Заявки
- `GET /api/v1/applications` - Список заявок
- `POST /api/v1/applications` - Создание заявки
- `GET /api/v1/applications/{id}` - Информация о заявке
- `GET /api/v1/applications/statuses` - Статусы заявок

### Контакты
- `POST /api/v1/contacts` - Отправка сообщения

## Установка и настройка

### 1. Установка зависимостей
```bash
cd backend
composer install
```

### 2. Настройка базы данных
Отредактируйте файл `config/db.php`:
```php
return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=hr_holding',
    'username' => 'your_username',
    'password' => 'your_password',
    'charset' => 'utf8mb4',
];
```

### 3. Выполнение миграций
```bash
php yii migrate
```

### 4. Настройка веб-сервера
Настройте веб-сервер на папку `web/` как корневую директорию.

### 5. Настройка прав доступа
```bash
chmod 755 yii
chmod -R 777 runtime/
chmod -R 777 web/assets/
chmod -R 777 web/uploads/
```

## Конфигурация

### Основные параметры (config/params.php)
- Настройки компании
- Пути для загрузки файлов
- Настройки API и CORS
- Параметры безопасности
- Настройки email

### База данных (config/db.php)
- Подключение к MySQL
- Кэширование схемы
- Таймауты соединения

### Веб-приложение (config/web.php)
- URL правила
- Модули (API, Admin)
- Компоненты (кэш, почта, логи)
- Настройки отладки

## Безопасность

### CORS
Настроен для работы с фронтендом:
- Разрешенные домены
- Разрешенные методы
- Заголовки

### Валидация данных
- Валидация email
- Проверка файлов
- Санитизация входных данных

### Аутентификация
- JWT токены (планируется)
- RBAC роли
- Защита от CSRF

## Email уведомления

### Шаблоны
- `contact.php` - Уведомление о новом обращении
- `contact-auto-reply.php` - Автоответ пользователю
- `application.php` - Уведомление о новой заявке

### Настройка SMTP
В `config/web.php`:
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

## Административная панель

### Доступ
- URL: `/admin`
- Статистика системы
- Управление заявками
- Управление контактами
- Управление компаниями и вакансиями

### Функции
- Просмотр статистики
- Обработка заявок
- Управление статусами
- Просмотр логов

## Разработка

### Генерация кода
```bash
# Генерация CRUD
php yii gii/model --tableName=table_name
php yii gii/crud --modelClass=app\\models\\ModelName

# Генерация миграции
php yii migrate/create create_table_name
```

### Отладка
- Включена в dev режиме
- URL: `/debug`
- Профилирование запросов
- Логи ошибок

### Тестирование
```bash
# Установка Codeception
composer require --dev codeception/codeception

# Генерация тестов
php vendor/bin/codecept generate:test unit models/UserTest

# Запуск тестов
php vendor/bin/codecept run
```

## Мониторинг и логи

### Логирование
- Файлы логов в `runtime/logs/`
- Уровни: error, warning, info
- Ротация логов

### Кэширование
- Файловый кэш по умолчанию
- Кэш схемы БД
- Кэш запросов

## Производительность

### Оптимизация
- Кэширование запросов
- Индексы в БД
- Ленивая загрузка связей
- Пагинация результатов

### Масштабирование
- Поддержка Redis
- Очереди задач
- Горизонтальное масштабирование

## Развертывание

### Production
1. Отключить debug режим
2. Настроить production БД
3. Настроить веб-сервер
4. Настроить SSL
5. Настроить мониторинг

### Docker (планируется)
- Dockerfile для контейнеризации
- docker-compose для разработки
- Настройки для production

## API Документация

### Формат ответов
```json
{
    "success": true,
    "data": {...},
    "message": "Success message"
}
```

### Коды ошибок
- 200 - Успех
- 201 - Создано
- 400 - Неверный запрос
- 401 - Не авторизован
- 403 - Доступ запрещен
- 404 - Не найдено
- 422 - Ошибка валидации
- 500 - Внутренняя ошибка

### Пагинация
```json
{
    "data": [...],
    "pagination": {
        "page": 1,
        "per_page": 20,
        "total": 100,
        "total_pages": 5
    }
}
```

## Поддержка

Для получения поддержки:
- Email: support@hr-holding.ru
- Документация: [ссылка на документацию]
- Issues: [ссылка на репозиторий]
