import boto3 
from boto3.dynamodb.conditions import Key, Attr

if __name__ == "__main__":

  # Extrayendo informacion de las tablas del item con Id 238

  dynamodb = boto3.resource('dynamodb')

  table = dynamodb.Table('Personajes')

  response = table.query(
    KeyConditionExpression=Key('Id').eq(238)
  )

  # print(response)

  # Crear un nuevo item en la tabla personajes
  
  table.put_item(
    Item = {
      'Id': 123,
      'Gender': 'Female',
      'Status': 'Alive'
    }
  )
  
  # Volviendo a extraer info de la tabla: 
  
  response = table.query(
    KeyConditionExpression=Key('Id').eq(123)
  )
  
  print(response)