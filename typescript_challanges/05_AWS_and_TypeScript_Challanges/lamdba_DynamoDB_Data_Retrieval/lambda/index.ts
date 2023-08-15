import { DynamoDB } from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = 'TypeScriptTestingTable';

export const handler: APIGatewayProxyHandler = async (event) => {
  // Parse event.body to JSON
  const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
  const id = body?.id

  const params = {
    TableName: tableName,
    Key: { id },
  };

  try {
    const result = await dynamoDb.get(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
