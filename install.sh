#!/bin/bash

# Install mongo from Docker Hub
sudo sh mongoDBInstallation.sh
# Fill MongoDB with data from https://ourworldindata.org/
sudo sh fill_mongo_collection.sh
# 
