function loadDptos(){
    var slDpto = document.getElementById("dpto");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","controll.php?opt=1",true);

    xhr.onreadystatechange = function(){
        if (xhr.readyState==4 && xhr.status==200) {
            var resp = xhr.responseText;
            var dptos = JSON.parse(resp);
            for(dpto of dptos){
                var option = document.createElement("option");
                option.setAttribute("value",dpto.code);
                option.appendChild(document.createTextNode(dpto.name));
                slDpto.appendChild(option);
            }
        }
    };
    xhr.send(null); 
}
function loadTowns(){
    var sltown = document.getElementById("town");
    var dpto = document.getElementById("dpto").value;
 
    var idDpto = document.getElementById("codDp");
    sltown.length=0;
    var xhr = new XMLHttpRequest();
    xhr.open("GET","controll.php?opt=2 & code="+dpto,true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState==4 && xhr.status==200) {
            var towns = JSON.parse(xhr.responseText);
            for(town of towns){
                if (town.department == dpto) {
                    var option = document.createElement("option");
                    option.setAttribute("value",town.code);
                    option.appendChild(document.createTextNode(town.name));
                    sltown.appendChild(option);
                }
            }
        }
    };
    xhr.send(null); 
    
}
function loadid(){
    var id = document.getElementById("town").value;
    var idcd = document.getElementById("codMn");
    idcd.innerHTML = id;
}


function guardar(){
   
  
    var nom = document.getElementById("nombre").value;
    var apell = document.getElementById("apellido").value;
    var cuent = document.getElementById("cuenta").value;
    var direc = document.getElementById("direccion").value;
    var cedu = document.getElementById("cedula").value;
    var arti = document.getElementById("articulo").value;
    
var combo = document.getElementById("dpto");
var selected = combo.options[combo.selectedIndex].text;
var combo = document.getElementById("town");
var selectedone = combo.options[combo.selectedIndex].text;

    
    var fila="<tr><td>"+selected+"</td><td>"+selectedone+"</td><td>"+nom+"</td><td>"+apell+"</td></tr>"+cuent+"</td><td>"+direc+"</td><td>"+cedu+"</td></tr>"+arti+"</td><td>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
        alert("Compra Realizada");
}