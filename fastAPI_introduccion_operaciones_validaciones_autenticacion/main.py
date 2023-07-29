from fastapi import FastAPI, Body, Path, Query
from fastapi.responses import HTMLResponse, JSONResponse
from pydantic import BaseModel, Field  # usado para validar si los objetos de entrada cumple con el formato que espera la API. Field se usa para validaciones
from typing import Optional, List

app = FastAPI()
app.title = 'Mi aplicacion con fastAPI'  # modificando titulo de la app. 
app.version = '0.0.1'  # modificando la version de la API

# Creando el esquema de datos
class Movie(BaseModel):
    id: Optional[int] = None  # Creando un parametro opcional 
    title: str = Field(min_length=5 ,max_length=25)  # validacion de datos
    overview: str = Field(min_length=5 ,max_length=55)
    year: int = Field(le=2023)  # le=2023, valor menor o igual a 2023 
    rating: float = Field(ge=1, le=10)  # ge=1 igual o mayor a 1, le=10 igual o menor a 10
    category: str = Field(min_length=5, max_length=15)

    # Creando valores "Default" para cada clave/valor de body de la clase movie: 
    class Config: 
        schema_extra = { 
            "example": {
                "id": 1,
                "title": "Title of the movie",
                "overview": "Overview of the movie",
                "year": 2000,
                "rating": 9.8,
                "category": "Action"
            }
        }

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
@app.get('/movies', tags=['movies'], response_model=List[Movie])
def get_movies() -> List[Movie]:
    return JSONResponse(content=movies)  # usando JSONresponse, para obtener respuestas en formato tipo json

# Filtrando peliculas por parametro
# Filtrado por ID
@app.get('/movies/{id}', tags=['movies'], response_model=Movie)
def get_movie(id: int = Path(ge=1, le=2000)) -> Movie:  # Val;idacion de parametros 
    for item in movies:
        if item["id"] == id:
            return JSONResponse(content=item)
    return JSONResponse(content=[])

# Filtrando peliculas por categoria
# Filtrado por parametro Query (no se especifica un ID, en el endpoit)
@app.get('/movies/', tags=['movies'], response_model=List[Movie])
def get_movies_by_category(category: str = Query(min_length=5, max_length=15)) -> List[Movie]:
    data = [item for item in movies if item['category'] == category]
    return JSONResponse(content=data)

# Método POST
# Con Body(), ya no pedira los valores como parametros, sino como un objeto tipo Json.
@app.post('/movies', tags=['movies'], response_model=dict)
def create_movie(movie: Movie) -> dict:
    movies.append(movie.dict())
    return JSONResponse(content={"message": "Se ha registrado la pelicula"})

# usando el metodo Put
@app.put('/movies/{id}', tags=['movies'], response_model=dict)
def update_movie(id: int ,movie: Movie) -> dict:
    for item in movies:
        if item["id"] == id:
            item['title'] = movie.title
            item['overview'] = movie.overview
            item['year'] = movie.year
            item['rating'] = movie.rating
            item['category'] = movie.category
            return JSONResponse(content={"message": "Se ha modificado la pelicula"})
        
# Usando metodo Delete
@app.delete('/movies/{id}', tags=['movies'], response_model=dict)
def delete_movie(id: int) -> dict:
    for item in movies:
        if item["id"] == id:
            movies.remove(item)
            return JSONResponse(content={"message": "Se ha eliminado la pelicula"})