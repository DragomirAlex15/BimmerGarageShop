from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS pentru React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "app": "BimmerGarage",
        "status": "Backend running",
        "version": "1.0"
    }

@app.get("/info")
def info():
    return {
        "title": "BIMMERGARAGE",
        
    }
@app.get("/products")
def get_products():
    return [
        {
            "id": 1,
            "name": "Smartdisplay Boost/Temp Gauged",
            "price": 1500,
            "image": "/sd.jpeg",
        },
        {
            "id": 2,
            "name": "Prosop microfibre",
            "price": 80,
            "image": "/prosop.jpeg",
        },
        {
            "id": 3,
            "name": "Sticker BimGarage",
            "price": 10,
            "image": "/sticker.jpeg",
        },
    ]

