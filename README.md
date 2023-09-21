# EBODEGA - tienda online de bebidas
### proyecto final del curso de ReactJS
Ebodega es una tienda online de vinos y bebidas, desarrollada para el curso de ReactJS de [CoderHouse](https://www.coderhouse.com/). Tiene tres categorías principales de productos: vinos, espumantes y bebidas, cada una con cuatro productos.

El proyecto está hecho como single page, con Router Dom para elegir cual de las diferentes secciones se deben cargar.
Tambien se utilizó Bootstrap como librería para trabajar la maquetacion y estilado del sitio.
## como levantar el proyecto
para levantar el proyecto se debe correr el siguiente código:
```
npm install;
npm start;
```
y se deben configurar las siguientes variables de entorno en el .env para acceder a los datos que se almacenan en firebase (también está disponible en .env.example dentro del la carpeta src):
```
apiKey

authDomain

projectId

storageBucket

messagingSenderId

appId
```
## Demo
https://youtu.be/OEKiOn99jtk
## Componentes
### NavBar
permite el accesos a las diferentes categorías de producto disponibles, o a todos los productos haciendo click en el logo del sitio. También se encuentra el acceso al Cart y el CartWidget, que permite ver la cantidad de items en el carrito.
### CartWidget
cartWidget es el botón del Cart en el NavBar, con un badge de Bootstrap en la esquina superior derecha que se comienza a mostrar cuando el cart (un array) tiene cargado al menos un elemento. En el mismo se muestra la cantidad total de productos cargados.
### Item List Container
Es el display de todos los productos disponibles, sin ningún tipo de filtro. Los items estan cargados en Firebase y, en este caso, se muestran en una card de Bootstrap, en la que se ven el nombre del producto y el precio unitario, ademas de un boton que lleva al detalle del mismo.
### Item Detail
En detail se muestra el detalle de cada producto: una imagen mas grande del mismo, el precio, la categoría, el stock disponible, una breve descripción y un selector de cantidades a agregar, limitado a la cantidad de stock de cada producto y con un mínimo de uno.
### Cart
Funciona como una pantalla de confirmación de pedido. En la misma se muestra una lista de productos, con su nombre, precio unitario, cantidad seleccionada y subtotal (cantidad*precio). También hay botones para eliminar ese producto del array o para limpiar completamente el mismo.
Al hacer click en Finalizar Compra se puede acceder al checkout, donde se piden los datos.
### Checkout
En checkout se puede ver una lista con el nombre, el precio, la cantidad y el subtotal por cada producto junto con un resumen del pedido en el que se muestra la cantidad de productos y el total del pedido.
Ademas hay una form en la que se piden los datos de contacto, que son guardados en Firebase al hacer click en Comprar. Al mismo tiempo cuando se confirma la compra el display cambia a un mensaje en el que se agradece la compra, se dá el ID de la misma y se anuncia que los datos fueron enviados al correo llenado por el usuario.
## Services y Utils
### Services.js
Dentro de Services se encuentran todas las funciones para interactuar con Firebase:
 - **getProducts:** busca todos los productos disponibles.
 - **getProduct:** busca uno en particular, filtrado por la id.
 - **createOrder:** Crea la orden para ser subida a la base de datos.
### Utils.js
Dentro de Utils estan las funciones que se encargan de interactuar con el carrito:
 - **getCartQuantity:** Interactua con el cartWidget para conseguir el total
   de los productos de carrito con un reduce.
 - **cartTotal:** otro reduce, pero de los subtotales del carrito.
 - **mapCartToCheckout:** hace un map con los elementos necesarios para la
   orden: id, price, quantity y name.
## Context
hay un solo context dentro del sitio: CartContext tiene todas las funciones para hacer funcionar los botones del carrito (agregar, eliminar y limpiar).
