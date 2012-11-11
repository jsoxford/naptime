

$(document).ready(function(){
    var ctx = $('body').data('ctx');

    if(ctx='package'){
        ko.applyBindings(new PackageViewModel());
    }

});

