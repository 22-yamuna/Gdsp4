import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Home Component
function Home() {
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("debit");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Expense Added:\nDate: ${date}\nPurpose: ${purpose}\nCategory: ${category}\nAmount: ${amount}\nType: ${type}`);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Tracker</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/auth">Login/Signup</Link>
          <button className="logout-button">Logout</button>
        </div>
      </nav>
      <div className="home-container">
        <h2 className="title">Expense Tracker</h2>
        <form className="expense-form" onSubmit={handleSubmit}>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <label>Purpose:</label>
          <input type="text" placeholder="Enter purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} required />

          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Stationary">Stationary</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>

          <label>Amount:</label>
          <input type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />

          <label>Type:</label>
          <div className="radio-group">
            <input type="radio" id="debit" name="type" value="debit" checked={type === "debit"} onChange={() => setType("debit")} />
            <label htmlFor="debit">Debit</label>

            <input type="radio" id="credit" name="type" value="credit" checked={type === "credit"} onChange={() => setType("credit")} />
            <label htmlFor="credit">Credit</label>
          </div>

          <button type="submit">Add Expense</button>
        </form>
      </div>
    </>
  );
}

// AuthPage Component
function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          {isLogin ? "Login" : "Register"}
        </h2>

        {!isLogin && (
          <input type="text" placeholder="Full Name" className="auth-input" />
        )}

        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />

        {!isLogin && (
          <input type="password" placeholder="Confirm Password" className="auth-input" />
        )}

        <button className="auth-button">
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="auth-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            className="auth-link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}