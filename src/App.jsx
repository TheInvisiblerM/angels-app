import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const AUTH_USERNAME = "admin";
const AUTH_PASSWORD = "1234";

function ProtectedRoute({ children }) {
  const isLogged = localStorage.getItem("logged") === "true";
  return isLogged ? children : <Navigate to="/" />;
}

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (user === AUTH_USERNAME && pass === AUTH_PASSWORD) {
      localStorage.setItem("logged", "true");
      window.location.href = "/dashboard";
    } else {
      setError("❌ بيانات غير صحيحة");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-4">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-4">تسجيل دخول المسؤول</h1>

          {error && <p className="text-center text-red-600 mb-2">{error}</p>}

          <div className="space-y-4">
            <input onChange={(e)=>setUser(e.target.value)} placeholder="اسم المستخدم" className="w-full p-3 border rounded-xl" />
            <input onChange={(e)=>setPass(e.target.value)} placeholder="كلمة المرور" type="password" className="w-full p-3 border rounded-xl" />
          </div>

          <Button className="w-full text-lg mt-6" onClick={handleLogin}>تسجيل الدخول</Button>
        </CardContent>
      </Card>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">لوحة التحكم</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4">
          <CardContent>
            <Link to="/attendance" className="text-xl block text-center font-semibold">📘 تسجيل الحضور والغياب</Link>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent>
            <Link to="/mass" className="text-xl block text-center font-semibold">⛪ تسجيل حضور القداس</Link>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent>
            <Link to="/children" className="text-xl block text-center font-semibold">👼 إدارة بيانات الأطفال</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Attendance() {
  return <h1>Attendance</h1>;
}
function Mass() { return <h1>Mass</h1>; }
function Children() { return <h1>Children</h1>; }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
        <Route path="/mass" element={<ProtectedRoute><Mass /></ProtectedRoute>} />
        <Route path="/children" element={<ProtectedRoute><Children /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}
