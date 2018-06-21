Ext.define('Tasks.service.Utils', {
    singleton: true,

    bind: function bind(context, func) {
        return function () {
            return func.apply(context, arguments);
        }
    }

});