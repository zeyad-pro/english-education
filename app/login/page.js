"use client";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 transition-all duration-500">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="اسم المستخدم"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isLogin ? "دخول" : "إنشاء حساب"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isLogin ? "ليس لديك حساب؟" : "لديك حساب بالفعل؟"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {isLogin ? "أنشئ حسابًا" : "سجل الدخول"}
          </button>
        </p>
      </div>
    </div>
  );
}
