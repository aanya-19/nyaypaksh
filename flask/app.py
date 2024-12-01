from flask import Flask
from routes.predict import predict_bp
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# Register the blueprint for prediction routes
app.register_blueprint(predict_bp, url_prefix='/api')  # All prediction routes will be under /api

if __name__ == '__main__':
    port = int(os.getenv('FLASK_PORT', 5001))
    app.run(debug=True, port=port)
