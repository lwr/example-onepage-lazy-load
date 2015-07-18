(function() {
    var options = {
        appDir         : '../www',
        baseUrl        : 'js',
        mainConfigFile : '../www/js/index.js',
        dir            : '../www-built',
        optimize       : 'none',
        removeCombined : true,
        modules        : [
            {
                name    : 'index',
                include : []
            }, {
                name    : 'm12',
                include : ['modules/1', 'modules/2'],
                exclude : ['index']
            }, {
                name    : 'm34',
                include : ['modules/3', 'modules/4'],
                exclude : ['index']
            }
        ],
        // Write a bundles config to index.js
        // It's required so that all combined modules can be load correctly.
        onBuildWrite   : function (moduleName, path, contents) {
            if (moduleName == "index") {
                return contents + "\n"
                    + "require.config({\n"
                    + "  bundles : " + JSON.stringify(bundles) + "\n"
                    + "})\n"
                    + "";
            }
            return contents;
        },
    }

    // Generate the bundles config automatically
    var bundles = {};
    options.modules.forEach(function(m) {
        if (m.name == "index") {
            return;
        }

        bundles[m.name] = m.include;

        // Make an empty file so that r.js would not complain 'NOT FOUND'
        var fs = (require.nodeRequire || require)("fs"),
          path = (require.nodeRequire || require)("path");
        var buildDir = (typeof buildFile === "string") ? path.dirname(buildFile) : __dirname;
        fs.writeFileSync(path.resolve(buildDir,
            options.appDir + '/' + options.baseUrl + '/' + m.name + ".js"));
    });

    return options;
})();
