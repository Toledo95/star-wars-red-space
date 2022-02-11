# Star Wars The Info Guide server side.

## RED space guide (Backend API)

We'd like you to create a Node/Express app that exposes an endpoint that performs some
data transformations from the Star Wars API ( [https://swapi.dev/](https://swapi.dev/) ).
The goal is to allow a frontend app to make a single API request and display information on
people from the Star Wars universe.
The endpoint needs to consolidate the following data on a person into the response and
accept a person id to make the requests.
Person
- Name
- Height
- Mass
- Hair Color
- Skin Color
- Gender
- Birth Year
- Home planet
    - Title
    - Terrain
    - Population
- Species
    - Name
    - Average Lifespan
    - Classification
    - Language
- Films
    - Title
    - Director
    - Producers
    - Release Date


## Routes availables
   [Get character](http://localhost:3000/api/star-wars/1) (Luke Skywalker)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser (after building the client).

### `npm run watch`
To watch for changes and refresh it for testing


