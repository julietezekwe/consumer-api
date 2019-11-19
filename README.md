# Consumer API Microservice

## Introduction
Consumer API service is a microservice that listens to queued messages and save them to the database.

## Table of Contents
1. <a href="#tech-stack-used">Technologies Used</a>
2. <a href="#application-features">Application Features</a>
3. <a href="#how-to-use">How To Use</a>
4. <a href="#author">Author</a>
4. <a href="#license">License</a>


## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Babel](https://babeljs.io) 
- [Eslint](https://eslint.org/)
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) - - [style guide](https://github.com/airbnb/javascript)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Redis Queue Package: Bull](https://www.npmjs.com/package/bull)
- [Yarn](https://redis.io/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mongoose](https://www.npmjs.com/package/mongoose)

## Application Features

* Messages in the named queue are saved to the database
* Messages saved to the database are cached with redis


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Yarn](https://yarnpkg.com/en/docs/install) and [Node.js](https://nodejs.org/en/download/) 
(which comes with [npm](http://npmjs.com)) installed on your computer. You also need to have mongodb and redis server installed loccally.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/julietezekwe/consumer-api

# Go into the repository
$ cd consumer-api

# configurations
$ copy the content of .env.sample into a new file .env and provide all the needed variables

# Install dependencies
$ yarn install

# Create .env file for environmental variables in your root directory like the .env.example file


# Run the app
$ yarn watch
```

## Author

Chidimma Juliet Ezekwe

## License

ISC

---
