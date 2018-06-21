Ext.define('Tasks.view.tasksgrid.TasksGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Check',
        'Ext.util.Format',
        'Tasks.store.TasksStore',
        'Tasks.view.tasksgrid.TasksGridController'
    ],

    xtype: 'tasks-grid',

    controller: 'tasks-grid',

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

});