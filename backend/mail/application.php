<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $application app\models\Application */

$this->title = 'Новая заявка на вакансию';
?>

<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #0A2540;">Новая заявка на вакансию</h2>
    
    <div style="background: #F8F5F0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0A2540; margin-top: 0;">Информация о кандидате:</h3>
        <p><strong>ФИО:</strong> <?= Html::encode($application->full_name) ?></p>
        <p><strong>Email:</strong> <?= Html::encode($application->email) ?></p>
        <?php if ($application->phone): ?>
            <p><strong>Телефон:</strong> <?= Html::encode($application->phone) ?></p>
        <?php endif; ?>
    </div>
    
    <div style="background: #FFFFFF; padding: 20px; border: 1px solid #E6DAC8; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0A2540; margin-top: 0;">Вакансия:</h3>
        <p><strong>Должность:</strong> <?= Html::encode($application->vacancy->title) ?></p>
        <p><strong>Компания:</strong> <?= Html::encode($application->company->name) ?></p>
        <p><strong>Местоположение:</strong> <?= Html::encode($application->vacancy->location) ?></p>
        <p><strong>Тип занятости:</strong> <?= $application->vacancy->employmentTypeLabel ?></p>
        <p><strong>Уровень опыта:</strong> <?= $application->vacancy->experienceLevelLabel ?></p>
    </div>
    
    <?php if ($application->cover_letter): ?>
        <div style="background: #FFFFFF; padding: 20px; border: 1px solid #E6DAC8; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0A2540; margin-top: 0;">Сопроводительное письмо:</h3>
            <p style="line-height: 1.6;"><?= nl2br(Html::encode($application->cover_letter)) ?></p>
        </div>
    <?php endif; ?>
    
    <?php if ($application->resume): ?>
        <div style="background: #C45C2A; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Резюме:</h3>
            <p><a href="<?= $application->resumeUrl ?>" style="color: white; text-decoration: underline;">Скачать резюме</a></p>
        </div>
    <?php endif; ?>
    
    <div style="margin-top: 20px; padding: 15px; background: #0A2540; color: white; border-radius: 8px;">
        <p style="margin: 0;"><strong>Дата подачи заявки:</strong> <?= Yii::$app->formatter->asDatetime($application->created_at) ?></p>
    </div>
    
    <div style="margin-top: 20px; text-align: center; color: #8B8B8B; font-size: 12px;">
        <p>Это письмо отправлено автоматически с сайта HR-Холдинг</p>
    </div>
</div>
