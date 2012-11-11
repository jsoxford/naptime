

$(document).ready(function(){
    var ctx = $('body').data('ctx');

    if(ctx='package'){
        ko.applyBindings(new PackageViewModel());
    }else if(ctx='root'){
        ko.applyBindings(new RootViewModel());
    }

});

