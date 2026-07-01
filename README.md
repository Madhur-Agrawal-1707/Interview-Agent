# 🎯 AI Interview Platform

An AI-powered interview preparation platform that simulates real-world technical interviews using AI. Users can practice interviews, answer AI-generated questions, receive intelligent feedback, track their progress, and download detailed interview reports in PDF format.

🔗 **Live Demo:** https://interview-agent-model.onrender.com/

📂 **GitHub Repository:** https://github.com/Madhur-Agrawal-1707/Interview-Agent

---

# 📖 Overview

AI Interview Platform is a full-stack web application designed to help students, job seekers, and professionals prepare for technical interviews through realistic AI-powered mock interviews.

Users can choose their desired role and experience level, after which the AI generates personalized interview questions. Every response is evaluated using AI, providing detailed feedback on communication, confidence, correctness, and overall performance.

Once an interview is completed, the platform automatically generates a comprehensive interview report. Users can download the report as a professional PDF and access it anytime from their interview history.

---

# 🌟 Key Highlights

- 🤖 AI-generated interview questions based on selected job role
- 🎤 Interactive AI-powered interview experience
- 📊 AI-based performance evaluation
- ⭐ Overall interview score with detailed metrics
- 📝 Question-wise feedback and suggestions
- 📄 Download interview reports in PDF format
- 📚 Interview history with permanent report storage
- 🔄 Revisit and download previous reports anytime
- 🔐 Secure authentication using JWT
- 👤 Personalized dashboard
- 📱 Responsive UI for desktop and mobile devices

---

# ✨ Features

- AI-generated interview questions
- AI-powered interview evaluation
- Role-based interview generation
- Voice/Text interview support
- Overall interview score
- Confidence analysis
- Communication analysis
- Correctness evaluation
- Question-wise feedback
- Professional interview reports
- Download reports as PDF
- Interview history management
- View previous interview reports
- Download previous reports anytime
- User Authentication
- Protected Routes
- Responsive User Interface

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## AI Integration

- OpenRouter API
- Gemini / OpenAI Compatible Models

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# 📂 Project Structure

```
AI-Interview-Platform/
│
├── client/
│   ├── src/
│   │
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── utils/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── utils/
│
├── README.md
└── package.json
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/ai-interview-platform.git

cd ai-interview-platform
```

---

## Install Frontend Dependencies

```bash
cd client

npm install
```

---

## Install Backend Dependencies

```bash
cd server

npm install
```

---

# ⚙ Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

OPENROUTER_API_KEY=your_openrouter_api_key

CLIENT_URL=http://localhost:5173
```

If required, create another `.env` file inside the **client** folder.

```env
VITE_API_URL=http://localhost:8000
```

---

# ▶ Running the Application

## Start Backend

```bash
cd server

npm run dev
```

---

## Start Frontend

```bash
cd client

npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

# 🧠 How It Works

### Step 1

Create a new account or log in.

### Step 2

Select the interview role and experience level.

### Step 3

The AI generates personalized interview questions.

### Step 4

Answer each interview question.

### Step 5

The AI evaluates every response based on:

- Confidence
- Communication
- Correctness
- Overall Performance

### Step 6

A detailed interview report is automatically generated.

### Step 7

Download the report as a professional PDF.

### Step 8

The completed interview is saved in your Interview History.

### Step 9

Users can revisit previous interviews and download any report again at any time.

---

# 📄 Interview Report

After every completed interview, the platform generates a detailed report containing:

- ⭐ Final Interview Score
- 🎯 Confidence Score
- 💬 Communication Score
- ✅ Correctness Score
- 📝 Question-wise Feedback
- 🤖 AI Suggestions for Improvement

Users can:

- View reports online
- Download reports as PDF
- Access interview history
- Re-download previous reports anytime

---

# 📊 Evaluation Metrics

Every interview response is analyzed using AI based on:

| Metric | Description |
|---------|-------------|
| Confidence | Measures confidence while answering |
| Communication | Evaluates clarity and communication skills |
| Correctness | Checks the accuracy of the response |
| Overall Score | Final performance score generated by AI |

---

# 📸 Screenshots

## Home Page

<img width="1366" height="630" alt="image" src="https://github.com/user-attachments/assets/d1959645-cd37-4659-af1c-710cd1da7321" />
<img width="1318" height="452" alt="image" src="https://github.com/user-attachments/assets/c4d2325f-8f39-4958-9f93-a7ad0ddd2836" />
<img width="1354" height="646" alt="image" src="https://github.com/user-attachments/assets/2b07e265-e36e-48b6-b5be-b55097ab056a" />
<img width="1366" height="603" alt="image" src="https://github.com/user-attachments/assets/4846d523-781b-4542-a0a4-e74e9731a245" />




---

## Dashboard

<img width="1365" height="646" alt="image" src="https://github.com/user-attachments/assets/24bf5d3f-7dce-4ad5-b76b-4823a4f7faee" />


---

## AI Interview

<img width="1354" height="646" alt="image" src="https://github.com/user-attachments/assets/1b8bfa6d-a4f8-410e-8a99-766cea0dda17" />


---

## Interview Report

<img width="1352" height="652" alt="image" src="https://github.com/user-attachments/assets/eec0129a-0f20-48d2-856e-b9a2d03236e3" />
<img width="1365" height="638" alt="image" src="https://github.com/user-attachments/assets/20980d5b-9c19-4bca-bb2c-90b479c451db" />



---

## PDF Report

<img width="747" height="602" alt="image" src="https://github.com/user-attachments/assets/7a01e83e-4163-4fc9-8ff8-6e1a90bd52fa" />
<img width="793" height="513" alt="image" src="https://github.com/user-attachments/assets/002ae311-7edc-4327-83d9-6e70f94c9842" />



---



# 💡 Why I Built This

I built this project to create a realistic AI-powered interview preparation platform that helps users improve their interview skills through personalized practice sessions.

The project combines modern web technologies with AI to generate interview questions, evaluate responses, provide actionable feedback, and track users' progress over time.

It also demonstrates my ability to build a complete full-stack application, integrate AI APIs, implement secure authentication, manage databases, generate downloadable PDF reports, and deploy scalable web applications.

---

# 🚀 Future Improvements

- 🎥 Video interview support
- 💻 Live coding interview rounds
- 📄 Resume Upload & ATS Analysis
- 🏢 Company-specific interview preparation
- 📈 Performance Analytics Dashboard
- 🧠 AI-generated follow-up questions
- 🌙 Dark Mode
- 🌍 Multi-language support
- 📧 Email interview reports
- 🔔 Interview reminders and notifications

---

# 🤝 Contributing

Contributions are always welcome!

### Fork the repository

```bash
git fork
```

### Create a new branch

```bash
git checkout -b feature-name
```

### Commit your changes

```bash
git commit -m "Add new feature"
```

### Push your branch

```bash
git push origin feature-name
```

Finally, open a Pull Request.

---



# 👨‍💻 Author

**Madhur Agrawal**

💼 LinkedIn: https://www.linkedin.com/in/madhur-agrawal-23b798378/

🐙 GitHub: https://github.com/Madhur-Agrawal-1707

📧 Email: agrawalmadhur699@gmail.com

---

# ⭐ Support

If you found this project useful or learned something from it, please consider giving it a ⭐ on GitHub. Your support motivates me to build more open-source projects!

Happy Coding! 🚀
