on the terminal, navigate to the /server folder and enter

``node app.js``

the app will be served at 
``localhost:3000``

your server endpoints will be at

``localhost:3000/server``

which accepts post requests, with body containing key "fragments" with value of an array of "fragments". An example POST body is:

````json
{
  "fragments": [
  "l+window.%0A+++++",
  "gs%29+%7B%0A++++++++%2F",
  "%3B%0A++++%7D%0A%7D%0A",
  "ublic+static+vo",
  "++++++++System."]
  }
````

You can use the Postman app to submit POST requests. 