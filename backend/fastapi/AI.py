import torch
from torchvision import transforms

import PIL
import json

# 모델 불러오기
model = torch.load('./model.pth')
model.eval()

def predict(img):
    # 이미지 전처리
    data_transforms = transforms.Compose([
        # 이미지를 224*224 크기로 변환
        transforms.Resize((224,224)),
        # PIL 이미지를 Tensor로 변환
        transforms.ToTensor(),
        # 데이터 정규화 (이미 구해진 평균, 표준편차를 사용)
        transforms.Normalize(mean=[0.507, 0.487, 0.441], std=[0.267, 0.256, 0.276]),
    ])

    transformed_img = data_transforms(img)

    # 학습을 batch 단위로 했기 때문에, 단일 데이터를 입력하기 위해선 차원을 하나 늘려줘야함.
    transformed_img = transformed_img.unsqueeze(dim=0)

    # 모델에 적용

    # cuda가 사용 가능하다면 cuda를, 아니라면 cpu를 디바이스로 지정
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    # 모델과 인풋 데이터의 디바이스 위치 통일
    model.to(device)
    transformed_img = transformed_img.to(device)
    # Tensor 형태의 output
    output = model(transformed_img)

    # Output 변환
    # Tensor 내에서 최댓값을 _에, 그 인덱스 정보를 y_hat에 저장
    _, y_hat = output.max(1)
    # Tensor 형태의 인덱스 정보를 문자열로 변환
    predicted_idx = str(y_hat.item())
    # 인덱스값에 맞는 꽃이름을 찾아 출력
    imagenet_class_index = json.load(open('./cat_to_name.json', 'rt', encoding='UTF8'))
    return imagenet_class_index[predicted_idx]