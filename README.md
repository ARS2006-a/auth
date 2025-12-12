# Firebase Authentication with Zustand State Management

A complete authentication system built with Next.js, Firebase Authentication, and Zustand for state management.

## 🚀 Live Demo

**🔗 [View Live Website](YOUR_VERCEL_URL_HERE)**

## 📋 Features

- ✅ **Firebase Email/Password Authentication**
- ✅ **Login Page** - User sign in functionality
- ✅ **Signup Page** - User registration functionality  
- ✅ **Dashboard Page** - Protected user dashboard
- ✅ **Todo Manager Page** - Full CRUD todo application
- ✅ **Zustand State Management** - Global state for auth and todos
- ✅ **Protected Routes** - Authentication guards
- ✅ **Persistent State** - Data persists across sessions
- ✅ **Responsive Design** - Works on all devices

## 🛠️ Technologies Used

- **Next.js 16** - React framework
- **Firebase Authentication** - User authentication
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **React** - UI library

## 📁 Project Structure

```
auth2/
├── app/
│   ├── signin/
│   │   └── page.js          # Login page
│   ├── signup/
│   │   └── page.js          # Registration page
│   ├── dashboard/
│   │   └── page.js          # User dashboard
│   ├── todo/
│   │   └── page.js          # Todo manager
│   ├── profile/
│   │   └── page.js          # User profile
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── stores/
│   ├── authStore.js         # Authentication state
│   └── todoStore.js         # Todo state management
├── firebase.js              # Firebase configuration
└── package.json
```

## 🚀 Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd auth2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## 📱 Pages Overview

### 🔐 Authentication Pages
- **Sign Up** (`/signup`) - User registration
- **Sign In** (`/signin`) - User login

### 🏠 Protected Pages
- **Dashboard** (`/dashboard`) - User overview with todo stats
- **Todo Manager** (`/todo`) - Full CRUD todo application

## 🗃️ State Management

### Auth Store - User authentication state
### Todo Store - Todo management with persistence

## 👨💻 Author

**ARS2006**
- GitHub: [@ARS2006-a](https://github.com/ARS2006-a)

---

⭐ **Complete Firebase Authentication + Zustand + Todo Manager** ⭐