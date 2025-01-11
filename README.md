# Market Analysis Project

## 🚀 Live Deployment
The project is live and accessible here: [Market Analysis - Live Demo](https://market-analysis-lovat.vercel.app/)

---

## 📖 Project Overview
The **Market Analysis** project is a full-stack cryptocurrency tracking and analysis web application. It provides users with real-time data about popular cryptocurrencies like Bitcoin, Ethereum, and Matic Network. This project includes both frontend and backend components to ensure a smooth and user-friendly experience for fetching and analyzing market data.

### ✨ Features

- **Real-Time Cryptocurrency Data**: Track live prices, market capitalization, and 24-hour percentage changes.
- **Deviation Analysis**: Calculate the price deviation (percentage change) for any cryptocurrency.
- **Frontend Interface**: Clean and interactive UI built with React.js for seamless user experience.
- **API Integration**: Fetch real-time data using the **CoinGecko API**.
- **Backend APIs**: Robust RESTful APIs built with Express.js to handle data fetching and calculations.

---

## 🛠️ Tech Stack

### Frontend:
- **React.js**: For building an interactive and responsive user interface.
- **CSS/Bootstrap**: For styling and layout.

### Backend:
- **Node.js**: For server-side scripting.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: For database storage, with Mongoose for object modeling.

### External API:
- **CoinGecko API**: For fetching real-time cryptocurrency market data.

### Hosting:
- **Frontend**: Deployed on Vercel.
- **Backend**: Deployed on Vercel (serverless architecture).

---

## 📚 API Details
The project integrates with the **CoinGecko API** to fetch up-to-date cryptocurrency market data. The backend exposes the following endpoints:

### 1. `/stats`
- **Description**: Fetch the latest statistics for a specific cryptocurrency.
- **Method**: `GET`
- **Query Parameters**:
  - `coin`: Name of the cryptocurrency (e.g., bitcoin, ethereum, matic-network).
- **Response Example**:
```json
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
```

### 2. `/deviation/:coin`
- **Description**: Calculate and return the price deviation for a specific cryptocurrency.
- **Method**: `GET`
- **Path Parameters**:
  - `coin`: Name of the cryptocurrency.
- **Response Example**:
```json
{
  "currentPrice": 40000,
  "previousPrice": 35000,
  "deviation": "14.29"
}
```

---

## 📑 How to Run the Project Locally

### Prerequisites
- **Node.js** and **npm** installed.
- A **MongoDB** instance running locally or an online database.

### Steps

#### Clone the repository
```bash
git clone https://github.com/your-username/market-analysis.git
cd market-analysis
```

#### Install dependencies for both frontend and backend
```bash
npm install
cd client
npm install
cd ..
```

#### Set up environment variables
Create a `.env` file in the root directory with the following details:
```env
COINGECKO_API_BASE=https://api.coingecko.com/api/v3/
MONGODB_URI=your_mongodb_connection_uri
DB_NAME=your_database_name
```

#### Start the development servers
- Start the backend:
```bash
npm start
```
- Start the frontend:
```bash
cd client
npm start
```

#### Access the application
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🛡️ Security and Best Practices

- **Environment Variables**: All sensitive information like API keys and database URIs are stored in `.env` files.
- **Error Handling**: Proper error handling mechanisms are implemented for failed API calls and database operations.
- **Validation**: Ensures valid input for all API endpoints.

---

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or fixes.

---

## 🧑‍💻 Author
- **Ashish Ujjwal**  
  - GitHub: [AshishUjjwal](https://github.com/AshishUjjwal)
