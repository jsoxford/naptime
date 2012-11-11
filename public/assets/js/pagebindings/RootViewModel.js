function RootViewModel() {
    var self = this;

    self.package = ko.observable(new Package());

    $('.deps').each(function() {
        var deps = $(this).data('deps');
        $.each(deps, function(name) {
            $.get('/history', {name:name}).done(function(data) {
                $.each(data, function(version, released) {
                    var packageVersion = new PackageVersion();
                    packageVersion.loadFromData({version: version, released: released});
                    self.package().dependencies().push(packageVersion);
                    console.log(packageVersion.version());
                });
            });
        });
    });
}
