
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}
function Login() {
  return <h1>Login Page</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
