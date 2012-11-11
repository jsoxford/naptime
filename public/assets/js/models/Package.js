function Package() {
    var self = this;

    self.name = ko.observable("");
    self.version = ko.observable("");
    self.description = ko.observable("");
    self.main = ko.observable("");
    self.scripts = ko.observableArray([]);
    self.repository = ko.observableArray([]);
    self.dependencies = ko.observableArray([]);
    self.engines = ko.observableArray([]);
    self.subdomain = ko.observable("");
    self.versions = ko.observableArray([]);



    self.versionText = ko.computed(function(){
      var text = " yours: " + self.version();

      var versions = self.versions();
      var latest = versions[versions.length -1];

      if(latest){
        text += ", latest: " + latest.version();
      }

      return text;

    }).extend({ throttle: 10 });
}
