define(function(require) {
    var util = require("./util");
    var u1 = {
        say : function(msg) {
            util.out("[1] " + msg);
        }
    };
    u1.say("init");
    return u1;
});
