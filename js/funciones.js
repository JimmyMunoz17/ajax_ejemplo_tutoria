function get_data(){
    $.ajax({
        url:"https://g54e18a710da042-kymjdtjzxutnpf0b.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo",
        type:"GET",
        dataType:"JSON",
        success: function(respuesta){
            console.log(respuesta);
            get_respuesta(respuesta.items);
        }
    }).done(function(){
        alert("exito");
    }).fail(function(request, errorType, errorMessage){
        alert(errorMessage + errorType);
    }).always(function(){
        alert("Gracias por su visita!!");
    })
}

function get_respuesta(items){
    let mytable = "<table>";
    for(i=0; i<items.length; i++){
        mytable += "<tr>";
        mytable += "<td>" + items[i].id + "</td>";
        mytable += "<td>" + items[i].name + "</td>";
        mytable += "<td>" + items[i].email + "</td>";
        mytable += "<td>" + items[i].age + "</td>";
        mytable += "</tr>";
    }
    mytable+= "</table>";
    $("#get_resultados").append(mytable);
}



