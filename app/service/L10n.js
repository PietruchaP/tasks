Ext.define('Tasks.service.L10n', {
    requires: [
        'Tasks.service.Utils'
    ],

    singleton: true,

    language: 'en',

    translate: function(key) {
        return this[this.language][key] || `??? ${key} ???`;
    },

    en: {
        name: 'Task',
        description: 'Description',
        dueDate: 'Due date',
        isCompleted: 'Is completed',
        loginForm: 'Login form',
        username: 'Username',
        password: 'Password'
    },

    pl: {
        name: 'Zadanie',
        description: 'Opis',
        dueDate: 'Termin',
        isCompleted: 'Zakończone',
        loginForm: 'Formularz logowania',
        username: 'Użytkownik',
        password: 'Hasło'
    }

}, function() {
    //Tasks.L10n = this.translate.bind(this);
    Tasks.L10n = Tasks.service.Utils.bind(this, this.translate);
});
