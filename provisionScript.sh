#!/usr/bin/env bash 
npm install -g supervisor
cd /vagrant/backend
npm install
nohup supervisor index.js 0<&- &>/dev/null &