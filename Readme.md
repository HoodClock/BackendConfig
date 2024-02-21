Conneting mongo_db with the help of ATLAS Steps => {
    - Go to the atlas to make a new Project.
    - {
        MongoDB Credentials: 
            User_Name => "moizali1633"
            password => "emhnUMBv4CNgQuKJ"

            -- To connect to MongoDB we need two things (Ip-Adress{from Network Access}, [userName, password {from DataBase Access}])
    }
}

Note:
    store the DB_NAME in contants file.

﻿Packages I would need to install =>
 -- npm install express
 -- npm install mongoose
 -- npm install dotenv
 -- npm install body-parser 
 -- npm install cors
 -- npm install bcryptjs
 -- npm install jsonwebtoken
 -- npm install multer
 // Any other package need so they are added as well

 <!-- for the second method to connect the database with my project we can make the file in DB folder and make a db.js file there we can connect the data base and import on the index.js file -->

 -- IN APP.JS we use 5 middelwares configuration
    - cors
    - cookie_parser
    - urlencoded
    - static
    - json

=> how Routes have url is made in backend:
    // if i make the route for the login my route should be look like this 
    // http://localhost:8000/api/v1/users/login