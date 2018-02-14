<?php

use yii\db\Migration;

/**
 * Handles the creation of table `projects`.
 */
class m180214_100558_create_projects_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('project', [
            'id' => $this->primaryKey(),
            'title' => $this->string(255),
            'short_title' => $this->string(255),
            'description' => $this->text()
        ]);

        $this->batchInsert('project', ['id', 'title', 'short_title', 'description'], [
            [1, 'CompLife QR', 'CL-QR', 'CRM система'],
            [2, 'uMarket', 'CL-uMarket', 'Android приложение'],
            [3, 'CompLife Agent', 'CL-Agent', 'Android приложение'],
            [4, 'Voger', 'Voger', 'Web-сайт женской одежды'],
            [5, 'Das-Ellite', 'Das', 'Web-сайт женской одежды'],
            [6, 'Osyka', 'Osyka', 'Web-сайт ювелирных изделий']
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('project');
    }
}
