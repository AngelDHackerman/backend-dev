from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()
app.title = 'Mi aplicacion con fastAPI'  # modificando titulo de la app. 
app.version = '0.0.1'  # modificando la version de la API

movies = [
    {
        'id': 1,
        'title': 'Avatar',
        'overview': "En un exuberante planeta llamado Pandora viven los Na'vi, seres que ...",
        'year': '2009',
        'rating': 7.8,
        'category': 'Acción'    
    },
    {
        'id': 2,
        'title': 'Avatar 2',
        'overview': "La misma historia en pandora pero diferente ...",
        'year': '2021',
        'rating': 7.8,
        'category': 'Acción'    
    } 
]

# Primer endpoint "/"
@app.get('/', tags=['Home'])  # tags=['home'], tag que se muestra en los docs de fastAPI
def message():
    return HTMLResponse('<h1>Hello World</h1>')

# Segundo endpoint "/movies"
@app.get('/movies', tags=['movies'])
def get_movies():
    return movies

# Filtrando peliculas por parametro
# Filtrado por ID
@app.get('/movies/{id}', tags=['movies'])
def get_movie(id: int):
    for item in movies:
        if item["id"] == id:
            return item
    return []

# Filtrando peliculas por categoria
# Filtrado por parametro Query (no se especifica un ID, en el endpoit)
@app.get('/movies/', tags=['movies'])
def get_movies_by_category(category: str):
    category_movies = [movie for movie in movies if movie["category"] == category]
    return category_movies
