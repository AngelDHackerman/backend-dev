// This code creates a new table "UserEvents" using typescript and the AWS credentials

import * as AWS from 'aws-sdk';

// Configuration for DynamoDB client
const dynamoDB = new AWS.DynamoDB({ region: 'us-east-1' }); 

// Define parameters f the NEW Table: 
const params = { 
  TableName: 'UserEvents', // name of the new table
  KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
  AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5},
};

// Create the new table
dynamoDB.createTable(params, (err, data) => { 
  if (err) console.error(err);
  else console.log('Table Created', data)
})
