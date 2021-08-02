 To launch the app, simply run it in your terminal:

    cd MOZIOTEST 

then activate the environment 
    
    source mozenv/bin/activate

and then exit and run the server

    cd mozio
    python manage.py runserver

## - THE PROJECT -

This project titled MOZIOTEST is a small back-end based test to show the use of GeoJSON format data, creation and manipulation of APIs, Django general use, database manipulation and app deployment in a short amount of time (24h).

**The Complexity**

The project is complex in the following ways:

* Uses Django
* 2 models in the models.py are created in the back end to store data
* Uses Python in the back-end for:
   *   Rendering Templates
   *   Calling request methods
   *   Http Responses
   *   Validation of Inputs
   *   Passing data in slugs
   *   Passing Context to templates
   *   Creating APIs
   *   Manipulation of GeoJSON format data
* It uses Javascript on the frontend for:
   * Responsive Buttons  
   * API techniques, for both sourcing from own API routes and Json Data handling.
   * Leafleft.js implementation
 * It uses unit tests to test various aspects of the App.
 * It uses CSS for styling
 

## - THE BACK END -

The back end that I have organized for this project on top of the already set Django framework base, has been incorporated in the following files. 

* views.py
* models.py
* MOZIOTEST/urls.py
* mozio/urls.py
* forms.py
* tests.py
* admin.py

### *Views.py*

In the views.py file, I have created 9 functions. 

**Index Function**

The *index* function, is a functions to render the html template and passing two variables from the database. 

**Providers and Areas Function**

Are functions to create JSON responses and launch the APIs by sourcing the data from the database and serialising it in JSON format. 


**New Provider Function and New Area **

These two functions work in the same way. They work with two request methods. The first GET method is introduced with an if statement and simply returns in a JSON format a response of the data serialised. The second if statements introduces a POST method, with which the input in the template will be loaded as json data and subsequently registered in the database. 

**Edit Provider and Edit Area Functions**

These two functions modify a specific object in the database using the id of the object. They are introduced only by a PUT request, and they gather information from the frontened through Javascript. 

**Del Provider and Del Area Functions**

These tow functions use the id of a specif object sourced from the databse and with a DELETE request delete it.
 

### *Models.py*

The models.py file contains 2 models:

1. Provider
  
The Provider Model is there to create objects to represent a provider. It will register 5 different character fields and serialize them.

2. Area

The Area model is there to create objects to represent an area. It will register 5 different fields and serialize them including an Integer Field for the price and a JSON field, where the GeoJSON data will be stored.


### *MOZIOTEST/urls.py*
   
   In this file are included two main urls, one that connects to all of the mozio App urls and the other that allows for the Django admin/ interface. 

### *mozio/urls.py*

   In this file all the urls for the mozio app are registered. There is one simple paths, and 8 different API paths used for various functionalities of the app like POST, PUT, GET and DELETE, with their specific endpoints.

### *Forms.py*

   In this file is located the Model Form that allows the update of the Area model. It is a Form of class Meta that uses '__ all __' field to set all of the fields directly into the function in the views.py file. 


### *Tests.py*

   Tests were not required but I have implemented however 3 very tests for the basic URLS of the index page and the two main API routes.
   You can run them like so:
          
     cd mozio
     python3 manage.py test


### *Admin.py*

   Used this file to be able to manipulate Model objects from the standard django superuser interface.


## - THE FRONT END -

The focus on this project was not the front-end but some code running client side were useful to achieve final functionality. It was also optional to use extra libraries and tools to achieve the purpose of this task, and I did use Leaflet.js to integrate an interactive map of the Areas. 

The front-end consists in the following sections: 

* index.html
* layout.html
* index.js
* styles.css

### *index and layout*

   These two main templates simply consist into the main layout of the app, containing the html markup. For coherence with the project I did maintain some Javascript inside the index.html for the relevant interactive map developerd with leaflet.js. 
   
   <span style="text-decoration: underline">The interative map, included in this section, not only gives you the opportunity to view the areas, but it also facilitates the requisite of finding a specific location. Through a search bar implemented with the map it is possible to directly locate the intended location, withouth using cohordinates and at the same time to visualize the Provider that operates in that specific area.</span> 

### *index.js*

   This Javascript file contains all of the functions for fetching, and subsequently implemenet PUT, POST and DELETE functionalities. These Javascript function are particularly useful to implement FAST responding Apps, and also to be able to create and manipulate in real time the DOM. These function have also been useful for practical receiving of data to register in the database, as they helped keeping the format correct (JSON).

### *styles.css*

In this file we can find all the styles for the templates. 



## **NOTE**:

1. I Have only used function based views, since the app is not very large but I would be able to also implement Class based views for larger more complex apps.
2. Given the short amount of time I could not look for images or files but in other projects on my github you can find that I have implemented the storing of the data in AWS buckets. 
3. For the demployment of this app for time reasons I will use Heroku, that is generally my deployment platform of choice, but would have also been able to use AWS Elastic Beanstalk
4. The database is a simple sqlite3 but it would have been easy to implement something more complex like a MySQL databases if needed



