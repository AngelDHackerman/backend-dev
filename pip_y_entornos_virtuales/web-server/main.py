import store
from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get('/')
def get_list():
  return [1, 2, 3, 4]

@app.get('/contact', response_class=HTMLResponse)  # response_class=HTMLResponse, hace que la respuesta sea interpretada como un HTML
def get_list(): 
  return '''
  <h1>HOla soy una pagina</h1>
  <p>Soy un parrafo</p>
'''

def run(): 
  store.get_categories()
  
if __name__ == "__main__":
  run()