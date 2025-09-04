<?php

namespace app\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

/**
 * Contact model
 *
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string $company
 * @property string $message
 * @property string $status
 * @property string $notes
 * @property integer $created_at
 * @property integer $updated_at
 */
class Contact extends ActiveRecord
{
    const STATUS_NEW = 'new';
    const STATUS_PROCESSED = 'processed';
    const STATUS_CLOSED = 'closed';

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%contact}}';
    }

    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            TimestampBehavior::class,
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'email', 'message'], 'required'],
            [['message', 'notes'], 'string'],
            [['name', 'email', 'phone', 'company', 'status'], 'string', 'max' => 255],
            ['email', 'email'],
            ['status', 'default', 'value' => self::STATUS_NEW],
            ['status', 'in', 'range' => [self::STATUS_NEW, self::STATUS_PROCESSED, self::STATUS_CLOSED]],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Имя',
            'email' => 'Email',
            'phone' => 'Телефон',
            'company' => 'Компания',
            'message' => 'Сообщение',
            'status' => 'Статус',
            'notes' => 'Заметки',
            'created_at' => 'Дата обращения',
            'updated_at' => 'Дата обновления',
        ];
    }

    /**
     * Get status label
     * @return string
     */
    public function getStatusLabel()
    {
        $labels = [
            self::STATUS_NEW => 'Новое',
            self::STATUS_PROCESSED => 'В обработке',
            self::STATUS_CLOSED => 'Закрыто',
        ];
        return $labels[$this->status] ?? 'Неизвестно';
    }

    /**
     * Get status color class
     * @return string
     */
    public function getStatusColorClass()
    {
        $colors = [
            self::STATUS_NEW => 'badge-primary',
            self::STATUS_PROCESSED => 'badge-warning',
            self::STATUS_CLOSED => 'badge-success',
        ];
        return $colors[$this->status] ?? 'badge-secondary';
    }

    /**
     * Send notification email to admin
     */
    public function sendNotificationEmail()
    {
        $adminEmail = Yii::$app->params['adminEmail'];
        
        Yii::$app->mailer->compose('contact', ['contact' => $this])
            ->setTo($adminEmail)
            ->setSubject('Новое обращение с сайта HR-Холдинг')
            ->send();
    }

    /**
     * Send auto-reply to user
     */
    public function sendAutoReply()
    {
        Yii::$app->mailer->compose('contact-auto-reply', ['contact' => $this])
            ->setTo($this->email)
            ->setSubject('Спасибо за обращение в HR-Холдинг')
            ->send();
    }
}
