function PackageVersion() {
    var self = this;

    self.version = ko.observable("");
    self.released = ko.observable("");
    self.replaced = ko.observable(new Date());
    self.length = ko.observable(0);

    self.loadFromData = function(data) {
        self.version(data.version);
        self.released(data.released);
        self.length(data.length);
    };

    self.position = function() {
        return parseInt((new Date() - self.replaced().getTime()) / 1000 / 60 / 60 / 24);
    };
}
