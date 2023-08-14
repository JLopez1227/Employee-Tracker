# Employee-Tracker

## Description
In this assignment we were tasked with creating a functional database with a `schema.sql`, `seeds.sql`, con using `MySQL`. I had to create tables for department, roles, as well as a employees. Each of these tables were created in the `schema.sql` file in the `db folder`. The seed data for these tables was created in the `seeds.sql` file in the `db folder`. I also had to set up queries for viewing these tables as well as adding either a new department, role or employee. This was done in the respective add and view query JavaScript files in the queries folder. The application allows you to view all employees, roles, and view all departments. You can also add a new department, role, or employee.
## Getting Started
To use this application you'll first want to clone my GitHub Repository to your local computer. After you've done this you'll want to open the intergrated termial on the `db folder`. You'll then run `mysql -u root -p` and enter your password (if you have one) to enter the mysql shell. Once in the mysql shell you'll run `source schema.sql;` and after run `source seeds.sql;`. This will create the database and seed the data. You can then `cd..` into the `Employee-Tracker` level. Once you're here, you run `npm i` to install all the necessary packages, then finally run `node server.js`. This will start up the application and you can view all employees, roles, and departments! As well as being able to add a new department, role or employee!

## Links 
[GitHub Repository](https://github.com/JLopez1227/Employee-Tracker)

## Tutorial Video
The following video demonstrates how to properly use this application, while also showcasing it's functionality. 
[Employee Tracker Walkthrough Video](https://drive.google.com/file/d/1mzNQQGuhCW1QWWmYVX7yLTcv5VtHIX1a/view)