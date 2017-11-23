# burger

NU Coding BootCamp Homework 13

A simple app using [Node.js](https://nodejs.org/en/),
[Express](http://expressjs.com/), [Handlebars](http://handlebarsjs.com/), and
[MySQL](https://github.com/mysqljs/mysql).

## Routes

### Root

This is the main route that a user will interact with. When hit it renders
the `index` template (within the `main` layout). This template shows a list of
uneaten (with a button to `devour`) burgers and eaten (already `devoured`)
burgers. This utilizes a `GET` request to grab all of the burgers from the
database, separated into `eaten` and `uneaten`.

The user also has the ability to create a new burger. This utilizes a `POST`
request that creates the new burger in the database.

When the `devour` button is selected, the burger is updated in the database
using a `PUT` request.

### API

A user can select the `API Burgers List` in the footer to view all of the burger
data in the database. This is done through a `GET` request. This route is
`api/burgers`.

A user can also type in the route `api/burgers/:id` where `:id` is the id of the
burger they would like to view data on. This will display the data for that
specific burger. This is also done through a `GET` request.

## Data

Each burger has an `id`, `burger_name`, `devoured`, and `created_at`. The `id`
is the primary key and is auto-incremented. You will notice that when a user
creates a new burger they are only submitting the name of the burger. This is
because the `devoured` and `created_at` attributes have default values. The
`devoured` attribute is defaulted to `false` and the `created_at` attribute is
defaulted to the `timestamp` of the creation of the burger.
