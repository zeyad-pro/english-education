"use client";
import { useState } from "react";

export default function ParentCheckPage() {
  const [form, setForm] = useState({
    parentPhone: "",
    studentPhone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Parent Phone:", form.parentPhone);
    console.log("Student Phone:", form.studentPhone);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          متابعة ولي الأمر
        </h1>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            رقم هاتف ولي الأمر
          </label>
          <input
            type="tel"
            name="parentPhone"
            value={form.parentPhone}
            onChange={handleChange}
            placeholder="أدخل رقم ولي الأمر"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            رقم هاتف الطالب
          </label>
          <input
            type="tel"
            name="studentPhone"
            value={form.studentPhone}
            onChange={handleChange}
            placeholder="أدخل رقم الطالب"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-lg transition-colors"
        >
          متابعة
        </button>

        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          الرجوع إلى{" "}
          <a href="/" className="text-orange-500 hover:underline">
            الصفحة الرئيسية
          </a>
        </p>
      </form>
    </div>
  );
}
