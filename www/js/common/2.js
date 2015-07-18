define(function(require) {
    var util = require("./util");
    var u2 = {
        say : function(msg) {
            util.out("[2] " + msg);
        }
    };
    u2.say("init");
    return u2;
});
