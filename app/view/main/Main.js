Ext.define('Tasks.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Tasks.view.main.MainController'
    ],

    controller: 'main',

    title: 'Tasks'

});
