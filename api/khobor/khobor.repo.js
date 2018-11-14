const Khobor = require('db/models/khobor');
const {
  debugDb,
  debugApi,
  debugError,
} = require('helpers/debugger');

const {
  PAGE_SIZE,
} = require('./khobor.constants');

const sanitizeKhobor = (data, id = false) => {
  const newKhobor = {
      name: data.name,
      sku: data.sku,
      description: data.description || '',
      retail_price: parseInt(data.retail_price, 10),
      wholesale_price: parseInt(data.wholesale_price, 10),
      quantity: parseInt(data.quantity, 10) || 99,
      image: data.image,

      status: data.status || '', // entity id
      category: data.category || '', // entity id
  };

  if (!id) {
    debugApi('CREATING');
    debugApi(newKhobor);
    return newKhobor;
  }

  const updatedKhobor = {};
  Object.keys(data).forEach((key) => {
    updatedKhobor[key] = data[key];
  });

  debugApi('UPDATING');
  debugApi(updatedKhobor);
  return updatedKhobor;
};


/**
 * Get list by user
 * @public
 */
// exports.getByUser = async (req, res) => {
//   const username = req.params.username;
//   console.log(req.params);

//   return User.findOne({
//     where: { username },
//     include: [{
//       model: Khobor
//     }],
//   })
//     .then(khobors => res.status(200).send(khobors))
//     .catch(error => res.status(400).send(error));
// };


// exports.search = async(q) => {
//   try {
//     const khobors = await Khobor
//       .find(
//         { $text: {$search: q }},
//         { score : { $meta: "textScore" } },
//       )
//       .sort({ score : { $meta: "textScore" } })
//       .limit(5);


//     return khobors;
//   } catch (err) {
//     return err;
//   }
// };

// exports.get = async(id) => {
//   try {
//     const khobor = await Khobor.findById(id);
//     return khobor;
//   } catch (err) {
//     return err;
//   }
// };

exports.listKhobor = async (filters, paginate = true) => {
    try {
      const query = {};

      // if (filters.category) {
      //   query.category = filters.category;
      // }

      const options = {
        page: filters.page || 1,
        limit: filters.limit || PAGE_SIZE,
      };

      debugApi('Query: ', query);
      debugApi('Pagination: ', options);

      let khobors;
      if (paginate) {
        khobors = await Khobor.paginate(query, options);
      } else {
        khobors = await Khobor.find(query);
      }

      return khobors;
    } catch (err) {
      debugError(err);
      return [];
    }
};


exports.create  = async (reqBody) => {
  try {
    const khobor = sanitizeKhobor(reqBody);
    debugApi('SANITIZED khobor');
    debugApi(khobor);
    const response = await Khobor.create(khobor);
    debugApi('CREATED khobor');
    debugApi(response);
    return response;
  } catch (err) {
    return null;
  }
};

exports.update = async (id, reqBody) => {
  try {
    const updateObject = sanitizeKhobor(reqBody, id);
    const response = await Khobor.findByIdAndUpdate({ _id: id }, { $set: updateObject }, { new: true });
    return response;
  } catch (err) {
    return err;
  }
};


exports.remove = async (id) => {
  try {
    debugApi('id: ' + id);
    await Khobor.findOneAndRemove({ _id: id });
    return true;
  } catch (err) {
    return err;
  }
};



/**
 * Get list
 * @public
 */
exports.list = async (req, res) => {
  debugDb('Query khobor list');

  return Khobor.find({})
  // return Khobor.find({
  //   where: req.query,
  //   // include: [{ model: User, attributes: { exclude: ["password"] }, required: true }],
  // })
    .then(khobors => res.status(200).send(khobors))
    .catch(error => res.status(400).send(error));
};



