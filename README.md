# Booking-App-Back

The Booking-App-Back is the backend of an internet portal for booking tables in restaurants. User registration and login will be performed by JWT. All bookings and user data are stored in the database.

This backend handles things like:

- user registrations
- user login
- user reservations
- deleting accounts
- changing username
- changing passwords
- deleting a reservation

## Getting Started

Clone or download this project and follow the following steps.

### Installing

To initiate the project, enter in the terminal:

```
npm install
```

To start a live server, enter in the terminal:

```
npm start
```

## Deploying Your Application
### Heroku
##### 1. Database Preparation

* Create your [MongoDB Atlas account](https://account.mongodb.com/account/register) and follow these steps.
  - Setup you organization and project name.
  - Choose JavaScript as your preferred language.
  - You can configure your options here, but you can just skip and click __Create cluster__ button.
  - Fill your preferred _Username_ and _Password_. Click __Create user__.
  - Choose __Cloud Environtment__ option.
  - Fill the _IP Address_ with: __0.0.0.0/24__ and click __Add Entry__ button. Click __Continue__ button.
  - In the _Pick Connection_ section, just click __Continue__ button and _Visit your cluster_.
  - Finally, click the __Continue__ button again. Wait until the creation process finished.
* If you already have the account, you can login to your [MongoDB Atlas account](https://account.mongodb.com/account/login)] and follow these steps.
  - Click on __Build a cluster__ button.
  - Choose _Shared Clusters_ option.
  - You can configure your options here, but you can just skip and click on __Create Cluser__ button. Wait until the creation process finished.
* After the cluster has been created, click the __Connect__ button under the cluster's name.
* Choose _Connect your application_ option.
* Here, you can copy your database connection by click the __Copy__ button. We will use it later.

##### 2. Application Preparation
* Create your [Heroku account](https://signup.heroku.com/).
* Download and install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
* Run this command to login to your account:
```
heroku login
```
* Navigate to your project's folder and run this command:
```
heroku create YOUR_USERNAME-booking-app-back
heroku git:remote -a YOUR_USERNAME-booking-app-back
```
* Run these command to set your application's configurations:
```
heroku config:set PORT=3001
heroku config:set JWT_SECRET=YOUR_RANDOM_SECRET_KEY
heroku config:set DB_CONNECT="YOUR_DATABASE_CONNECTION"
```
* Example: 
```
heroku config:set PORT=3001
heroku config:set JWT_SECRET=my_random_secret
heroku config:set DB_CONNECT="mongodb+srv://admin:my_strong_password@cluster0.fzqi1.mongodb.net/dbbooking?retryWrites=true&w=majority"
```
* Deploy your application:
```
git add .
git commit -am "Initial commit"
git push heroku master
```

## Built With

- NodeJS
- Express
- MongoDB
- Mongoose
- Validator
- JsonWebToken

## Author

- **Jarkowski Tomasz**

## License

For personal use only. Do not distribute.
