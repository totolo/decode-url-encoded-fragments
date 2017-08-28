
# Web Server

On the terminal, navigate to the /server folder and enter

````bash
node app.js
````

the app will be served at 
`localhost:3000`

your server endpoints will be at `localhost:3000/server`

This endpoint accepts `POST` requests, the request body must contain the key `"fragments"` with corresponding value of an array of `Strings` and
 with Content-Type `'Content-Type': 'application/json'`

An example POST body is:

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

# Terminal
There are two ways to enter data using the command line.

1. enter filepath as command line argument. For example:
```bash
node commandLineInterface.js example
```

2. do not enter any arguments.
```bash
node commandLineInterface.js
```
In this case, the command line interface will allow users to enter "fragments" line by line. Signal to the program the end of input by entering `"EOF"`.

The decoded response will be output on the command line. 



