import React from "react";

function Grade() {
  return (
    <div className="min-h-screen gap-2 text-orange-500 space-y-10 flex justify-center flex-col items-center relative text-2xl">
      <h1 className="text-orange-500 text-4xl font-bold">
        كتب الصف الثالث الثانوي
      </h1>
      <div className="flex gap-3 text-gray-800">
        <img
          src="/3d-open-book-icon-education-reading-concept/3ad855a7-daa9-4d12-aec3-96207d7fd211-removebg-preview.png"
          alt="book"
          className="h-10"
        />{" "}
        لا يوجد محتوي بعد
      </div>
    </div>
  );
}

export default Grade;
