Ext.define('Tasks.model.Task', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest',
        'Tasks.Api'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'isCompleted',
            type: 'boolean'
        },
        {
            name: 'dueDate',
            type: 'date',
            dateFormat: 'timestamp'
        },
        {
            name: 'userId',
            type: 'int'
        }
    ],

    proxy: {
        type: 'rest',
        url: Tasks.Api.tasks,
        writer: {
            writeAllFields: true
        }
    }

});
