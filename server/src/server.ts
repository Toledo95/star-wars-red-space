import express from "express";
import logger from "morgan";
import cors from "cors";
import * as path from "path";
import response from "./middlewares/response";
import router from "./routes";


// Create Express server
const app = express();
const port = process.env.PORT || 3000;

// Middlewares 
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(response);

//To serve react
app.use(express.static(path.join(__dirname, '../../client/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

// Routes
app.use("/api", router);

// Events
app.listen(port, onListening);
app.on("error", onError);

function onError (error: any) {
    throw error;
}

function onListening() {
    console.log(`Listening on ${port}`);
}
