from tkinter import Image
from fastapi import FastAPI, UploadFile
import models, database, AI
import PIL, io
from PIL import Image

models.database.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

@app.get("/")
def say_hello():
    return { "message": "a201 team dolarge"}

@app.post("/epari/v1/plantAi")
async def get_name(capturedImg: UploadFile):
    image_content = await capturedImg.read()
    image = Image.open(io.BytesIO(image_content))
    return AI.predict(image)

# print(AI.predict(PIL.Image.open("./sample.jpg")))