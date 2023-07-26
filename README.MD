# PRIMEROS PASOS

Esta aplicacion consiste en dos partes, Front y Back.
- El front se encuentra desarrollado con ReactJs y los parametros Webs
- El Back se encuentra desarrollado por medio de Express para mejor control de la información.

## Instalacion:
- Descargue la carpeta completa del repositorio.
- dentro de los respectivos directorios *API Back Express* y *WebApp Fron React* ejecute:
```npm i```.
- Eso generalmente creara la carpeta de NodeModules.

#### API Back:
Hay un caso especial en el Back como se implemento por medio de variables de entorno es necesario crear un archiv *.env* en donde se almacenaran las variables de entorno de la siguiente manera:
```
PORTAPI=3200
USERSERVER=Developer
PASSWORDSERVER=ishida7410
SERVER=ERI
DATABASE=Pruebas
```
eso en mi caso, asegurarse que los parametros esten correctos de acuerdo a la configuracion de su SQLServer

#### Front React
En el front se procedio a llamar los diferentes EndPoint ubicados en:
- formRegister.jsx
- TableRooms.jsx

debe cambiar la direccion de los EndPoint de acuerdo a la direccion de su maquina local donde corre el API Back.
### Base de datos
La base de datos que use para este ejemplo se encuentra en dentro de *API Back Express* en la carpeta bd.

## EJECUCION
Ejecute primeramente el API Back y luego el front y comience a usar el aplicatico
- El back se ejecuta usando: ```npm run dev```
- el front se ejecuta mediante: ```npm start```

***Nota: De la misma manera hay Documentacion general para cada una de las partes.***