Running the Application Locally
To run the Application locally, follow these steps:
Clone the Repository:
git clone <repository-url>

Install Dependencies:
cd <repository-folder>
npm install

Start the Application:
npm start

Access the Application:
Open your web browser and go to http://localhost:<port> where <port> is the port configured for the application.
Building Docker Image and Running Container
To build a Docker image and run a container using the image, follow these steps:

Build Docker Image:
docker build -t <image-name> .

Run Docker Container:
docker run -d -p <host-port>:<container-port> <image-name>

Replace <host-port> with the port on your host machine you want to use to access the application, and <container-port> with the port the application is listening on inside the container. <image-name> is the name you assigned to the Docker image.
Access the Application:
Open your web browser and go to http://localhost:<host-port> where <host-port> is the port you specified while running the Docker container.

