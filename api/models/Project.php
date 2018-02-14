<?php

namespace app\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

/**
 * This is the model class for table "project".
 *
 * @property integer $id
 * @property string $title
 * @property string $short_title
 * @property string $description
 */
class Project extends \yii\db\ActiveRecord
{
//    const SETTING_PUBLIC = 1;
//    const SETTING_PRIVATE = 0;
//
//    const STATUS_ACTIVE = 1;
//    const STATUS_DISABLED = 0;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'project';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [

            [['title, short_title'], 'string', 'max' => 255],
            [['description'], 'text'],
            [['title'], 'required'],
        ];
    }

    /** @inheritdoc */
    public function behaviors()
    {
        // TimestampBehavior also provides a method named touch() that allows you to assign the current timestamp to the specified attribute(s) and save them to the database. For example,
        // $model->touch('confirmed_at');
        // $model->touch('last_login_at');
        // $model->touch('blocked_at');
        return [
//            [
//                'class' =>  TimestampBehavior::className(),
//                'createdAtAttribute' => 'created_at',
//                'updatedAtAttribute' => 'updated_at',
//                'value' => date('Y-m-d H:i:s')
//            ]
        ];
    }

    // explicitly list every field, best used when you want to make sure the changes
    // in your DB table or model attributes do not cause your field changes (to keep API backward compatibility).
    public function fields()
    {
        return [
            'id',
            'title',
            'short_title',
            'description'
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'title' => Yii::t('app', 'Project title'),
            'short_title' => Yii::t('app', 'Project short title'),
            'description' => Yii::t('app', 'Project description')
        ];
    }
}
