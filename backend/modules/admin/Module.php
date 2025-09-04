<?php

namespace app\modules\admin;

use Yii;

/**
 * Admin module definition class
 */
class Module extends \yii\base\Module
{
    /**
     * {@inheritdoc}
     */
    public $controllerNamespace = 'app\modules\admin\controllers';

    /**
     * {@inheritdoc}
     */
    public function init()
    {
        parent::init();

        // Set default layout
        $this->layout = 'main';
        
        // Set default route
        $this->defaultRoute = 'default';
    }
}
