# Inicio
- >npm init -y
- Para crear Servidor (webserver) en node -> http.createServer o con Express
  ir app-old.js

# Express
- >npm install express
  ir app.js
## Servir contenido estatico
- ir public/index.html
## Servir un sitio web completo
- crear public/roadtrip
- localhost:8080/index

# Handlebars Xa -> sitios web semi-dinamicos 
- xa contenidos sencillos
- xa express renderice mis vistas, handlebars busca las vistas en views
- >npm install hbs
### Mandar argumentos del controlador a la vista 
- ir app.js
### Uso de parciales en Handlebars (xa headers, footers...)
- creo carpeta partials
- ir app.js
- crear header.hbs
- crear navbar.hbs
- crear footer.hbs
- ir home.hbs
- crear elements.hbs
- crear generic.hbs

# Preparar webserver xa subirlo a un hosting (PORT y start)
- instalar dotenv
  >npm i dotenv
- creo archivo .env -> defino puerto
- en package.json definir script : "start": "node app.js"
  >npm start