to initialized node app
npm init -y

to add express
npm i express

to run app make main file
index.js

add moudle to use es6 in package.json
"main": "index.js",
"type":"module",

to start app 
  "scripts": {
    "start": "node index.js"
  },

  to add watch for any change install nodemon or change script to
"start": "nodemon index.js"


go mongo db make new project and cluster add username or passwordd set ip for all access 0.0.0.0
or on overview > deployemnt connect and copy url and make .env and install npm install dotenv
and save there

for db schema used mongoose  use mongoose.connect method


