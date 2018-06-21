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
                    text: Tasks.L10n('name'),
                    dataIndex: 'name',
                    flex: 1
                },
                {
                    text: Tasks.L10n('description'),
                    dataIndex: 'description',
                    flex: 2
                },
                {
                    text: Tasks.L10n('dueDate'),
                    dataIndex: 'dueDate',
                    flex: 1,
                    render: Ext.util.Format.dateRenderer('d/M/Y')
                },
                {
                    xtype: 'checkcolumn',
                    text: Tasks.L10n('isCompleted'),
                    dataIndex: 'isCompleted',
                    flex: 1
                }
            ]
        }
    ]

});
