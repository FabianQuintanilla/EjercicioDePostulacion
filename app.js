function obtenerProducto() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/api/productos", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(JSON.parse(this.responseText));
        }
      };
    xhttp.send();
};

obtenerProducto();
