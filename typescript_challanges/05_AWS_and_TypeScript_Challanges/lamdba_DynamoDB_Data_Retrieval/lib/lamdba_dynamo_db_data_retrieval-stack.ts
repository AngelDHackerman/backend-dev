import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs'

export class LamdbaDynamoDbDataRetrievalStack extends cdk.Stack { 
  constructor(scope: Construct, id: string, props?: cdk.StackProps ) {
    super(scope, id, props);

    // Create DynamoDB table
    const table = new dynamodb.Table(this, 'TypeScriptTestingTable', { 
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    })

    // Create Lambda Function
    const myLambdaFunction = new lambda.Function(this, 'MyTsFunction', { 
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: { 
        TABLE_NAME: table.tableName,
      },
    })

    // Allow the lambda function read access to the DynamoDB table 

    table.grantReadData(myLambdaFunction)

    // Add policy to allow GetItem operation on DynamoDB table
    myLambdaFunction.addToRolePolicy(new iam.PolicyStatement({
      actions: ['dynamodb:GetItem'],
      resources: [table.tableArn],
    }));
  }
}