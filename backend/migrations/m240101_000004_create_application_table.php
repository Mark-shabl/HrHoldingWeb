<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%application}}`.
 */
class m240101_000004_create_application_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%application}}', [
            'id' => $this->primaryKey(),
            'vacancy_id' => $this->integer()->notNull(),
            'company_id' => $this->integer()->notNull(),
            'full_name' => $this->string(255)->notNull(),
            'email' => $this->string(255)->notNull(),
            'phone' => $this->string(255),
            'resume' => $this->string(255),
            'cover_letter' => $this->text(),
            'status' => $this->string(50)->notNull()->defaultValue('new'),
            'notes' => $this->text(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        $this->createIndex('idx-application-vacancy_id', '{{%application}}', 'vacancy_id');
        $this->createIndex('idx-application-company_id', '{{%application}}', 'company_id');
        $this->createIndex('idx-application-status', '{{%application}}', 'status');
        $this->createIndex('idx-application-email', '{{%application}}', 'email');

        $this->addForeignKey(
            'fk-application-vacancy_id',
            '{{%application}}',
            'vacancy_id',
            '{{%vacancy}}',
            'id',
            'CASCADE'
        );

        $this->addForeignKey(
            'fk-application-company_id',
            '{{%application}}',
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
        $this->dropForeignKey('fk-application-vacancy_id', '{{%application}}');
        $this->dropForeignKey('fk-application-company_id', '{{%application}}');
        $this->dropTable('{{%application}}');
    }
}
