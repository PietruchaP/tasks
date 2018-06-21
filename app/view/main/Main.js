Ext.define('Tasks.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Check',
        'Ext.util.Format',
        'Tasks.store.TasksStore',
        'Tasks.view.main.MainController'
    ],

    controller: 'main',

    title: 'Tasks',

    items: [
        {
            xtype: 'grid',
            store: {
                type: 'tasks'
            },
            columns: [
                {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 1
                },
                {
                    text: 'Description',
                    dataIndex: 'description',
                    flex: 2
                },
                {
                    text: 'Due date',
                    dataIndex: 'dueDate',
                    flex: 1,
                    render: Ext.util.Format.dateRenderer('d/M/Y')
                },
                {
                    xtype: 'checkcolumn',
                    text: 'Is completed',
                    dataIndex: 'isCompleted',
                    flex: 1
                }
            ]
        }
    ]

});
