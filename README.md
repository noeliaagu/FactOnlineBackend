# TP Backend FactOnline

## Init Project

Crear un proyecto Node. Esto crea el archivo package.json
```
ng init
```
Luego instalamos mas dependencias (librerias)
```
npm install --save express pg pg-hstore morgan sequelize @babel/polyfill
npm install -D nodemon @babel/core @babel/cli @babel/preset-env @babel/node
npm install cors
```

Crear archivo .babelrc
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Agregar script en el archivo package.json
```
"scripts": {
    "dev": "nodemon index.js --exec babel-node"
  },
```

Creamos punto de inicio de la aplicación `index.js`


## Como correr la aplicacion

npm run dev

## Inicializar la Base de Datos

force: true

```
database.sync({force:true})
 .then(() => console.log('BASE DE DATOS CONECTADA.'));
```
