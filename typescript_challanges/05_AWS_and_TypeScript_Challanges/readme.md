
# Instalation and execution commands for AWS-CDK, Lambda and DynamoDB

## Step 1: Make sure NodeJs and AWS-CLI are installed: 

Before you begin, make sure you have Node.js and AWS CLI installed. Then, install the AWS CDK using the following command:

__Node JS:__

`node -v`

__AWS-CLI:__

`aws --version`

__Installing AWS-CDK__

`npm install -g aws-cdk`

__make sure cdk was installed:__

`cdk --version`

## Step 2: Create a New CDK Project

Create a new directory for your project and navigate to it in the terminal. Then, initiate a new CDK project with TypeScript:

`mkdir my-new-aws-project`

`cd my-new-aws-project`

`cdk init app --language typescript`

## Step 3: Install Dependencies

Install the necessary dependencies for Lambda and DynamoDB:

`npm install @aws-cdk/aws-lambda @aws-cdk/aws-dynamodb`

Install the type definitions for Lambda and DynamoDB: 

`npm install --save-dev @types/aws-sdk @types/aws-lambda`


## Step 4: Sending the lambda and dependecies to AWS

Once the project is finish and compiled, make sure the file `index.js` and the compiled file `index.js` are both in the root of the project directory.
Then inside the project directory execute this command: 

`zip -r my-dynamodb-project.zip .`

This will create a new .zip file that has to be uploaded to AWS lambda web interface.

Add the right permistions to your lambda, you can use this template template: 

```
{
  "Version": "2012-10-17",
  "Statement": [
      {
          "Effect": "Allow",
          "Action": "logs:CreateLogGroup",
          "Resource": "your-ARN-here"
      },
      {
          "Effect": "Allow",
          "Action": [
              "logs:CreateLogStream",
              "logs:PutLogEvents"
          ],
          "Resource": [
              "your-ARN-here"
          ]
      },
      {
          "Effect": "Allow",
          "Action": [
              "dynamodb:GetRecords",
              "dynamodb:GetShardIterator",
              "dynamodb:DescribeStream",
              "dynamodb:ListStreams"
          ],
          "Resource": "your-ARN-here"
      },
      {
          "Effect": "Allow",
          "Action": "events:PutEvents",
          "Resource": "your-ARN-here"
      }
  ]
}
```

In order to test the lambda you can use this code for testing purposes: 

```
{
  "Records": [
    {
      "eventID": "1",
      "eventName": "INSERT",
      "dynamodb": {
        "Keys": {
          "Id": {
            "N": "101"
          }
        },
        "NewImage": {
          "Message": {
            "S": "New item!"
          },
          "Id": {
            "N": "101"
          }
        }
      }
    }
  ]
}

``` 