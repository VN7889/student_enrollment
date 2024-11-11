# To start the app do the following steps.
##### Step 1: 
Download and extract the entire project from the github onto your local PC.

##### Step 2:
Now make sure inside the frontend folder install the supporting folder for react framework and Change the content of App.js file with the student enrollment project file. 
Organize the files like this.

student_enrollment/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
├── frontend/
│   ├── src/
        ├── App.js
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
├── docker-compose.yml

##### Step 3: 
Make sure Docker app is turned on and run the following command using the terminal.
docker-compose up --build

Your docker container should start running successfully.
