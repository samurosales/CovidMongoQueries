#!/bin/bash
#downloading data
sudo wget --output-document raw_data.json https://covid.ourworldindata.org/data/owid-covid-data.json  
#sliplitting data - node
sudo mkdir -p collections
sudo chmod 777 collections
sudo chmod 777 raw_data.json
node split_raw_data.js
sudo cp collections $HOME/mongodata/ -r
rm raw_data.json
rm collections -r


docker exec -it mongodb bash -c "mongoimport --db proyecto --collection countries --file /data/db/collections/countries.json --jsonArray"
docker exec -it mongodb bash -c "mongoimport --db proyecto --collection cases	   --file /data/db/collections/cases.json --jsonArray"
docker exec -it mongodb bash -c "mongoimport --db proyecto --collection tests     --file /data/db/collections/tests.json --jsonArray"
docker exec -it mongodb bash -c "mongoimport --db proyecto --collection patients  --file /data/db/collections/patients.json --jsonArray"
docker exec -it mongodb bash -c "mongoimport --db proyecto --collection vaccines  --file /data/db/collections/vaccines.json --jsonArray"
docker exec -it mongodb bash -c "mongoimport --db proyecto --collection deaths    --file /data/db/collections/deaths.json --jsonArray"
docker exec -it mongodb bash -c "mongoimport --db proyecto --collection icu       --file /data/db/collections/icu.json --jsonArray"
