const connection = require("./connection")
const mongoose = require("mongoose");

const User = require("../models/User"); 

mongoose
  .connect(connection.atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    const testUsers = [
        {
            firstName: 'User',
            lastName: 'One',
            phone: 1234567890,
            address: '123 Hazel Street',
            city: 'Burnaby',
            state: 'BC',
            zip: 'V5A 1S6',
            email: 'user1@example.com',
            password: 'password1',
        },
        {
            firstName: 'User',
            lastName: 'Two',
            phone: 1234567880,
            address: '123 ABC Street',
            city: 'Burnaby',
            state: 'BC',
            zip: 'V5A 1S6',
            email: 'user2@example.com',
            password: 'password2',
        },
    ];

    User.insertMany(testUsers)
        .then((users) => {
            console.log(`${users.length} test users added to MongoDB.`);
            addTestServices(users);
        })
        .catch((error) => {
            console.error('Error adding test users:', error);
            mongoose.disconnect();
        }
        );
   })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

function addTestServices(users) {
    const Service = require("../models/Service"); 
    const testServices = [
        {
            userId: users[0]._id,
            name: 'Haircut',
            description: 'A simple haircut',
            price: 80,
            kindOfService: 'Hair',
        },
        {
            userId: users[0]._id,
            name: 'Haircut and Shampoo',
            description: 'A simple haircut and shampoo',
            price: 95,
            kindOfService: 'Hair',
        },
        {
            userId: users[0]._id,
            name: 'Lash Extensions',
            description: 'A simple lash extension',
            price: 80,
            kindOfService: 'Lash',
        },
    ];
  
    Service.insertMany(testServices)
      .then((services) => {
        console.log(`${services.length} test services added to MongoDB.`);
        mongoose.disconnect();
      })
      .catch((error) => {
        console.error('Error adding test services:', error);
        mongoose.disconnect();
      });
  }