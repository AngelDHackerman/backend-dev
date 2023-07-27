from fastapi import FastAPI, Body
from fastapi.responses import HTMLResponse
from pydantic import BaseModel  # usado para validar si los objetos de entrada cumple con el formato que espera la API. 
from typing import Optional

app = FastAPI()
app.title = 'Mi aplicacion con fastAPI'  # modificando titulo de la app. 
app.version = '0.0.1'  # modificando la version de la API

# Creando el esquema de datos
class Movie(BaseModel):
    id: Optional[int] = None  # Creando un parametro opcional 
    title: str
    overview: str
    year: int
    rating: float
    category: str

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
def get_movies_by_category(category: str, year: int):
    return [item for item in movies if item['category'] == category]

# Método POST
# Con Body(), ya no pedira los valores como parametros, sino como un objeto tipo Json.
@app.post('/movies', tags=['movies'])
def create_movie(movie: Movie):
    movies.append(movie)
    return movies

# usando el metodo Put
@app.put('/movies/{id}', tags=['movies'])
def update_movie(id: int ,movie: Movie):
    for item in movies:
        if item["id"] == id:
            item['title'] = movie.title
            item['overview'] = movie.overview
            item['year'] = movie.year
            item['rating'] = movie.rating
            item['category'] = movie.category
            return movies
        
# Usando metodo Delete
@app.delete('/movies/{id}', tags=['movies'])
def delete_movie(id: int):
    for item in movies:
        if item["id"] == id:
            movies.remove(item)
            return movies

