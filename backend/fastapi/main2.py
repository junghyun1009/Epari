from tkinter import Image
from fastapi import FastAPI, UploadFile, Depends
from sqlalchemy.orm import Session
import models, database, crud, schemas, AI
import PIL, io, os
from PIL import Image

from settings import IMG_DIR
from fastapi.responses import FileResponse

# 최초 DB 생성할 때는 1번 코드를 주석해제하여 사용(2번은 주석처리)
# DB가 이미 존재할 때는 2번 코드를 사용(1번 주석처리)
# 1.
# models.database.Base.metadata.create_all(bind=database.engine)

# 2.
models.database.Base.metadata.bind = database.engine

app = FastAPI()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/epari/v1/plantAi")
async def get_name(capturedImg: UploadFile, db: Session = Depends(get_db)):
    # db_plant = crud.create_plant(db, plant=plant)
    # 이미지 받아와서 어떤 식물인지 파악하기
    image_content = await capturedImg.read()
    image = Image.open(io.BytesIO(image_content))
    # 파악한 식물 이름 저장하기
    rlt = AI.predict(image)

    print(rlt)
    img = 'static/images/' + str(rlt["plantId"]) + ".jpg"
    return FileResponse(img, filename=img)