Ext.define('Tasks.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {

        'login': 'showLoginView',
        'tasks': 'showTasksView'

    },

    showLoginView: function () {
        this.showViewWithAlias('login-form');
    },

    showTasksView: function() {
        this.showViewWithAlias('tasks-grid');
    },

    showViewWithAlias: function(alias) {
        const view = Ext.widget(alias);
        this.showView(view);
    },

    showView: function (view) {
        const container = this.getView();
        container.removeAll();
        container.add(view);
    }

});
