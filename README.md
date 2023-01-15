# Netflix Clone

## This application is a clone of Netflix, built with React JS for the frontend and Node.js and Express JS for the backend.

### Features

* View movie and TV show details, including posters and a synopsis
* Download a PDF file for each movie and TV show
* Access documentation for the application's endpoints

### Getting Started

#### You can access the hosted version of the application by visiting the following links:

* [Frontend](https://netflix-fe-five.vercel.app/)
* [Backend](https://netflix-backend-production-0d3e.up.railway.app/medias/)
* [Backend repository](https://github.com/Raulanthropos/netflix-backend)

### Endpoints

* GET, POST /medias/: Retrieve a list of all movies and TV shows, or post a new one
* GET, PUT, DELETE /medias/:mediaId: Retrieve/edit/delete details for a specific movie or TV show
* POST /medias/:mediaId/poster: Post the poster for a specific movie or TV show
* GET /media/:id/pdf: Download a PDF file for a specific movie or TV show
* GET /docs: Access documentation for the application's endpoints

### Built With

* React JS - JavaScript library for building user interfaces
* Node.js - JavaScript runtime
* Express.js - Web framework for Node.js
