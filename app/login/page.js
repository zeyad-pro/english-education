"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen border-b flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          تسجيل الدخول
        </h1>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            كلمة المرور
          </label>
          <input
            type="password"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-lg transition-colors"
        >
          تسجيل الدخول
        </button>

        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          ما عندكش حساب؟{" "}
          <a href="/register" className="text-orange-500 hover:underline">
            سجل الآن
          </a>
        </p>
      </form>
    </div>
  );
}
