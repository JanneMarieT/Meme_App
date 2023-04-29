# Meme_App

![Meme_App](/public/images/logo.png)


##### Description
_An detailed description on what the Meme web application does - (both outside and innside)_

* Home page
    * Shows a picture, and a headline of the page name - Meme App
    * Underneath the picture is a small gridd of pictures of the memes - also clickable and will take you to the meme details page. And show more details about the meme you clicked.
    * Navbar on topp of screen.

* Meme Overview page
    * This page has a table populated with 100 memes - containing image, name and a details button (only accesable if you are logged in)
    * The url is located in the env.json file (https://api.imgflip.com/get_memes) which the meme.js is making the api call and storing the memes in memes.json file (this file should be terminated when server is shut down - but it is currenly awailable 24/7).
    * Pressing the details button directs you to another page  
        - Meme Overview details page. 
          After you have clicked on a details button this makes the row highlighted indicating what meme you have visited.
          (but for now is not everlasting - disappears if you refresh page)
    * Search bar located on top of the table and is working as a normal search bar - also if you are not loged in and type an url code,
        it will automaticaly take you to the login page.
    * Navbar on topp of screen.

* Meme Overview page
    * This is where you land if you press the detail button (only visible to logged in members) 
    * Here you will dive further into the meme it will show you the clicked on memes - id, name, url, image and dimensions.
    * Navbar on topp of screen.  

* Login page
    * This is where you login ( 3 different username and password is in the user.json file) 
    * Using PassportJS - this is installed with npm
    * After you have loged in you will be dirrected to the meme overview page.
        (and the login page has a simple greeting and a logout button)
    * And as always => navbar on topp of screen.

* Navbar
    * Logo in the left corner - also clickable - the link will take you to the meme overview page. 
    * then we have home - which will take you home
    * Meme overview page will take you there.
    * Login button on the right corner will take you to the login page and if you are already loged in it will say logout and take you there.
    * Right next to the login/logout button is a greeting (Welcome) and then your username if you are logged in or just Guest if you have not signed in yet.
       
### Dependencies

- axios: "^1.2.3",
- bootstrap: "^5.2.3",
- bootstrap-icons: "^1.10.3",
- cookie-parser: "~1.4.4",
- debug: "~2.6.9",
- ejs: "^3.1.8",
- express: "^4.18.2",
- express-session: "^1.17.3",
- express-session-json: "^0.0.8",
- http-errors: "~1.6.3",
- jquery: "^3.6.3",
- morgan: "~1.9.1",
- passport: "^0.6.0",
- passport-local: "^1.0.0",
- request: "^2.88.2"

## Also using - NodeJS with Express and EJS template engine. + passportJS


## 100 Memes page:

Where i make the api call to:
https://api.imgflip.com/get_memes

## Meme Web App

deployed on render:
https://memeapp.onrender.com/meme

## Contributing
ME :) Yes me :)
**Signed: Janne Marie Tvetene**

