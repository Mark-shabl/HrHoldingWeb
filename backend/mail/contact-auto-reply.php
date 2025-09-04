<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $contact app\models\Contact */

$this->title = 'Спасибо за обращение в HR-Холдинг';
?>

<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #0A2540; margin: 0;">HR-ХОЛДИНГ</h1>
        <p style="color: #8B8B8B; margin: 5px 0 0 0;">Ваш надежный партнер в области HR</p>
    </div>
    
    <h2 style="color: #0A2540;">Спасибо за обращение!</h2>
    
    <p>Уважаемый(ая) <strong><?= Html::encode($contact->name) ?></strong>,</p>
    
    <p>Мы получили ваше сообщение и благодарим за интерес к нашим услугам. Наша команда рассмотрит ваше обращение и свяжется с вами в течение 24 часов.</p>
    
    <div style="background: #F8F5F0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0A2540; margin-top: 0;">Наши услуги:</h3>
        <ul style="color: #4A4A4A;">
            <li>Подбор персонала</li>
            <li>HR-консалтинг</li>
            <li>Обучение сотрудников</li>
            <li>Аутсорсинг HR</li>
            <li>Оценка персонала</li>
            <li>Адаптация персонала</li>
        </ul>
    </div>
    
    <div style="background: #C45C2A; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Контакты:</h3>
        <p style="margin: 5px 0;"><strong>Телефон:</strong> +7 (495) 123-45-67</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> info@hr-holding.ru</p>
        <p style="margin: 5px 0;"><strong>Адрес:</strong> Москва, ул. Примерная, д. 1, БЦ "Примерный", офис 100</p>
        <p style="margin: 5px 0;"><strong>Время работы:</strong> Пн-Пт: 9:00 - 18:00</p>
    </div>
    
    <p>С уважением,<br>Команда HR-Холдинг</p>
    
    <div style="margin-top: 30px; text-align: center; color: #8B8B8B; font-size: 12px;">
        <p>Это письмо отправлено автоматически. Пожалуйста, не отвечайте на него.</p>
    </div>
</div>
