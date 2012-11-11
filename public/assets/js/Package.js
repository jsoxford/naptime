function Package() {
    var self = this;

    self.name = ko.observable("");
    self.latestVersion = ko.observable("");

    self.loadFromData = function(data){
        // eg
        self.name(data.name);
        self.latestVersion(data.latestVersion);

    };
}
