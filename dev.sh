#!/bin/sh
docker-compose --file ./docker-compose.development.yml build
docker-compose --file ./docker-compose.development.yml up -d