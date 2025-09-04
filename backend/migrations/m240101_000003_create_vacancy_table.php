<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%vacancy}}`.
 */
class m240101_000003_create_vacancy_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%vacancy}}', [
            'id' => $this->primaryKey(),
            'company_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text()->notNull(),
            'requirements' => $this->text(),
            'responsibilities' => $this->text(),
            'benefits' => $this->text(),
            'location' => $this->string(255),
            'employment_type' => $this->string(50),
            'experience_level' => $this->string(50),
            'salary_from' => $this->string(50),
            'salary_to' => $this->string(50),
            'currency' => $this->string(10)->defaultValue('RUB'),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        $this->createIndex('idx-vacancy-company_id', '{{%vacancy}}', 'company_id');
        $this->createIndex('idx-vacancy-status', '{{%vacancy}}', 'status');
        $this->createIndex('idx-vacancy-employment_type', '{{%vacancy}}', 'employment_type');
        $this->createIndex('idx-vacancy-experience_level', '{{%vacancy}}', 'experience_level');

        $this->addForeignKey(
            'fk-vacancy-company_id',
            '{{%vacancy}}',
            'company_id',
            '{{%company}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-vacancy-company_id', '{{%vacancy}}');
        $this->dropTable('{{%vacancy}}');
    }
}
