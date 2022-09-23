from sqlalchemy import Column, Integer, String, BLOB
import database

class Plant(database.Base):
    __tablename__ = "plants"

    plantId = Column(Integer, primary_key=True)
    plantName = Column(String(30))
    # plantKorName = Column(String(30))
    detailPictureUrl = Column(String(200))