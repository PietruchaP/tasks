Ext.define('Tasks.service.Utils', {
    singleton: true,

    bind: function(context, func) {
        return function () {
            return func.apply(context, arguments);
        }
    }

});
