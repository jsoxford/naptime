function RootViewModel() {
    var self = this;

    self.package = ko.observable(new Package());

    $('.package-graph').each(function() {
        var deps = $(this).data('deps');
        $.each(deps, function(name, version) {
            var package = new Package();
            package.name(name);
            package.version(version);
            self.package().dependencies.push(package);

            $.get('/history', {name: name}).done(function(data) {
                $.each(data, function(version, released) {
                    var packageVersion = new PackageVersion();
                    packageVersion.loadFromData({version: version, released: released});
                    package.versions.push(packageVersion);
                });
            });
        });
    });
}
