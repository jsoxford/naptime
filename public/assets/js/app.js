var pageBindings = {
    package: PackageViewModel,
    root: RootViewModel
};

$(document).ready(function(){
    var ctx = $('body').data('ctx');
    ko.applyBindings(new pageBindings[ctx]());
});
