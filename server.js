// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var subApp = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response, next) {
  next();


  const dreams = [
    'Find and count some sheep',
    'Climb a really tall mountain',
    'Wash the dishes'
  ];
  const addClass = function(app){
  const dreamsList = app.addClass('dreams');
  const newListItem = app.addClass('list-item');
  newListItem.innerHTML = dream;

  const dreamsForm = app.forms[0];
  const dreamInput = dreamsForm.elements['dream'];

  };
    // iterate through every dream and add it to our page
  dreams.forEach( function(dream) {
  const appendNewDream = function(dream, newListItem) {
           dreamsList.appendChild(newListItem);
            this.appendNewDream(dream);
    }
    })
const dreamsForm = '';
    // listen for the form to be submitted and add a new dream when it is
    dreamsForm.onsubmit = function(event) {
      // stop our form submission from refreshing the page
      event.preventDefault();

      // get dream value and add it to the list
      dreams.push(dreamInput.value);
      appendNewDream(dreamInput.value);

      // reset form
      dreamInput.value = '';
      dreamInput.focus();
    };

  response.send(dreams).add( 'body').sendFile(__dirname + '/index.html');
  })
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
// client-side js
// run by the browser each time your view template is loaded


  // define variables that reference elements on our page
