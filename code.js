$(document).ready(function() {

$("#editor").on("keypress",copyData);

});



function copyData(){

    


    document.getElementById("preview").innerHTML= marked($("#editor").val());
  
    //
}