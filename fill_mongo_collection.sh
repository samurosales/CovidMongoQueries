#!/bin/bash
sudo wget --output-document raw_data.json https://covid.ourworldindata.org/data/owid-covid-data.json  &&
#sudo cp raw_data.json $HOME/mongodata/.
sudo cp raw_data.json /home/samuelrosales/mongodata/.
docker exec -it mongodb bash -c "mongoimport --db proyecto  --file /data/db/raw_data.json"

