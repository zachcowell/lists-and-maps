#!/usr/bin/env bash 
npm install -g supervisor
alias cdbackend='. /vagrant/cdbackend'
nohup supervisor index.js &