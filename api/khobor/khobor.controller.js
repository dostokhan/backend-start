const httpStatus = require('http-status');
const {
  debugApi,
  debugError,
} = require('helpers/debugger');


const {
  // getKhobor,
  // searchKhobor,
  listKhobor,
  // createKhobor,
  // updateKhobor,
  // removeKhobor,
} = require('./khobor.repo');


// exports.search = async(req, res, next) => {
//   try {
//     debugApi('search with ' + req.query.q);
//     const khobors = await searchKhobor(req.query.q);
//     res.status(httpStatus.OK).send(khobors);
//   } catch (err) {
//     debugError(err);
//     res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
//   }
// };


// CRUD OPERATIONS
// exports.get = async(req, res, next) => {
//   try {
//     const khobor = await getKhobor(req.params.id);
//     res.status(httpStatus.OK).send(khobor);
//   } catch (err) {
//     debugError(err);
//     res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
//   }
// };

exports.list = async (req, res, next) => {
  try {
    // const khobors = await listKhobor(req.query, true);
    // res.status(httpStatus.OK).send(khobors);
    res.status(httpStatus.OK).send({ hola: 'amigo' });
  } catch (err) {
    debugError(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
};


// exports.create  = async (req, res, next) => {
//   try {
//     const response = await createKhobor(req.body);
//     if (!response) {
//       debugError(response);
//     }
//     res.status(httpStatus.OK).send(response);
//   } catch (err) {
//     debugError(err);
//     res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
//   }
// };

// exports.update = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const response = await updateKhobor(id, req.body);
//     res.status(httpStatus.OK).send(response);
//   } catch (err) {
//     debugError(err);
//     res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
//   }
// };


// exports.remove = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     await removeKhobor(id);
//     res.status(httpStatus.OK).send({ id });
//   } catch (err) {
//     debugError(err);
//     res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
//   }
// };

