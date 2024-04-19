# skygoal

# Why Node JS
Node.js: Node.js provides a lightweight and efficient runtime environment for building server-side applications, making it well-suited for developing RESTful services.

# why Express
Express.js: Express.js is a popular web application framework for Node.js, providing a robust set of features for building web servers and APIs. It simplifies the process of defining routes, handling requests, and managing middleware.

# why mongodb
MOngoDB: Chosen as the relational database management system for storing event data and  manipulating and updating the events data


# Why dotenv
dotenv: dotenv is a module that loads environment variables from a .env file into process.env. It's useful for securely managing sensitive information like API keys.

## Prerequisites:
1.Node JS installed in system.
2.later  installed packages like express,axios and dotenv(npm packages).
3.installed mysql to interact with database and manage events.
4.I ensure that the api keys,database information i accessed from .env for security.
5.I implemented  MVC (Model-View-Controller) architecture it helps organize and structure applications.


## project Structure
project-root/
│
├── controllers/
│   └── user.js
│
├── models/
│   └── user.js
│
├── middileware/
│   |── auth.js
|   |__ validaton.js
|
├── routes/
│   └── route.js
│
├── data/
│   └── mongoose.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md

API Documents:
-------------
## Introduction
 API provides a user can get events near by him with 14 days of period.

## Base URL
Method: POST
http://localhost:3333/


## info:
  title: User Authentication API
  description: API documentation for user authentication and management
## paths:
 # http://localhost:3333/login:
 ![image](https://github.com/saiganesh6841/skygoal/assets/147468914/7b2ccfa1-ea4b-458a-b6e3-47b518dec114)

  # method=  post:
      summary: Login user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                username:
                  type: string
                password:
                  type: string
      responses:
        '200':
          description: Successful login
        '401':
          description: Unauthorized

  /register:
    post:
      summary: Register new user
      description: Endpoint to register a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                username:
                  type: string
                fullname:
                  type: string
                email:
                  type: string
                password:
                  type: string
                gender:
                  type: string
                  enum: [male, female, other]
      responses:
        '201':
          description: User registered successfully
        '400':
          description: Bad request

  /userdetails:
    get:
      summary: Get user details
      description: Endpoint to retrieve user details
      security:
        - Authorization: []
      responses:
        '200':
          description: User details retrieved successfully
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
