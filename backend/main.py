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
        "description": "Platforma dedicata pasionatilor",
    }
