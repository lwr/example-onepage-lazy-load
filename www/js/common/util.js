define(function() {
    var util = {
        element : function(id) {
            return document.getElementById(id);
        },
        out     : function(msg) {
            util.element("console")
                .appendChild(document.createTextNode("> " + msg + "\n"));
        },
        say     : function(msg) {
            util.out("[0] " + msg);
        }
    }
    util.say("init");
    return util;
});
