#!/usr/bin/env bash 

# Establish password in pgpass so i can execute psql queries without a password (for scripting)
echo "*:*:*:postgres:password" > ~/.pgpass
chmod 600 ~/.pgpass

# Run postgres database creation scripts
psql -h localhost -U postgres -w -a -f /vagrant/backend/DDL/000-create-database.sql
psql -h localhost -U postgres -w -d kaicow -a -f /vagrant/backend/DDL/001-LAM-DDL.sql

# Install supervisor globally
npm install -g supervisor

# Install node modules
cd /vagrant/backend
npm install

#nohup supervisor index.js 0<&- &>/dev/null &