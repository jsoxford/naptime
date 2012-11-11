function Package() {
    var self = this;

/*
{
  "name": "nko3-woah",
  "version": "0.0.0",
  "description": "woah",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:nko3/woah.git"
  },
  "dependencies": {
    "express": "3.0.2",
    "jade": ">= 0.0.1"
  },
  "engines": {
    "node": "0.8.x"
  },
  "subdomain": "woah.nko3"
}
*/

    self.name = ko.observable("");
    self.version = ko.observable("");
    self.description = ko.observable("");
    self.main = ko.observable("");
    self.scripts = ko.observableArray([]);
    self.repository = ko.observableArray([]);
    self.dependencies = ko.observableArray([]);
    self.engines = ko.observableArray([]);
    self.subdomain = ko.observable("");

    self.loadFromData = function(data){

        self.name(data.name)
        self.version(data.version)
        self.description(data.description)
        self.main(data.main)

        $.each(data.scripts, function(i,v){
            self.scripts().push(v);
        });

        $.each(data.repository, function(i,v){
            self.repository().push(v);
        });

        $.each(data.dependencies, function(i,v){
            self.dependencies().push(v);
        });

        $.each(data.engines, function(i,v){
            self.engines().push(v);
        })

        self.subdomain(data.subdomain)

    };
}
