const fs = require('fs');
const FormData = require('form-data');

function addMultipartFormData(requestParams, context, ee, next) {
  const form = new FormData();
  form.append('image', fs.createReadStream('./test_image.jpeg'));
  form.append('tag', 'main');
  requestParams.body = form;
  next();
}

function logResponse(requestParams, response, context, ee, next) {
  console.log('[DEBUG] Response: ', response.body);
  return next();
}
module.exports = {
  addMultipartFormData,
  logResponse,
};
