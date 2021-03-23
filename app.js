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

filtro.addEventListener('submit', buscarItem);

function buscarProducto(e){
  var texto = e.target.value.toLowerCase();
  var items = lista.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
      var itemNombre = item.firstChild.textContent;
      if(itemNombre.toLowerCase().indexOf(texto) != -1){
          item.style.display = 'block';
      } else{
          item.style.display = 'none';
      }
  });
}