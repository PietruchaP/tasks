Ext.define('Tasks.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Tasks.view.main.MainController'
    ],

    controller: 'main',

    title: 'Tasks'

});
