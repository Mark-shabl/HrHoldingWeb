<?php

namespace app\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

/**
 * Vacancy model
 *
 * @property integer $id
 * @property integer $company_id
 * @property string $title
 * @property string $description
 * @property string $requirements
 * @property string $responsibilities
 * @property string $benefits
 * @property string $location
 * @property string $employment_type
 * @property string $experience_level
 * @property string $salary_from
 * @property string $salary_to
 * @property string $currency
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class Vacancy extends ActiveRecord
{
    const STATUS_DRAFT = 0;
    const STATUS_ACTIVE = 1;
    const STATUS_CLOSED = 2;

    const EMPLOYMENT_TYPE_FULL_TIME = 'full_time';
    const EMPLOYMENT_TYPE_PART_TIME = 'part_time';
    const EMPLOYMENT_TYPE_CONTRACT = 'contract';
    const EMPLOYMENT_TYPE_INTERNSHIP = 'internship';

    const EXPERIENCE_LEVEL_INTERN = 'intern';
    const EXPERIENCE_LEVEL_JUNIOR = 'junior';
    const EXPERIENCE_LEVEL_MIDDLE = 'middle';
    const EXPERIENCE_LEVEL_SENIOR = 'senior';
    const EXPERIENCE_LEVEL_LEAD = 'lead';

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%vacancy}}';
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
            [['company_id', 'title', 'description'], 'required'],
            [['company_id', 'status'], 'integer'],
            [['description', 'requirements', 'responsibilities', 'benefits'], 'string'],
            [['title', 'location', 'employment_type', 'experience_level', 'salary_from', 'salary_to', 'currency'], 'string', 'max' => 255],
            ['status', 'default', 'value' => self::STATUS_DRAFT],
            ['status', 'in', 'range' => [self::STATUS_DRAFT, self::STATUS_ACTIVE, self::STATUS_CLOSED]],
            ['employment_type', 'in', 'range' => [self::EMPLOYMENT_TYPE_FULL_TIME, self::EMPLOYMENT_TYPE_PART_TIME, self::EMPLOYMENT_TYPE_CONTRACT, self::EMPLOYMENT_TYPE_INTERNSHIP]],
            ['experience_level', 'in', 'range' => [self::EXPERIENCE_LEVEL_INTERN, self::EXPERIENCE_LEVEL_JUNIOR, self::EXPERIENCE_LEVEL_MIDDLE, self::EXPERIENCE_LEVEL_SENIOR, self::EXPERIENCE_LEVEL_LEAD]],
            ['currency', 'default', 'value' => 'RUB'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'company_id' => 'Компания',
            'title' => 'Должность',
            'description' => 'Описание',
            'requirements' => 'Требования',
            'responsibilities' => 'Обязанности',
            'benefits' => 'Условия и льготы',
            'location' => 'Местоположение',
            'employment_type' => 'Тип занятости',
            'experience_level' => 'Уровень опыта',
            'salary_from' => 'Зарплата от',
            'salary_to' => 'Зарплата до',
            'currency' => 'Валюта',
            'status' => 'Статус',
            'created_at' => 'Дата создания',
            'updated_at' => 'Дата обновления',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCompany()
    {
        return $this->hasOne(Company::class, ['id' => 'company_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getApplications()
    {
        return $this->hasMany(Application::class, ['vacancy_id' => 'id']);
    }

    /**
     * Get status label
     * @return string
     */
    public function getStatusLabel()
    {
        $labels = [
            self::STATUS_DRAFT => 'Черновик',
            self::STATUS_ACTIVE => 'Активна',
            self::STATUS_CLOSED => 'Закрыта',
        ];
        return $labels[$this->status] ?? 'Неизвестно';
    }

    /**
     * Get employment type label
     * @return string
     */
    public function getEmploymentTypeLabel()
    {
        $labels = [
            self::EMPLOYMENT_TYPE_FULL_TIME => 'Полная занятость',
            self::EMPLOYMENT_TYPE_PART_TIME => 'Частичная занятость',
            self::EMPLOYMENT_TYPE_CONTRACT => 'Контракт',
            self::EMPLOYMENT_TYPE_INTERNSHIP => 'Стажировка',
        ];
        return $labels[$this->employment_type] ?? 'Неизвестно';
    }

    /**
     * Get experience level label
     * @return string
     */
    public function getExperienceLevelLabel()
    {
        $labels = [
            self::EXPERIENCE_LEVEL_INTERN => 'Стажер',
            self::EXPERIENCE_LEVEL_JUNIOR => 'Junior',
            self::EXPERIENCE_LEVEL_MIDDLE => 'Middle',
            self::EXPERIENCE_LEVEL_SENIOR => 'Senior',
            self::EXPERIENCE_LEVEL_LEAD => 'Lead',
        ];
        return $labels[$this->experience_level] ?? 'Неизвестно';
    }

    /**
     * Get formatted salary
     * @return string
     */
    public function getFormattedSalary()
    {
        if (!$this->salary_from && !$this->salary_to) {
            return 'По договоренности';
        }

        $currency = $this->currency === 'RUB' ? '₽' : $this->currency;
        
        if ($this->salary_from && $this->salary_to) {
            return number_format($this->salary_from, 0, ',', ' ') . ' - ' . number_format($this->salary_to, 0, ',', ' ') . ' ' . $currency;
        } elseif ($this->salary_from) {
            return 'от ' . number_format($this->salary_from, 0, ',', ' ') . ' ' . $currency;
        } else {
            return 'до ' . number_format($this->salary_to, 0, ',', ' ') . ' ' . $currency;
        }
    }
}
