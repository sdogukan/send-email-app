# Sending Email with Nodemailer

This is a simple Node.js script that uses the Nodemailer library to send an email through a Gmail account.

## Prerequisites

Before running the script, make sure you have the following:

- Node.js installed on your machine
- Gmail account credentials (email address and password)

## Installation

1. Clone this repository.

2. Install the required dependencies by running the following command in your terminal:

   ```bash
   npm install

3. Create a new file named .env in the project's root directory.

4. Open the .env file and add the following environment variables, replacing the placeholders with your actual Gmail account credentials:
    ```bash
    GMAIL_USER=your_email_address
    GMAIL_PASSWORD=your_email_password
    
5. In the package.json file, make sure to add the "type": "module" property:

    ```json
    "type": "module"
    
6. Run the script using the following command in your terminal:
    
    ```bash
    npm start
