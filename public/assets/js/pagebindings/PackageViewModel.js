function PackageViewModel() {
    var self = this;

    self.package = ko.observable(new Package());

    self.dependencies = ko.observableArray();



}
