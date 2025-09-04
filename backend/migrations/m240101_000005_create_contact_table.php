<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%contact}}`.
 */
class m240101_000005_create_contact_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%contact}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
            'email' => $this->string(255)->notNull(),
            'phone' => $this->string(255),
            'company' => $this->string(255),
            'message' => $this->text()->notNull(),
            'status' => $this->string(50)->notNull()->defaultValue('new'),
            'notes' => $this->text(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        $this->createIndex('idx-contact-email', '{{%contact}}', 'email');
        $this->createIndex('idx-contact-status', '{{%contact}}', 'status');
        $this->createIndex('idx-contact-created_at', '{{%contact}}', 'created_at');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%contact}}');
    }
}
