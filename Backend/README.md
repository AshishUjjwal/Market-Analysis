# Market Analysis Project

## 🚀 Live Deployment
The project is live and accessible here: [Market Analysis - Live Demo](https://market-analysis-lovat.vercel.app/)

---

## 📖 Project Overview
The **Market Analysis** project is a simple cryptocurrency tracking and analysis web application. It allows users to fetch the latest market data for popular cryptocurrencies such as Bitcoin, Ethereum, and Matic Network. The application provides users with real-time cryptocurrency statistics via a clean and interactive interface, powered by RESTful APIs.

### ✨ Features

- **Real-Time Cryptocurrency Data**: Track the latest prices, market caps, and 24-hour percentage changes.
- **Deviation Analysis**: Calculate the price deviation (percentage change) for a specific cryptocurrency compared to its previous value.
- **API-Based Data Fetching**: The project integrates with the **CoinGecko API** to ensure accurate and up-to-date information.
- **Express.js Backend**: Built using **Express.js** for creating robust and scalable RESTful APIs.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose for object modeling)
- **External API**: CoinGecko API
- **Hosting**: Vercel

---

## 📚 API Details
The project uses the **CoinGecko API** to fetch cryptocurrency market data. The API provides information like:

- Current price
- Market capitalization
- 24-hour price change percentage

### Example API Usage:
```javascript
const { COINGECKO_API_BASE } = process.env;

const response = await axios.get(`${COINGECKO_API_BASE}/coins/markets`, {
  params: {
    vs_currency: 'usd',
    ids: 'bitcoin,ethereum,matic-network',
  },
  headers: {
    'x-cg-demo-api-key': 'YOUR_API_KEY',
  },
});
```
For more details, refer to the [CoinGecko API Documentation](https://www.coingecko.com/en/api/documentation).

---

## 🔥 Routes Overview

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

## 🖥️ Deployment Details
The application is hosted on **Vercel**, providing a fast and reliable deployment with a serverless architecture. Access the live project here: [Market Analysis - Live Demo](https://market-analysis-lovat.vercel.app/)

---

## 📑 How to Run the Project Locally

### Prerequisites
- **Node.js** and **npm** installed.
- A **MongoDB** instance running locally or an online database.

### Steps
1. **Clone the repository**:
```bash
git clone https://github.com/your-username/market-analysis.git
cd market-analysis
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
Create a `.env` file in the root directory with the following details:
```env
COINGECKO_API_BASE=https://api.coingecko.com/api/v3/
MONGODB_URI=your_mongodb_connection_uri
DB_NAME=your_database_name
```

4. **Start the server**:
```bash
npm start
```

5. **Access the application**:
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🛡️ Security and Best Practices

- **Environment Variables**: Sensitive data such as API keys and database URIs are stored in `.env` files.
- **Error Handling**: Implements graceful error handling for failed API calls and database operations.
- **Validation**: Ensures valid input for all routes and query parameters.

---

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or fixes.

---

## 🧑‍💻 Author
- **Ashish Ujjwal**  
  - GitHub: [AshishUjjwal](https://github.com/AshishUjjwal)
