# Koinx Frontend Assignment

## 🚀 Live Deployment
The project is live and accessible here: [Koinx Frontend Assignment - Live Demo](https://koinx-frontend-assignment.vercel.app/)

---

## 📖 Project Overview
This project is a frontend web application designed to showcase cryptocurrency-related data using **TypeScript** and a robust architecture. It provides users with an intuitive interface to interact with data and explore features such as cryptocurrency statistics, interactive UI components, and efficient state management.

### ✨ Features

- **Cryptocurrency Statistics**: Displays real-time data, including prices, market capitalization, and percentage changes.
- **Interactive User Interface**: Built with a modern design to ensure smooth and intuitive navigation.
- **TypeScript Integration**: Ensures type safety and improves code quality, making the codebase easier to maintain.
- **State Management**: Efficient management of application state for a seamless user experience.
- **API Integration**: Fetches real-time data from external APIs to keep the application updated.
- **Responsive Design**: Fully responsive layout to provide an optimal user experience on all devices.

---

## 🛠️ Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: CSS/SCSS and Bootstrap (or Tailwind, if applicable)
- **State Management**: React Context API or Redux (depending on implementation)
- **API Calls**: Axios or Fetch API
- **Hosting**: Vercel

---

## 📚 Code Structure and In-Depth Knowledge

The project follows a clean and modular architecture to ensure scalability and maintainability.

### 1. **Project Structure**:
```plaintext
src/
├── components/      # Reusable UI components
├── pages/           # Application pages (e.g., Home, Dashboard)
├── hooks/           # Custom React hooks
├── utils/           # Utility functions and constants
├── services/        # API service calls
├── context/         # Context API for state management
├── types/           # TypeScript type definitions
├── styles/          # Global and component-specific styles
├── App.tsx          # Main application component
└── index.tsx        # Entry point
```

### 2. **Key Concepts and Code Details**:

#### a) **TypeScript for Type Safety**:
The application uses **TypeScript** to enforce type checking at compile time, reducing runtime errors. Example:
```typescript
type CryptoStats = {
  name: string;
  price: number;
  marketCap: number;
  percentageChange: number;
};

const cryptoData: CryptoStats = {
  name: 'Bitcoin',
  price: 40000,
  marketCap: 800000000,
  percentageChange: 3.5,
};
```

#### b) **State Management**:
The app uses Context API (or Redux, if implemented) for global state management. Example:
```typescript
import React, { createContext, useState, useContext } from 'react';

interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
```

#### c) **API Integration**:
Data is fetched from external APIs using Axios or Fetch API. Example:
```typescript
import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3/';

export const fetchCryptoData = async (ids: string[]): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}coins/markets`, {
      params: {
        vs_currency: 'usd',
        ids: ids.join(','),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    throw error;
  }
};
```

#### d) **Reusable Components**:
Reusable components like cards, modals, and buttons enhance maintainability. Example:
```typescript
interface CryptoCardProps {
  name: string;
  price: number;
  marketCap: number;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ name, price, marketCap }) => (
  <div className="crypto-card">
    <h3>{name}</h3>
    <p>Price: ${price}</p>
    <p>Market Cap: ${marketCap}</p>
  </div>
);

export default CryptoCard;
```

---

## 📑 How to Run the Project Locally

### Prerequisites
- Node.js and npm/yarn installed.

### Steps
1. **Clone the repository**:
```bash
git clone https://github.com/your-username/koinx-frontend-assignment.git
cd koinx-frontend-assignment
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```

4. **Access the application**:
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🛡️ Security and Best Practices

- **TypeScript**: Enforces strict type checks to catch errors during development.
- **Error Handling**: Graceful error handling for API calls and UI interactions.
- **Modular Code**: Clean separation of concerns for better maintainability.

---

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or fixes.

---

## 🧑‍💻 Author
- **Your Name**  
  GitHub: [AshishUjjwal](https://github.com/AshishUjjwal)
