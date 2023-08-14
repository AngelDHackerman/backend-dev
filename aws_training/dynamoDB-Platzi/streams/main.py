# Creating the Lambda Funcion: 

# Create the role using the command:
# aws iam create-role --role-name dynamodbStreamsRole --assume-role-policy-document file://role.json
# ARN Number: arn:aws:iam::062715921555:role/dynamodbStreamsRole

# aws iam put-role-policy --role-name dynamodbStreamsRole --policy-name lambdapermission --policy-document file://policy.json
# zip function.zip main.py

def dynamodb_events(event, context):
  print('Nuevo Evento')
  print(event)
  