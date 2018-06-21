Ext.define('Tasks.store.TasksStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Tasks.model.Task'
    ],

    alias: 'store.tasks',

    model: 'Tasks.model.Task',

    autoLoad: true
});