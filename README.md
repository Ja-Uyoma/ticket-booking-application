# ticket-booking-application

A site for booking tickets to events

## How to install

Open a terminal and run the following commands:

- `npm install`
- `npm run build`

Afterwards, create a `.env` file wherein you will hardcode your
database and other information, namely:

```
DB_NAME="your_database"
DB_USER="your_database_user"
DB_PASSWORD="your_database_password"
DB_HOST="your_database_host"
MAIL_SENDER="your_email"
MAIL_SENDER_PASSWORD="your_email_app_password"
SESSION_SECRET="your_session_secret"
```

For more information on the MAIL_SENDER_PASSWORD, see [Sending email using nodemailer](https://medium.com/@y.mehnati_49486/how-to-send-an-email-from-your-gmail-account-with-nodemailer-837bf09a7628)

Finally, run `npm start`, open your browser and navigate to the address: [ticketpal](http://localhost:3000)
