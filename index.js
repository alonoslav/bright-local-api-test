var brightLocal = require('bright-local-api');
var Api = brightLocal.Api;
var BatchApi = brightLocal.V4;

var api = new Api('f22ac3881184f0dd43756a3168207f6c39b0c7a8', '58b043d9e876a');

console.log('Api: ', api);

var batchApi = new BatchApi(api);

console.log('Batch: ', batchApi);

var res = batchApi.create();

console.log('Result: ', res);

res
  .then(result => console.log('Result: ', result))
  .catch(error => console.log('Error: ', error));
