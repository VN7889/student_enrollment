# To start the app do the following steps.
##### Step 1: 
Download and extract the entire project from the github onto your local PC.

##### Step 2:
Now make sure inside the frontend folder the files are placed in their respective folders as per the below given structure.

```
student_enrollment/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
├── frontend/
│   ├── src/
        ├── App.js
        ├── App.css
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── reportWebVitals.js
        ├── setupTests.js
│   ├── public/
        ├── index.html
│   ├── package.json
│   ├── Dockerfile
├── docker-compose.yml
```
##### Step 3: 
Make sure Docker app is turned on and run the following command using the terminal.
```
docker-compose up --build
```

Your docker container should start running successfully.
