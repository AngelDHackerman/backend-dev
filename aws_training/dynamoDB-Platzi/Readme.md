# Using DynamoDB with python# Using DynamoDB 

## Installing AWS CLI on virtual env python

`python -m pip install awscli`

## Install Boto3 

`pip install boto3`

## Getting help with AWS commands

`aws help`

`aws dynamodb help`

__List tables:__

`aws dynamodb list-tables`

__Create new table:__

Option 1, the long command:

`aws dynamodb create-table --table-nam DynamoDBPrueba --key-schema AttributeName=EstudianteId,KeyType=HASH --attribute-definitions AttributeName=EstudianteId,AttributeType=N --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5`

Option 2, using the wizard (much easier): 

`aws dynamodb wizard new-table`

__Deleting a table from CLI:__

`aws dynamodb delete-table --table-name table_name_here`


## Create a Lambda Function: 

Execute the command: 

`aws lambda create-function --function-name lambda-export --role arn:aws:iam::name_of_arn_account --runtime python3.7 --handler main.dynamodb_events --publish --zip-file fileb://function.zip`