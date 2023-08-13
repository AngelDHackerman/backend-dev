
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

