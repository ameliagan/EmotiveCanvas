# EmotiveCanvas
Emotive Canvas is a collaborative drawing tool that allows multiple users to draw on the same canvas in real-time. It utilizes the face-api.js library to detect facial expressions and use them to control the color and stroke weight of the lines being drawn.

This drawing app provides a creative and non-verbal method of communication, allowing users to share their mood and enthusiasm through the use of indirect cues. It can be used as a tool for collaborative work, as well as a virtual whiteboard for brainstorming sessions.

<img src="https://user-images.githubusercontent.com/121802839/210312278-326b30d7-4eab-4e20-bd0a-fed4e4cdd1e6.png" width="300">

undefined
Project by Amelia Gan and Quoc Dang, advised by Jose Luis Garcia del Castillo

Try the canvas here: https://emotive-canvas.glitch.me/

## Running the App
To run the app on your locally, follow these steps:

Make sure you have Node.js and npm installed on your computer.
Clone the repository to your local machine.
In the terminal, navigate to the root directory of the project and run npm install to install the necessary dependencies.
Run node sketch.js to start the server.
Open a web browser and go to http://localhost:5500 to access the app.

If running the app on glitch, change the server url to the site that glitch is hosting on. 
i.e. const SOCKET_SERVER_URL = 'https://emotive-canvas.glitch.me';
Additionally in server.js, uncomment the following: 
const SERVER_PORT = process.env.PORT;
const SERVER_CONFIG = {
  cors: { origin: ["https://glitch.me", "https://cdpn.io", "https://glitch.me", "https://cdpn.io"] }
};

## Using the App
To draw on the canvas, simply move your head around to control the cursor and make facial expressions to change the color and stroke weight of the lines being drawn. The app will automatically detect your facial expressions and adjust the drawing accordingly.

## Technologies Used
The app is built with the following technologies:

Node.js: A JavaScript runtime for building server-side applications.

socket.io: A library for real-time, bidirectional communication between servers and clients.

face-api.js: A library for detecting and tracking facial features in the browser.

p5.js: A JavaScript library for creating graphics and interactive experiences.

## Modifying the App
To make changes to the app, you can edit the code in the sketch.js file. Here are a few things you might want to change:

The URL of the socket server: By default, the app connects to a socket server hosted at https://emotive-canvas.glitch.me. If you want to run your own socket server, you can modify the SOCKET_SERVER_URL variable to point to your own server.

The color array: The app uses the colorarr array to randomly select colors for the lines being drawn. You can modify this array to add or remove colors from the list of available options.

The background colour: The app uses two colours, c1 and c2 to form a background gradient colour. 

The stroke weight: The app uses the strokeW variable to control the stroke weight of the lines being drawn. You can modify this variable to change the default stroke weight.

The GUI controls: The app includes a GUI (graphical user interface) that allows users to control certain aspects of the app. You can modify the code in the setup() function to add or remove GUI elements. (Currently these features have been commented out)

## Server.js
The server.js file is used to set up the server for the collaborative drawing app. It uses the express and http libraries to create a server and handle HTTP requests and responses.

The server listens for incoming connections on the specified port (SERVER_PORT) and uses the cors configuration to allow cross-origin requests from certain domains.

The server.js file also sets up a socket.io connection to enable real-time communication between the server and clients. It listens for events such as 'mouse' and 'detections' and broadcasts them to all connected clients.

Finally, the server.js file keeps track of connected clients using the userID array and removes them from the array when they disconnect.
