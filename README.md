# Todo Application

A simple todo application built using React, Redux, and React Router on the frontend, and Node.js with Express and MongoDB on the backend. The application allows users to create, read, update, and delete todos with the option to upload attachments to Cloudinary.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
  - [Running the Backend Server](#running-the-backend-server)
  - [Running the Frontend Server](#running-the-frontend-server)
- [API Endpoints](#api-endpoints)
- [Features](#features)
  - [Frontend Features](#frontend-features)
  - [Backend Features](#backend-features)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Contact](#contact)

---

## Getting Started

To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/Shakilofficial/todo-app.git
cd todo-app
```

---

## Project Structure

```plaintext
todo-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── index.js
│   ├── .vercel/
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── main.jsx
│   │   └── App.jsx
│   ├── .vercel/
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## Running the Application

### Running the Backend Server

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on port 3000, accessible at [http://localhost:3000](http://localhost:3000).

### Running the Frontend Server

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at [http://localhost:5173](http://localhost:5173).

---

## API Endpoints

| Method | Endpoint     | Description                                           |
| ------ | ------------ | ----------------------------------------------------- |
| GET    | `/todos`     | Retrieve all todos                                    |
| GET    | `/todos/:id` | Retrieve a single todo by ID                          |
| POST   | `/todos`     | Create a new todo (supports file uploads)             |
| PUT    | `/todos/:id` | Update an existing todo by ID (supports file uploads) |

---

## Features

### Frontend Features

- **CRUD Operations**: Create, Read, Update, and Delete todos.
- **Redux Toolkit**: State management using Redux Toolkit.
- **Vite**: Fast development server and build tool.

### Backend Features

- **Express**: Web framework for Node.js.
- **MongoDB**: Database for storing todos.
- **Cloudinary**: Service for storing and serving uploaded files.
- **Mongoose**: ODM for MongoDB.

---

## Environment Variables

Ensure you have a `.env` file in the backend directory with the following variables:

```plaintext
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_URL=your_cloudinary_api_url
```

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or collaboration, please contact me via:

- **Email**: [mrshakilhossain@outlook.com](mailto:mrshakilhossain@outlook.com)
- **LinkedIn**: [https://www.linkedin.com/in/your-profile](https://www.linkedin.com/in/your-profile)

- **Facebook**: [https://www.facebook.com/iamshakilhossain](https://www.facebook.com/iamshakilhossain)
- **Portfolio**: [https://shakilhossain-sigma.vercel.app](https://shakilhossain-sigma.vercel.app)

---

MIT © Md Shakil Hossain
