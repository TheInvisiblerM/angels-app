import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Simple Auth ---
const AUTH_USERNAME = "admin";
const AUTH_PASSWORD = "1234";

function ProtectedRoute({ children }) {
  const isLogged = localStorage.getItem("logged") === "true";
  return isLogged ? children : <Navigate to="/" />;
}

// --- Login Page ---
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-red-100 p-4 bg-[url('/church-bg.jpg')] bg-cover bg-center bg-fixed">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl p-2 backdrop-blur-lg bg-white/80">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-4 text-red-900">ملائكة كنيسة السيدة العذراء – محرم بك</h1>
          <h2 className="text-lg font-semibold text-center mb-6 text-gray-700">تسجيل دخول المسؤول</h2>

          {error && <p className="text-center text-red-600 mb-2">{error}</p>}

          <div className="space-y-4">
            <input onChange={(e)=>setUser(e.target.value)} placeholder="اسم المستخدم" className="w-full p-3 border rounded-xl" />
            <input onChange={(e)=>setPass(e.target.value)} placeholder="كلمة المرور" type="password" className="w-full p-3 border rounded-xl" />
          </div>

          <Button className="w-full text-lg mt-6 rounded-xl" onClick={handleLogin}>تسجيل الدخول</Button>
        </CardContent>
      </Card>
    </div>
  );
}

// --- Dashboard ---
function Dashboard() {
  return (
    <div className="min-h-screen bg-[url('/church-bg.jpg')] bg-cover bg-center p-6 space-y-6 backdrop-blur-md bg-white/60">
      <h1 className="text-4xl font-bold text-center text-red-900">لوحة التحكم</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-md bg-white/80 transition">
          <CardContent>
            <Link to="/attendance" className="text-xl block text-center font-semibold">📘 تسجيل الحضور والغياب</Link>
          </CardContent>
        </Card>

        <Card className="p-4 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-md bg-white/80 transition">
          <CardContent>
            <Link to="/mass" className="text-xl block text-center font-semibold">⛪ تسجيل حضور القداس</Link>
          </CardContent>
        </Card>

        <Card className="p-4 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-md bg-white/80 transition">
          <CardContent>
            <Link to="/children" className="text-xl block text-center font-semibold">👼 إدارة بيانات الأطفال</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// --- Attendance Page ---
function Attendance() {
  return (
    <div className="min-h-screen p-6 bg-[url('/church-bg.jpg')] bg-cover bg-center bg-fixed">
      <div className="backdrop-blur-md bg-white/80 p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-900">📘 حضور و غياب – ملائكة كنيسة السيدة العذراء محرم بك</h1>
        <table className="w-full border shadow rounded-xl overflow-hidden text-center">
          <thead className="bg-red-800 text-white text-lg">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">اسم الطفل</th>
              <th className="p-3">الحضور</th>
              <th className="p-3">الغياب</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100 text-lg">
              <td className="p-3">1</td>
              <td className="p-3">—</td>
              <td className="p-3"><input type="checkbox" /></td>
              <td className="p-3"><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Mass Attendance Page ---
function Mass() {
  return (
    <div className="min-h-screen p-6 bg-[url('/church-bg.jpg')] bg-cover bg-center bg-fixed">
      <div className="backdrop-blur-lg bg-white/80 p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-900">⛪ تسجيل حضور القداس</h1>
        <p className="text-gray-700 text-center">إدارة حضور القداسات لكل طفل.</p>
      </div>
    </div>
  );
}

// --- Children Management Page ---
function Children() {
  return (
    <div className="min-h-screen p-6 bg-[url('/church-bg.jpg')] bg-cover bg-center bg-fixed">
      <div className="backdrop-blur-lg bg-white/80 p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-900">👼 إدارة بيانات الأطفال</h1>
        <p className="text-gray-700 text-center">إضافة – تعديل – حذف بيانات أطفال الخدمة.</p>
      </div>
    </div>
  );
}

// --- App Router ---
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
