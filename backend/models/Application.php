<?php

namespace app\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

/**
 * Application model
 *
 * @property integer $id
 * @property integer $vacancy_id
 * @property integer $company_id
 * @property string $full_name
 * @property string $email
 * @property string $phone
 * @property string $resume
 * @property string $cover_letter
 * @property string $status
 * @property string $notes
 * @property integer $created_at
 * @property integer $updated_at
 */
class Application extends ActiveRecord
{
    const STATUS_NEW = 'new';
    const STATUS_REVIEWED = 'reviewed';
    const STATUS_INTERVIEW = 'interview';
    const STATUS_ACCEPTED = 'accepted';
    const STATUS_REJECTED = 'rejected';

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%application}}';
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
            [['vacancy_id', 'company_id', 'full_name', 'email'], 'required'],
            [['vacancy_id', 'company_id'], 'integer'],
            [['cover_letter', 'notes'], 'string'],
            [['full_name', 'email', 'phone', 'resume', 'status'], 'string', 'max' => 255],
            ['email', 'email'],
            ['phone', 'match', 'pattern' => '/^[\+]?[0-9\s\-\(\)]{10,}$/', 'message' => 'Неверный формат телефона'],
            ['cover_letter', 'string', 'max' => 2000],
            ['status', 'default', 'value' => self::STATUS_NEW],
            ['status', 'in', 'range' => [self::STATUS_NEW, self::STATUS_REVIEWED, self::STATUS_INTERVIEW, self::STATUS_ACCEPTED, self::STATUS_REJECTED]],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'vacancy_id' => 'Вакансия',
            'company_id' => 'Компания',
            'full_name' => 'ФИО',
            'email' => 'Email',
            'phone' => 'Телефон',
            'resume' => 'Резюме',
            'cover_letter' => 'Сопроводительное письмо',
            'status' => 'Статус',
            'notes' => 'Заметки',
            'created_at' => 'Дата подачи',
            'updated_at' => 'Дата обновления',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getVacancy()
    {
        return $this->hasOne(Vacancy::class, ['id' => 'vacancy_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCompany()
    {
        return $this->hasOne(Company::class, ['id' => 'company_id']);
    }

    /**
     * Get status label
     * @return string
     */
    public function getStatusLabel()
    {
        $labels = [
            self::STATUS_NEW => 'Новая',
            self::STATUS_REVIEWED => 'Рассмотрена',
            self::STATUS_INTERVIEW => 'Собеседование',
            self::STATUS_ACCEPTED => 'Принята',
            self::STATUS_REJECTED => 'Отклонена',
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
            self::STATUS_REVIEWED => 'badge-info',
            self::STATUS_INTERVIEW => 'badge-warning',
            self::STATUS_ACCEPTED => 'badge-success',
            self::STATUS_REJECTED => 'badge-danger',
        ];
        return $colors[$this->status] ?? 'badge-secondary';
    }

    /**
     * Get resume URL
     * @return string|null
     */
    public function getResumeUrl()
    {
        if ($this->resume) {
            return Yii::$app->params['uploadUrl'] . $this->resume;
        }
        return null;
    }

    /**
     * Send notification email to company
     */
    public function sendNotificationEmail()
    {
        if ($this->company && $this->company->email) {
            $vacancyTitle = $this->vacancy ? $this->vacancy->title : 'Неизвестная вакансия';
            Yii::$app->mailer->compose('application', ['application' => $this])
                ->setTo($this->company->email)
                ->setSubject('Новая заявка на вакансию: ' . $vacancyTitle)
                ->send();
        }
    }
}
