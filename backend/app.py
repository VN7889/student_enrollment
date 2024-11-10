from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.db' 
db = SQLAlchemy(app)
# Model: Student
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    subject = db.Column(db.String(50), nullable=False)

# Initialize the database
with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return "Welcome! To view the student list in JSON format, add '/students' at the end."

# API to get list of students
@app.route('/students', methods=['GET'])
def get_students():
    students = Student.query.all() 
    students_list = [{'id': student.id, 'name': student.name, 'email': student.email, 'subject': student.subject} for student in students]
    return jsonify(students_list)

# API to add a student
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json() 
    new_student = Student(name=data['name'], email=data['email'], subject=data['subject'])
    db.session.add(new_student)
    db.session.commit()  
    return jsonify({'message': 'Student added successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
