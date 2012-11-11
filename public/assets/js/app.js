var pageBindings = {
    package: PackageViewModel,
    root: RootViewModel
};

$(document).ready(function(){
    var ctx = $('body').data('ctx');
    pageBinding = new pageBindings[ctx]();
    ko.applyBindings(pageBinding);
});
