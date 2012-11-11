function PackageVersion() {
    var self = this;

    self.version = ko.observable("");
    self.released = ko.observable("");

    self.loadFromData = function(data) {
        self.version(data.version);
        self.released(data.released);
    };
}

PackageVersion.prototype.satisfies = function(parent){
	return semver.satisfies(this.version(), parent.version());
};
