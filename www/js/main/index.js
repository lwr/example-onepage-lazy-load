
define(function(require) {
    var util = require("common/util");

    var arr = [];
    for (var i = 1; i <= 4; i++) {
        arr.push("<a href='javascript:require(\"m\")(" + i + ");'>Module" + i + "</a>");
    }
    util.element("modules").innerHTML = arr.join(" | ");
    util.say("main: init");

    return function(i) {
        require(["modules/" + i], function(m){ m(); });
    }
});
