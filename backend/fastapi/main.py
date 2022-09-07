from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def say_hello():
    return { "message": "a201 team dolarge"}