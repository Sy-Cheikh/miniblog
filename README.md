 ## Description :

A simple application in version 6 of react. We didn't pay too much attention to the design aspect on this project. We just set up a simple functional blogging site where you can create a new blog, delete this blog. 
We used **json-server** to manage the blog data so when the user adds a new one the data are directly sent to the server. 


## Run project :
 To run this project you need to have [**NodeJS**](https://nodejs.org/en/) installed. Then you can run this following commands:

     
    # npm run start




    # turn on the json-server : 
     npx json-server --watch data/db.json --port 8000   (you can use the port you want but not the same as in npm-run-start)
