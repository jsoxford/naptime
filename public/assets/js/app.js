

$(document).ready(function(){
    var ctx = $('body').data('ctx');

    if(ctx='package'){
        ko.applyBindings(new PackageViewModel());
    }else if(ctx='root'){
        ko.applyBindings(new RootViewModel());
    }

  var dropzone = document.getElementById('dropzone');
  dropzone.addEventListener('dragover', handleDragOver, false);
  dropzone.addEventListener('drop', handleFileSelect, false);

});

function handleFileSelect(e) {
    e.stopPropagation();
    e.preventDefault();

    var files = e.dataTransfer.files; // FileList object.

    if(files.length > 1){
        console.log('more than one file');
        return ;
    }

    var reader = new FileReader();

    reader.onload = function(theFile) {

        var packagetextarea = document.getElementById('packagetextarea');
        //console.log(theFile.target.result)
        $('#packagetextarea').val(theFile.target.result);

        $('form').submit();

    };

    reader.readAsText(files[0]);


  }

function handleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}
