from fastapi import FastAPI
import models, database

models.database.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

@app.get("/")
def say_hello():
    return { "message": "a201 team dolarge"}