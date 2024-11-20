Proyecto Fake API - Alura Challenge

Este proyecto es una Fake API que simula una tienda en línea con 20 productos.
Inicialmente se muestran 6 productos y al hacer clic en el boton de "Ver más" 
se agregan 4 productos hasta un total de 20 donde el boton desaparece.
Es un desafío realizado como parte del Alura Challenge para poner en práctica 
habilidades de desarrollo web utilizando JSON Server como solución para crear
una API REST falsa de manera rápida.

Características:

Fake API: Utiliza JSON Server para simular una API REST con datos de productos.
20 productos: Se incluyen 20 productos con propiedades como nombre, precio e imagen.
Interacción con la API: Permite agregar, ver y eliminar productos de la lista.
Interfaz web: La interfaz se construye con HTML, CSS y JavaScript, permitiendo
una experiencia dinámica en la que los productos se cargan de manera interactiva.

Tecnologías utilizadas:
JSON Server: Para crear una API REST fake de manera sencilla.
HTML, CSS, JavaScript: Para la creación de la interfaz de usuario.
Fetch API: Para interactuar con la fake API y manipular los datos de productos.
Node.js: Para ejecutar JSON Server en el entorno local.

Funcionalidades:
Agregar productos: Permite agregar productos a la API mediante un formulario.
Eliminar productos: Cada producto tiene un botón de eliminación que elimina el 
producto correspondiente de la API.
Carga dinámica: Los productos se cargan dinámicamente desde la fake API,
mostrando los detalles como nombre, precio e imagen.

INSTALACIÓN Y EJECUCIÓN:

1-Clona este repositorio en tu m áquina local:

git clone https://github.com/Laura-dev487/Tienda-online.git

2-Accede al directorio del proyecto:

cd Tienda-online

3-Instala las dependencia necesarias:

npm install

4-Inicia el servidor de JSON SERVER:

json-server --watch db.json --port 3001

5-Abre el archivo index.html en tu navegador para ver la aplicación funcionando.
