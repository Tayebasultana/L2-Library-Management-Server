# 📚 Library Management API

A simple RESTful API for managing a library system built using **Express.js**, **TypeScript**, and **MongoDB** (with Mongoose).

---

## 🚀 Features

- 📖 Create, read, update, delete books
- 🔍 Filter & sort books by genre or date
- 📦 Borrow books (availability managed automatically)
- 📊 Aggregated summary of borrowed books (using MongoDB pipeline)
- ⚙️ Mongoose validation, middleware, static/instance method support
- 🛡️ Well-structured error handling and response format

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **REST API**

---

## 🔗 Live API

🌐 Deployed on: `https://your-deployment-url.com`  
🎥 Video Explanation: [Watch Demo](https://your-video-link.com)

---

## 📂 Project Structure

```
src/
├── server.ts
├── config/
├── modules/
│ ├── book/
│ │ ├── book.interface.ts
│ │ ├── book.model.ts
│ │ ├── book.controller.ts
│ │ └── book.route.ts
│ └── borrow/
│ ├── borrow.model.ts
│ ├── borrow.controller.ts
│ └── borrow.route.ts
```


---

## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/library-management-api.git
cd library-management-api

# Install dependencies
npm install

# Create environment file
touch .env
```
## Add your MongoDB URI in .env:
```
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/library
PORT=5000
```
## Now run the server:
```
# For development
npm run dev

# For production
npm run build
npm start
```
## ✅ Bonus Features
- Mongoose validation

- Aggregation pipeline

- Filtering & sorting

- Static/Instance method

- Mongoose middleware

- Clean API response structure

