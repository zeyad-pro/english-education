"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    parentPhone: "",
    grade: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }
    console.log("User Data:", form);
  };

  return (
    <div className="min-h-screen p-20 border-b flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors ">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          إنشاء حساب جديد
        </h1>

        {/* الاسم */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            الاسم الكامل
          </label>
          <input
            type="text"
            name="name"
            placeholder="ادخل اسمك الكامل"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* البريد */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* رقم الهاتف */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            رقم الهاتف
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="ادخل رقم الهاتف"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* رقم ولي الأمر */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            رقم هاتف ولي الأمر
          </label>
          <input
            type="tel"
            name="parentPhone"
            placeholder="ادخل رقم ولي الأمر"
            value={form.parentPhone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* السنة الدراسية */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            السنة الدراسية
          </label>
          <select
            name="grade"
            value={form.grade}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">اختر السنة الدراسية</option>
            <option value="3prep">الصف الثالث الإعدادي</option>
            <option value="1sec">الصف الأول الثانوي</option>
            <option value="2sec">الصف الثاني الثانوي</option>
            <option value="3sec">الصف الثالث الثانوي</option>
          </select>
        </div>

        {/* كلمة المرور */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            كلمة المرور
          </label>
          <input
            type="password"
            name="password"
            placeholder="ادخل كلمة المرور"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* تأكيد كلمة المرور */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            تأكيد كلمة المرور
          </label>
          <input
            type="password"
            name="confirm"
            placeholder="اعد كتابة كلمة المرور"
            value={form.confirm}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* زر الإرسال */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-lg transition-colors"
        >
          إنشاء الحساب
        </button>

        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          عندك حساب؟{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            سجل الدخول
          </a>
        </p>
      </form>
    </div>
  );
}
