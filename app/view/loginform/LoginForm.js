Ext.define('Tasks.view.loginform.LoginForm', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.field.Text',
        'Tasks.view.loginform.LoginFormController'
    ],

    xtype: 'login-form',

    controller: 'login-form',

    modal: true,
    floating: true,
    autoShow: true,
    bodyPadding: 20,
    closable: false,
    width: 400,

    title: Tasks.L10n('loginForm'),

    defaults: {
        xtype: 'textfield',
        width: '100%',
        labelAlign: 'top'
    },

    items: [
        {
            fieldLabel: Tasks.L10n('username'),
            reference: 'username'
        },
        {
            fieldLabel: Tasks.L10n('password'),
            reference: 'password',
            inputType: 'password'
        }
    ],

    buttons: [
        {
            text: 'Login',
            listeners: {
                'click': 'onLogin'
            }
        }
    ]

});