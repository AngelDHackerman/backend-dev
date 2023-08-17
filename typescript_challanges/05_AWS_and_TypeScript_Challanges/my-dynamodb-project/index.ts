import { DynamoDBStreamEvent } from 'aws-lambda';
import * as AWS from 'aws-sdk';

const eventBridge = new AWS.EventBridge();

exports.handler = async (event: DynamoDBStreamEvent) => {
  // Process DynamoDB events (add, update, delete)
  for (const record of event.Records) {
    // Create EventBridge event
    const params = {
      Entries: [
        {
          Source: 'custom.myDynamoDB',
          DetailType: 'DynamoDB Record Change',
          Detail: JSON.stringify(record.dynamodb),
          EventBusName: 'default',
        },
      ],
    };

    // Publish event to EventBridge
    await eventBridge.putEvents(params).promise();
  }
};
