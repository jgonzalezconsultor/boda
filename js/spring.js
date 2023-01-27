$( document ).ready(function() {
    var familia = new Object();
    $.ajax({
        type: "GET",
        url: "http://18.206.229.200:8080/api/v1/familias",
        dataType: "json",
        success:function(data){
            $.each(data, function(i, item){  
                familia = item.familia 
            });
            Object.values(familia).forEach(val => {
                var optionFamilia = "<option value='" + val.id + "'>" + val.nombre + "</option>";
                $("#familias").append(optionFamilia);
            });
        }
    });    
});

function definirInvitados(element){
    var id = $('#familias').find(":selected").val();
    $.ajax({
        type: "GET",
        url: "http://18.206.229.200:8080/api/v1/familias/" + id,
        dataType: "json",
        success:function(data){
            $.each(data, function(i, item){  
                familia = item.familia 
            });
            Object.values(familia).forEach(val => {
                for(i = 0; i< val.numeroDeAdultos; i++){
                    console.log("Adulto " + i);
                }
            });

            
        }
    });
}