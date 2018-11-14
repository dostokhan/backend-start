const User = require('server/db/models/user');
const Role = require('server/db/models/role');


const ADMIN = {
  username: 'gone',
  password: 'r00t1sg00d',
};

const seedUser = async () => {
  try {
    const role = await Role.findOne({ name: 'Administrator' });
    ADMIN.role = role._id;

    await User.remove();
    await User.create(ADMIN);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}


module.exports = seedUser;
