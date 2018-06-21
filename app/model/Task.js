Ext.define('Tasks.model.Task', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest'
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
        url: 'http://localhost:3000/tasks',
        writer: {
            writeAllFields: true
        }
    }

});
