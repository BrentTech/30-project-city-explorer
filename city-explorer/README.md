![CF](http://i.imgur.com/7v5ASc8.png) LAB 25
=================================================

## City Explorer App V2

### Project Team:
Brent Woodward - [Github](https://github.com/BrentTech)
Jared Pattison - [Github](https://github.com/jaredpattison)


### Links and Resources
* [repo](https://github.com/BrentTech/30-project-city-explorer)
* [front-end](http://30-lab-city-explorer.s3-website-us-west-2.amazonaws.com/)


### Description:
Refactor the front-end of the City Explorer application using React. 


### React Components
* index.js
  * app.js
  * header.js
  * form.js
    * map.js
    * meetup.js
    * movies.js
    * trails.js
    * weather.js
    * yelp.js


### Testing
Tests can be found in the `__tests__` directory:
`__tests__/<file to be tested>.test.js`

Where `<file to be tested>` is the name of the file that the test file applies to.

All testing for this class was done with Jest: 
* [Jest docs](https://jestjs.io/docs/en/getting-started)

Instructions for replicating the tests for this project are as follows:

* Clone the repo.
* Create a node runtime environment

    ```JavaScript
    npm init
    ```
    This will create a `package.json` file, a `package-lock.json` file.

* Install Jest

    ```JavaScript
    npm i jest
    ```

* Run jest

    ```JavaScript
    npm jest --verbose --coverage
    ```
    It is useful to bind this to the command:
    ```JavaScript
    npm test
    ```
    To do this, manually edit your package.json to include the following under the "scripts" attribute:
    ```Javascript
    "scripts": {
        "test": "jest --verbose --coverage",
        "test-watch": "jest --watchAll --verbose --coverage"
    }
    ```
    `test-watch` will re-run tests when the file is saved

### Dependencies
* React: `create-react-app`

* Jest: `npm i jest` 
    * [docs](https://jestjs.io/docs/en/getting-started)
    * Testing
* Superagent: `npm i superagent`
    * [docs](https://www.npmjs.com/package/superagent)
    * Node.js HTTP request library

### UML


