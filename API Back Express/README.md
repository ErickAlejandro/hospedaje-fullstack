# API Express
Esta es una aplicación creada en el framework Express, el cual permite realizar consultas a la base de datos de diferentes metodos *Post, Get, Put, Delet*, la aplicacion funciona como Middleware
***
### Ejecucion:
La aplicación se encuentra ejecutada por medio del siguiente comando 
```
npm run dev
```
Este comando es personalizado por lo cual se puede mediante el archivo [package.json](package.json), el mismo sirve para instalar las dependencias necesarias que usa el aplicativo.
***
### Conexion
Las conexiones se encuentran establecidas en el directorio *database* en el cual se encuentran dos archivos principales **connection** con extension .js en el cual se realiza la configuración de ambas bases.
Tenemos el archivo *index.js* en el cual se encuentra centralizadas las conexiones con el fin de que la consulta sea dinamica y evite que se caiga al momento de realizar varias consultas.
Por ultimo y mas importante a mi parecer se encuentra *querys.js* este archivo contiene toda la información con respecto a la estructura de las consultas que se van a realizar, aqui es donde se realiza la declaracion de variables en caso de que sea necesario el uso de variables obtenidas desde el front, estas variables se declaran por medio de un `@`. 

*Estas querys dependen mucho de lo que el usuario necesita, se recomienda colocar solo la información*
***
### Controladores
En este directorio tenemos dos archivos que permiten el control del metodo para obtener o enviar la información desde la base de datos, tanto para la base de datos MAIN para el control de acceso desde el Front.
***
### Rutas
Las rutas se encuentran declaradas dentro del directorio `routes` en donde se manda a llamar las funciones que se encuentran dentro de controllers dependiendo a la necesidad.

**Nota:** *Toda la aplicación se encuentra desarrollada por medio de una logica de programacion orientada a objetos y ES6*