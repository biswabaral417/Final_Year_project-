from flask import Blueprint, request, jsonify
from app.models.heart_model import HeartDataModel
from app.middleware.auth_middleware import verify_firebase_token

heart_bp = Blueprint('heart', __name__, url_prefix='/heart')

@heart_bp.route('/add', methods=['POST'])
def add_heart():
    uid, error, code = verify_firebase_token()
    if error:
        return error, code
    heart_metrics = request.json
    record = HeartDataModel.create_heart_data(uid, heart_metrics)
    return jsonify({"message": "Heart record added", "record": record})

@heart_bp.route('/updateResult', methods=['PATCH'])
def update_heart_result():
    uid, error, code = verify_firebase_token()
    if error:
        return error, code
    data = request.json
    record_id = data.get("recordId")
    result = data.get("result")
    updated_record = HeartDataModel.update_heart_record(uid, record_id, result)
    if not updated_record:
        return jsonify({"error": "Record not found"}), 404
    return jsonify({"message": "Heart result updated", "record": updated_record})

@heart_bp.route('/history', methods=['GET'])
def get_history():
    uid, error, code = verify_firebase_token()
    if error:
        return error, code
    records = HeartDataModel.get_heart_history(uid)
    return jsonify({"history": records})
@heart_bp.route('calculate_result' methods=['GET'])# get result latest data
def get_results(): 