from tkinter import Image
from fastapi import FastAPI, UploadFile, Depends
from sqlalchemy.orm import Session
import models, database, crud, schemas, AI
import PIL, io, os
from PIL import Image

models.database.Base.metadata.create_all(bind=database.engine)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(BASE_DIR, 'static/images/')
SERVER_IMAGE_DIR = os.path.join('http://localhost:8000/', 'static/images/')

app = FastAPI()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def say_hello():
    return { "message": "a201 team dolarge"}

@app.post("/epari/v1/plantAi")
async def get_name(capturedImg: UploadFile, db: Session = Depends(get_db)):
    # db_plant = crud.create_plant(db, plant=plant)
    # 이미지 받아와서 어떤 식물인지 파악하기
    image_content = await capturedImg.read()
    image = Image.open(io.BytesIO(image_content))
    # 파악한 식물 이름 저장하기
    rlt = AI.predict(image)
    # rlt_image = open('static/images/' + crud.get_image(db=db, plantId=rlt["plantId"]), 'rb')
    # rlt_image = open('sample.jpg', 'rb')
    temp = {
        'plantId': rlt["plantId"],
        'plantName': rlt["plantName"],
        'detailPictureUrl': Image.open('sample.jpg')
    }
    # plant.plantId = 1
    return temp

# print(AI.predict(PIL.Image.open("./sample.jpg")))