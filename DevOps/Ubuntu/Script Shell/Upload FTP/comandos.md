### Temos 2 maneiras para utilizar Script para UPLoad FTP
#### 1 - FTP
```js
#!/bin/bash
HOST='192.168.1.8'
USER='inlive'
PASSWD='inlive'
FILE='postgresDump.sql'
REMOTE='Linux/Databases/Postgresql/'

ftp -inv $HOST <<EOT
user $USER $PASSWD
cd $REMOTE
lcd /home/inlive/backups/postgresql/
send $FILE
bye
EOF
```
#### 2 - CURL
```js
#!/bin/bash


# Set the FTP username and password
USERNAME='inlive'
PASSWORD='inlive'

# Set the FTP server and the source and destination directories
FTP_SERVER='192.168.1.8'
SOURCE_DIR="/home/inlive/backups/postgresql"
DEST_DIR='Linux/Databases/Postgresql/'

# Set the filename
FILENAME="postgresDump.sql"

# Upload the file to the FTP server
curl -T $SOURCE_DIR/$FILENAME ftp://$USERNAME:$PASSWORD@$FTP_SERVER/$DEST_DIR
```
#### 3 - CURL MULTI FILE
```js
  GNU nano 4.8                             FTP_Job.sh
#!/bin/bash

# Set the FTP username and password
USERNAME='inlive'
PASSWORD='inlive'

# Set the FTP server and the source and destination directories
FTP_SERVER='192.168.1.8'
SOURCE_DIR="/home/inlive/backups/postgresql"
DEST_DIR='Linux/Databases/Postgresql/'

# Set the filename
FILENAME1="deliverygateway_dev.bak"
FILENAME2="deliverygateway_qa.bak"

# Upload the file to the FTP server
curl -T "{${SOURCE_DIR}/${FILENAME1},${SOURCE_DIR}/${FILENAME2}}" ftp://$USERNAME:$PASSWORD@$FTP_SERVER/$DEST_DIR

```