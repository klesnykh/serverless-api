const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
  height: String,
});

const PersonModel = dynamoose.model('People', personSchema);

exports.handler = async (event) => {
  console.log('DELETE Person Event: ', event);

  let parameters = event.pathParameters;
  let responseBody = null;

  if (event.httpMethod === 'DELETE' && parameters['id']) {
    try{
      let deleted = await PersonModel.delete(parameters['id']);
      console.log(deleted);
      responseBody = { message: 'Item successfully deleted' };
    }
    catch(e){
      console.log(e);
    }
  } else {
    responseBody = await PersonModel.scan().exec();
  }

  console.log(' ', responseBody);

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };
  return response;
};