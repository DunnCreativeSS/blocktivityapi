#!/bin/bash
while :
do
sudo killall node
sudo nohup node server.js &
sudo nohup node db.js &
sleep 4m
done