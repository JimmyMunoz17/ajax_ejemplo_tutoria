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

function post_data(){
    let dataDb = {
        id: $("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    let dataJson = JSON.stringify(dataDb);
    $.ajax({
        url:"https://g54e18a710da042-kymjdtjzxutnpf0b.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo",
        type:"POST",
        data:dataDb,
        dataType:"JSON",
    }).done(function(){
        alert("Se ha guardado");
    }).always(function(){
        $("#get_resultados").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        get_data();
    });
}

function put_data(){
    let dataDb = {
        id: $("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    let dataJson = JSON.stringify(dataDb);
    $.ajax({
        url:"https://g54e18a710da042-kymjdtjzxutnpf0b.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo",
        type:"PUT",
        data:dataJson,
        contentType: "application/json",
        dataType:"JSON"
    }).always(function(){
        $("#get_resultados").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        get_data();
    });
}

