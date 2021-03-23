var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

function obtenerProducto() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/api/productos", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(JSON.parse(this.responseText));
          var respuesta = JSON.parse(this.responseText);
          
          for(var i = 0; i<=respuesta.length -1; i++){
            var product = respuesta[i];
            var div = document.createElement('div');
            div.className = 'col-md-2 col-md-4 col-xs-9';            
            var imagenProducto = document.createElement('img');
            imagenProducto.src = `${product.url_image}`;
            var botonAgregar = document.createElement('button');
            botonAgregar.className = 'btn btn btn-lg btn-primary btnAgregar';
            botonAgregar.appendChild(document.createTextNode('Agregar'));
            var precioProducto = `$ ${product.price}`;
            div.appendChild(document.createTextNode(product.name));
            div.appendChild(document.createElement('br'));
            div.appendChild(document.createTextNode(precioProducto));
            div.appendChild(document.createElement('br'));
            div.appendChild(imagenProducto);
            div.appendChild(document.createElement('br'));
            div.appendChild(botonAgregar);
            lista.appendChild(div);
          }
        }
      };
    xhttp.send();
};

obtenerProducto();

filtro.addEventListener('keyup', buscarProducto);

function buscarProducto(e){
  var texto = e.target.value.toLowerCase();
  var items = lista.getElementsByTagName('div');
  Array.from(items).forEach(function(item){
      var itemNombre = item.firstChild.textContent;
      if(itemNombre.toLowerCase().indexOf(texto) != -1){
          item.style.display = 'block';
      } else{
          item.style.display = 'none';
      }
  });
}