# serverless-api

![UML](./lab18.jpg);

## Documentation

**DynamoDB**
- stores our people

**Dynamoose**
- sets the model and the program we use in Lambda to update our DynamoDB database

**Lambda**
- has our CRUD methods, "listens" for events, and depending on the request(CRUD) a certain Lambda function will run

**API Gateway**
- essentially acts as our router
- directs requests to the appropriate Lambda function
