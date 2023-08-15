import { DynamoDBStreamEvent } from 'aws-lambda';
import * as AWS from 'aws-sdk';

// Initialize the EventBridge client to publish events to AWS EventBridge
const eventBridge = new AWS.EventBridge();

exports.handler = async (event: DynamoDBStreamEvent) => { 
  
}