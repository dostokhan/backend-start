const seedRole = require('./role');
const seedUser = require('./user');
// const seedProduct = require('./product');
const database = require('server/config/database');

// console.log('connecting to database');
/
const seed = async () => {
  try {
    const roleSeeded = await seedRole();
    console.log(`Role Seeded: ${roleSeeded}`);

    const userSeeded = await seedUser();
    console.log(`Admin User Seeded: ${userSeeded}`);

    // const productSeeded = await seedProduct();
    // console.log(`Product Seeded: ${productSeeded}`);

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
setTimeout(() => {
  seed();
}, 2000);
