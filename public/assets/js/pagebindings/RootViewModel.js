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

            var tolerance = 1;
            var day = 1000 * 60 * 60 * 24;
            var previous = null;

            $.get('/history', {name: name}).done(function(data) {
                data = $.map(data, function(released, version) {
                    return {
                        version: version,
                        released: new Date(released)
                    };
                });

                data.sort(function(a, b) {
                    return a.released.getTime() - b.released.getTime();
                });

                $.each(data, function(i, version) {

                    var packageVersion = new PackageVersion();
                    packageVersion.loadFromData(version);

                    if (previous) {
                        previous.length(parseInt((version.released.getTime() - previous.released().getTime()) / day));
                        previous.replaced(version.released);
                    }
                    previous = packageVersion;

                    package.versions.push(packageVersion);
                });

                previous.length(parseInt(((new Date()).getTime() - previous.released().getTime()) / day));
                previous.replaced(new Date());
            });
        });
    });
}
