<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%company}}`.
 */
class m240101_000002_create_company_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%company}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'website' => $this->string(255),
            'email' => $this->string(255)->notNull(),
            'phone' => $this->string(255),
            'address' => $this->string(255),
            'logo' => $this->string(255),
            'status' => $this->smallInteger()->notNull()->defaultValue(1),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        $this->createIndex('idx-company-name', '{{%company}}', 'name');
        $this->createIndex('idx-company-email', '{{%company}}', 'email');
        $this->createIndex('idx-company-status', '{{%company}}', 'status');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%company}}');
    }
}
