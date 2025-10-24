import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400"],
});

const start = [
  {
    icon: "/idea-exchange.png",
    title: "تعلم تفاعلي",
    description: "محتوى تعليمي مبتكر يجذب الطلاب",
  },
  {
    icon: "/support.png",
    title: "دعم مستمر",
    description: "فريق دعم متخصص متاح على مدار الساعة",
  },
  {
    icon: "/content.png",
    title: "محتوى شامل",
    description: "مناهج متكاملة تغطي جميع المستويات",
  },
  {
    icon: "/result.png",
    title: "نتائج مضمونة",
    description: "استراتيجيات تعليمية مثبتة لتحسين الأداء",
  },
];

const grades = [
  {
    src: "/G0.720e420619c64ae59e3b.jpg",
    type: "إعدادي",
    grade: "الصف الثالث الإعدادي",
    description: "محتوى مصمم خصيصًا للمرحلة الإعدادية",
  },
  {
    src: "/G1.c5860e607c5295a14eaf.jpg",
    type: "ثانوي",
    grade: "أولى ثانوي",
    description: "مناهج متكاملة للصف الأول الثانوي",
  },
  {
    src: "/G2.977df1ddc92a055cca40.jpg",
    type: "ثانوي",
    grade: "تانية ثانوي",
    description: "برامج تعليمية متطورة للصف الثاني الثانوي",
  },
  {
    src: "/G3.c19c0badc0bfafccea58.jpg",
    type: "ثانوي",
    grade: "تالتة ثانوي",
    description: "استعداد شامل للامتحانات النهائية",
  },
];
const books = [
  {
    src: "/G1.e545c36d60961104e8bc.jpg",
    type: "ثانوي",
    grade: "أولى ثانوي",
    description: "مرجع شامل للصف الأول الثانوي",
  },
  {
    src: "/G2.3f10a6fec89c365ed67b.jpg",
    type: "ثانوي",
    grade: "تانية ثانوي",
    description: "مرجع شامل للصف الأول الثانوي",
  },
  {
    src: "/G3.7fd0caf831f20827f054.jpg",
    type: "ثانوي",
    grade: "تالتة ثانوي",
    description: "دليل متكامل للصف الثاني الثانوي",
  },
];

export default function Home() {
  return (
    <div className={`main-text-color ${cairo.className} space-y-30`}>
      <a
        className="inline-block rounded-full bg-orange-500 p-1 text-white shadow-sm transition hover:bg-orange-400 fixed -bottom-23 right-10 z-100 sm:p-3 lg:p-4"
        href="#hero"
      >
        <span className="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      {/* hero */}
      <section
        id="hero"
        className="bg-white lg:grid lg:min-h-screen lg:place-content-center"
      >
        <div
          className="mx-auto w-screen max-w-7xl px-4 sm:px-6
        flex-2
         py-14   flex 
       flex-col-reverse
       md:flex-row  md:items-center
         md:gap-4 lg:px-8 "
        >
          <div className="max-w-prose text-right">
            <h1 className="text-4xl  font-bold text-gray-900 sm:text-5xl">
              منصة
              <strong className="text-orange-500"> م. محمد سعيد </strong>
              لتعلم الانجليزيه
            </h1>
            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              سواء كنت أولى أو تانية أو تالتة ثانوي وحاسس إن الإنجليزي صعب… هنا
              على منصة م. محمد سعيد وفريق الدعم العلمي والفني هتلاقي الحل…
            </p>
            <div className="mt-4 space-x-5 gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-orange-500 bg-orange-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-orange-400"
                href="#"
              >
                سجل معانا
              </a>

              <a
                className="inline-block rounded border border-gray-400 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                انضم لعيلة م. محمد سعيد
              </a>
            </div>
          </div>
          <img
            className="mx-auto flex-1 max-w-md md:translate-x-10 mb-4 md:mb-0 text-gray-900 md:block"
            src="/mohamedsaid.fd94cf399c9e02ca2a46.png"
            alt="Teacher"
          />{" "}
        </div>
      </section>

      {/* ليه تنضم لعيتنا  */}
      <div className="flex flex-col w-full justify-center items-center space-y-12 text-black">
        <div className="space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold main-text-color text-center">
            ليه تختار منصة م. محمد سعيد؟
          </h1>
          <h1 className="text-xl text-gray-700 text-center">
            نقدم تجربة تعليمية فريدة ومتكاملة
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 px-5">
          {start.map((item, index) => {
            return (
              <div
                key={index}
                className="p-5 bg-blue-500  rounded-lg space-y-2  text-white min-h-50 flex justify-center items-end flex-col"
              >
                <img src={item.icon} className="h-8" alt="icon" />
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <h3 className="text-gray-100">{item.description}</h3>
                <button className="p-2 mt-2 rounded-lg text-sm">
                  ‹ اكتشف المزيد
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* grades */}
      <div
        id="grades"
        className="flex flex-col w-full justify-center items-center space-y-12 text-black"
      >
        <div className="space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold main-text-color ">
            جميع السنوات الدراسية
          </h1>
          <h1 className="text-xl text-gray-700">
            اختر المرحلة الدراسية المناسبة لك{" "}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-10 px-5 flex-wrap">
          {grades.map((item, index) => {
            return (
              <div
                key={index}
                className={` border-gray-900 border space-y-2 
                   text-black min-h-50 flex 
                   justify-center items-center 
                   #{}
                   flex-col`}
              >
                <img src={item.src} alt="img" className="h-50" />
                <span className=" p-3 font-bold text-right w-full text-sm">
                  {item.type}
                </span>
                <div className="p-3 text-center space-y-2">
                  <h1 className="text-2xl font-bold">{item.grade}</h1>
                  <h3 className="">{item.description}</h3>
                  <button className="p-2 mt-2 rounded-lg text-sm">
                    ‹ اكتشف المزيد
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Books */}
      <div
        id="books"
        className="flex flex-col w-full justify-center items-center space-y-12 text-black"
      >
        <div className="space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold main-text-color ">
            الكتب الدراسية
          </h1>
          <h1 className="text-xl text-gray-700">
            اختر المرحلة الدراسية المناسبة لك{" "}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-10 px-5 flex-wrap">
          {books.map((item, index) => {
            return (
              <div
                key={index}
                className={` border-gray-900 border space-y-2 
                   text-black min-h-50 flex 
                   justify-center items-center 
                   #{}
                   flex-col`}
              >
                <img src={item.src} alt="img" className="max-h-80" />
                <span className=" p-3 font-bold text-right w-full text-sm">
                  {item.type}
                </span>
                <div className="p-3 text-center space-y-2">
                  <h1 className="text-2xl font-bold">{item.grade}</h1>
                  <h3 className="">{item.description}</h3>
                  <button className="p-2 mt-2 rounded-lg text-sm">
                    ‹ اكتشف المزيد
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
