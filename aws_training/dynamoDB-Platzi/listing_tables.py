import boto3

def list_dynamodb_tables(): 
  # Creando un cliente para DynamoDb
  dynamodb = boto3.client('dynamodb')
  
  # Llamando al metodo list_tables para obtener todas las tablas
  response = dynamodb.list_tables()
  
  # Imprimiendo las tablas:
  # Extracting the 'TableNames' key from the response dictionary
  # 'TableNames' is a predefined key in the response that contains a list of table names
  tables = response['TableNames']
  print('Tablas existentes en mi cuenta de AWS:')
  for table in tables:
    print(table)
    
if __name__ == "__main__":
  list_dynamodb_tables()