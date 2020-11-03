1-  Create new directory on your server like: "mnemonic".

2-  download and upload below zip file to mnemonic directory and extract it.

3 - Edit App.js file and replace demo.com to your domain
    ex: http://demo.com:8080 to http://example.com:8080

4-  Open project folder via terminal and run below command
    1-  /opt/cpanel/ea-nodejs10/bin/npm install
    2-  export PS1='[\u@\h \W]\$ '
    3-  cd mnemonic <folder path>
    4-  /opt/cpanel/ea-nodejs10/bin/npx nodemon app.js

Now your server is running on - http://demo.com:8080

API URL:
http://takedoodles.com:8081/hdkey
http://takedoodles.com:8081/passwordkey


