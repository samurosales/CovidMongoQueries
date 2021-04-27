# Pull Image from Docker Hub
sudo docker pull mongo
# Create folder permanent data
sudo mkdir -p ~/mongodata
# Run Docker Image
sudo docker run -it -v ~/mongodata:/data/db -p 127.0.0.1:27017:27017 --name mongodb -d mongo

