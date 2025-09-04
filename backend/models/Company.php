<?php

namespace app\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

/**
 * Company model
 *
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property string $website
 * @property string $email
 * @property string $phone
 * @property string $address
 * @property string $logo
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class Company extends ActiveRecord
{
    const STATUS_INACTIVE = 0;
    const STATUS_ACTIVE = 1;

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%company}}';
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
            [['name', 'email'], 'required'],
            [['description'], 'string'],
            [['status'], 'integer'],
            [['name', 'website', 'email', 'phone', 'address', 'logo'], 'string', 'max' => 255],
            ['email', 'email'],
            ['website', 'url'],
            ['status', 'default', 'value' => self::STATUS_ACTIVE],
            ['status', 'in', 'range' => [self::STATUS_ACTIVE, self::STATUS_INACTIVE]],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Название компании',
            'description' => 'Описание',
            'website' => 'Веб-сайт',
            'email' => 'Email',
            'phone' => 'Телефон',
            'address' => 'Адрес',
            'logo' => 'Логотип',
            'status' => 'Статус',
            'created_at' => 'Дата создания',
            'updated_at' => 'Дата обновления',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getVacancies()
    {
        return $this->hasMany(Vacancy::class, ['company_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getApplications()
    {
        return $this->hasMany(Application::class, ['company_id' => 'id']);
    }

    /**
     * Get status label
     * @return string
     */
    public function getStatusLabel()
    {
        return $this->status === self::STATUS_ACTIVE ? 'Активна' : 'Неактивна';
    }

    /**
     * Get logo URL
     * @return string|null
     */
    public function getLogoUrl()
    {
        if ($this->logo) {
            return Yii::$app->params['uploadUrl'] . $this->logo;
        }
        return null;
    }
}
