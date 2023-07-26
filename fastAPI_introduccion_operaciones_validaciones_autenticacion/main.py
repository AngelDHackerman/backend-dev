from fastapi import FastAPI

app = FastAPI()
app.title = 'Mi aplicacion con fastAPI'  # modificando titulo de la app. 
app.version = '0.0.1'  # modificando la version de la API

@app.get('/', tags=['Home'])  # tags=['home'], tag que se muestra en los docs de fastAPI
def message():
    return 'Hello World'