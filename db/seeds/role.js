const Role = require('server/db/models/role');


const ROLES = [
  {
    name: 'Member',
  },
  {
    name: 'Administrator',
  },
];

const seedRole = async () => {
  try {
    await Role.remove();
    await Role.create(ROLES)
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}


module.exports = seedRole;
