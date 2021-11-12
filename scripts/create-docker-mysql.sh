#/bin/bash

docker run -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=test --name sql_db mysql:latest --default-authentication-plugin=mysql_native_password