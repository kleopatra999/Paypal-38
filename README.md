
Step to run:

1. make sure mongod daemon is running

2. install dependency pacakges:

$ cd ${this root directroy}

$ npm install

3. Start the web application server

$ cd ${this root directroy} // optional

$ npm start


4. Access the URL: port is 3000, such as:

http://dixitruth.com:3000


5. It should work.


6. CRUD are implemented in the server-side.

So the following Restful API works:

- http://dixitruth.com:3000/
- http://dixitruth.com:3000/paypal/
- http://dixitruth.com:3000/paypal/list
- http://dixitruth.com:3000/paypal/get/:id
- http://dixitruth.com:3000/paypal/create
- http://dixitruth.com:3000/paypel/edit/:id
- http://dixitruth.com:3000/delete/:id


7. Anytime run:

$ node init_db.js

to generate mock data for testing.


8. The UI implements:

- Validate Form

- Money convert

- Loading indicator

- Underscore templates

- jQuery Ajax RestAPI

- Node + MongoDB supported in the server-side

- Hand writing CSS-styles +  Twitter Bootstrap

- Some animation  effects

- ......
