import * as AWS from 'aws-sdk';

// Configuration for DynamoDB client
const dynamoDB = new AWS.DynamoDB({ region: 'us-east-1' }); 

// Parameters of the NEW Table: 
const params = { 
  TableName: 'AngelTable', // name of the new table
  KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
  AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5},
};