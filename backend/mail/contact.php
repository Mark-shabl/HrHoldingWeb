<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $contact app\models\Contact */

$this->title = 'Новое обращение с сайта HR-Холдинг';
?>

<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #0A2540;">Новое обращение с сайта HR-Холдинг</h2>
    
    <div style="background: #F8F5F0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0A2540; margin-top: 0;">Информация о клиенте:</h3>
        <p><strong>Имя:</strong> <?= Html::encode($contact->name) ?></p>
        <p><strong>Email:</strong> <?= Html::encode($contact->email) ?></p>
        <?php if ($contact->phone): ?>
            <p><strong>Телефон:</strong> <?= Html::encode($contact->phone) ?></p>
        <?php endif; ?>
        <?php if ($contact->company): ?>
            <p><strong>Компания:</strong> <?= Html::encode($contact->company) ?></p>
        <?php endif; ?>
    </div>
    
    <div style="background: #FFFFFF; padding: 20px; border: 1px solid #E6DAC8; border-radius: 8px;">
        <h3 style="color: #0A2540; margin-top: 0;">Сообщение:</h3>
        <p style="line-height: 1.6;"><?= nl2br(Html::encode($contact->message)) ?></p>
    </div>
    
    <div style="margin-top: 20px; padding: 15px; background: #C45C2A; color: white; border-radius: 8px;">
        <p style="margin: 0;"><strong>Дата обращения:</strong> <?= Yii::$app->formatter->asDatetime($contact->created_at) ?></p>
    </div>
    
    <div style="margin-top: 20px; text-align: center; color: #8B8B8B; font-size: 12px;">
        <p>Это письмо отправлено автоматически с сайта HR-Холдинг</p>
    </div>
</div>
