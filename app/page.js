import { Cairo } from "next/font/google";
import Theme from "./hooks/theme";
import AnimatedText from "./hooks/textAnimation";
import FadeInWhenVisible from "./hooks/FadeInWhenVisible";

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
    link: "/grades/g3x",
  },
  {
    src: "/G1.c5860e607c5295a14eaf.jpg",
    type: "ثانوي",
    grade: "أولى ثانوي",
    description: "مناهج متكاملة للصف الأول الثانوي",
    link: "/grades/g1",
  },
  {
    src: "/G2.977df1ddc92a055cca40.jpg",
    type: "ثانوي",
    grade: "تانية ثانوي",
    description: "برامج تعليمية متطورة للصف الثاني الثانوي",
    link: "/grades/g2",
  },
  {
    src: "/G3.c19c0badc0bfafccea58.jpg",
    type: "ثانوي",
    grade: "تالتة ثانوي",
    description: "استعداد شامل للامتحانات النهائية",
    link: "/grades/g3",
  },
];
const books = [
  {
    src: "/G1.e545c36d60961104e8bc.jpg",
    type: "ثانوي",
    grade: "أولى ثانوي",
    description: "مرجع شامل للصف الأول الثانوي",
    link: "/books/g1",
  },
  {
    src: "/G2.3f10a6fec89c365ed67b.jpg",
    type: "ثانوي",
    grade: "تانية ثانوي",
    description: "مرجع شامل للصف الأول الثانوي",
    link: "/books/g2",
  },
  {
    src: "/G3.7fd0caf831f20827f054.jpg",
    type: "ثانوي",
    grade: "تالتة ثانوي",
    description: "دليل متكامل للصف الثاني الثانوي",
    link: "/books/g3",
  },
];
const topPeople = [
  { name: "محمد أحمد", grade: "الصف الثالث الثانوي", score: 90, arrange: 1 },
  { name: "سارة محمود", grade: "الصف الأول الثانوي", score: 85, arrange: 2 },
  { name: "كريم إبراهيم", grade: "الصف الثاني الثانوي", score: 80, arrange: 3 },
];

const about2 = [
  {
    icon: "/about.png",
    title: "عن م. محمد سعيد",
    description:
      "منصة تعليمية متكاملة لدعم طلاب المرحلة الثانوية في تعلم اللغة الإنجليزية",
  },
  {
    icon: "/book.png",
    title: "حل الكتب الخارجية",
    description: "دليل شامل لحل التمارين والكتب الدراسية بطريقة سهلة وواضحة",
  },
  {
    icon: "/communication.png",
    title: "مراجعة على طول",
    description: "جلسات مراجعة مستمرة لضمان استيعاب المادة العلمية بشكل كامل",
  },
  {
    icon: "/celebration.png",
    title: "تشجيع وهدايا",
    description: "برنامج حوافز متكامل لتحفيز الطلاب وتشجيعهم على التميز",
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
        className="bg-white dark:bg-gray-900 lg:grid lg:min-h-screen lg:place-content-center transition-colors"
      >
        <div className="mx-auto w-screen max-w-7xl px-4 sm:px-6 flex-2 py-18 flex flex-col-reverse md:flex-row  md:items-center md:gap-4 lg:px-8">
          <div className="max-w-prose text-right">
              <h1 className="text-4xl flex font-bold text-gray-900 dark:text-white sm:text-5xl space-x-1">
            <AnimatedText className="flex space-y-5 gap-5">
                منصة
                <strong className="text-orange-500 "> م. محمد سعيد </strong>
                لتعلم الانجليزيه
            </AnimatedText>
              </h1>
            <p className="mt-4 text-base text-pretty text-gray-700 dark:text-gray-300 sm:text-lg/relaxed">
          
          <AnimatedText delay={1.5}>
                  سواء كنت أولى أو تانية أو تالتة ثانوي وحاسس إن الإنجليزي صعب… هنا
                  على منصة م. محمد سعيد وفريق الدعم العلمي والفني هتلاقي الحل…
          </AnimatedText>

            </p>
            <div className="mt-4 space-x-5 gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-orange-500 bg-orange-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-orange-400"
                href="/login"
              >
                سجل معانا
              </a>

              <a
                className="inline-block rounded border border-gray-400 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="/register"
              >
                انضم لعيلة م. محمد سعيد
              </a>
            </div>
          </div>
          <img
            className="mx-auto w-sm md:max-w-md md:translate-x-10 mb-4 md:mb-0 text-gray-900 dark:text-white md:block"
            src="/mohamedsaid.fd94cf399c9e02ca2a46.png"
            alt="Teacher"
          />
        </div>
      </section>

      {/* ليه تنضم لعيتنا  */}
      <div className="flex flex-col w-full justify-center items-center space-y-12 text-black dark:text-white transition-colors">
        <div className="space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-300 text-center">
            ليه تختار منصة م. محمد سعيد؟
          </h1>
          <h1 className="text-xl text-gray-700 dark:text-gray-300 text-center">
            نقدم تجربة تعليمية فريدة ومتكاملة
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 px-5">
          {start.map((item, index) => {
            return (
              <div
                key={index}
                className="p-5 bg-blue-500 dark:bg-blue-900 rounded-lg space-y-2 text-white min-h-50 flex justify-center items-end flex-col transition-colors"
              >
                <img src={item.icon} className="h-8" alt="icon" />
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <h3 className="text-gray-100 dark:text-gray-300">
                  {item.description}
                </h3>
                {/* <button className="p-2 mt-2 rounded-lg text-sm">
                  ‹ اكتشف المزيد
                </button> */}
              </div>
            );
          })}
        </div>
      </div>

      {/* grades */}
      <div
        id="grades"
        className="flex flex-col w-full justify-center items-center space-y-12 text-black dark:text-white transition-colors"
      >
        <div className="space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold main-text-color ">
            جميع السنوات الدراسية
          </h1>
          <h1 className="text-xl text-gray-700 dark:text-gray-300">
            اختر المرحلة الدراسية المناسبة لك{" "}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-10 px-5 flex-wrap">
          {grades.map((item, index) => {
            return (
              <div
                key={index}
                className="border-gray-900 dark:border-gray-100 border space-y-2 text-black dark:text-white min-h-50 flex justify-center items-center flex-col transition-colors"
              >
                <img src={item.src} alt="img" className="h-50" />
                <span className=" p-3 font-bold text-right w-full text-sm">
                  {item.type}
                </span>
                <div className="p-3 text-center space-y-2">
                  <h1 className="text-2xl font-bold">{item.grade}</h1>
                  <h3 className="">{item.description}</h3>
                  <a href={item.link} className="p-2 mt-2 rounded-lg text-sm">
                    ‹ اكتشف المزيد
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Books */}
      <div
        id="books"
        className="flex flex-col w-full justify-center items-center space-y-12 text-black dark:text-white transition-colors"
      >
        <div className="space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-fuchsia-600 ">
            الكتب الدراسية
          </h1>
          <h1 className="text-xl text-gray-700 dark:text-gray-300">
            اختر المرحلة الدراسية المناسبة لك{" "}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-10 px-5 flex-wrap">
          {books.map((item, index) => {
            return (
              <div
                key={index}
                className="border-gray-900 dark:border-gray-100 border space-y-2 text-black dark:text-white min-h-50 flex justify-center items-center flex-col transition-colors"
              >
                <img src={item.src} alt="img" className="max-h-80" />
                <span className=" p-3 font-bold text-right w-full text-sm">
                  {item.type}
                </span>
                <div className="p-3 text-center space-y-2">
                  <h1 className="text-2xl font-bold">{item.grade}</h1>
                  <h3 className="">{item.description}</h3>
                  <a href={item.link} className="p-2 mt-2 rounded-lg text-sm">
                    ‹ اكتشف المزيد
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* top people */}
      <section className="flex flex-col w-full justify-center items-center space-y-12 text-black dark:text-white transition-colors px-4 mb-16">
        <div className="space-y-5 flex flex-col justify-center items-center text-center">
          <h1
            id="toppeople"
            className="text-3xl md:text-4xl font-bold text-amber-400"
          >
            🏆 لوحة الشرف 🏆
          </h1>
          <h1 className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            أفضل الطلاب الذين تألقوا في رحلة التعلم
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8 md:pr-5">
          <img
            src="/Marketing-Target--Streamline-Bangalore.svg"
            alt=""
            className="w-full md:w-[65%] h-60 md:h-110  rounded bg-gray-200"
          />
          <div className="w-full md:w-[30%] space-y-4">
            {topPeople.map((item, index) => (
              <div
                key={index}
                className={`border ${
                  item.arrange === 1
                    ? "border-amber-400 text-amber-400"
                    : item.arrange === 2
                    ? "border-blue-400 text-blue-400"
                    : item.arrange === 3
                    ? "border-green-400 text-green-400"
                    : ""
                } p-3 rounded-sm flex flex-col justify-center items-end space-y-3 w-full`}
              >
                <p className="flex gap-1 text-lg md:text-2xl">
                  <span>على المنصة</span>
                  {item.arrange === 1
                    ? " الأول"
                    : item.arrange === 2
                    ? " الثاني"
                    : item.arrange === 3
                    ? " الثالث"
                    : ""}
                </p>
                <div className="w-full">
                  <h3 className="border-b-2 w-full text-2xl md:text-3xl font-bold">
                    {item.score}
                  </h3>
                  <h1 className="font-bold w-full text-end">
                    {item.name} في {item.grade}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* code section */}
      <section className="border-2 flex flex-col space-y-5 justify-center items-center text-blue-500 px-4 md:px-10 py-10 mx-4 md:mx-20 rounded-lg text-center">
        <h1 className="text-2xl md:text-4xl font-bold">معاك كود المحاضرة؟</h1>
        <h1 className="text-lg md:text-xl">
          أدخل كود المحاضرة للوصول إلى المحتوى التعليمي الخاص بك
        </h1>

        <div className="w-full md:w-[50%] flex flex-col md:flex-row justify-center items-center gap-3">
          <input
            type="text"
            placeholder="كود المحاضرة"
            className="border-2 p-3 text-lg md:text-xl rounded-sm w-full text-end focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-3 text-lg md:text-xl border-blue-500 border-2 rounded-sm bg-blue-500 text-white w-full md:w-auto">
            دخول
          </button>
        </div>

        <h2 className="text-gray-800 dark:text-gray-300 text-sm md:text-base">
          تأكد من إدخال الكود الصحيح للوصول إلى المحتوى
        </h2>
      </section>

      {/*about 2*/}
      <div className="flex mb-10 flex-col w-full justify-center items-center space-y-12 text-black dark:text-white transition-colors md:px-4">
        <div className="space-y-5 flex flex-col justify-center items-center text-center">
          <h1
            id="toppeople"
            className="text-3xl md:text-4xl font-bold text-amber-400"
          >
            📘 عن المنصة 📘
          </h1>
          <h1 className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            تعرف أكثر على مميزات منصتنا التعليمية
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5">
          <img
            src="/msaid.7cd5319d49a628447d00.png"
            alt=""
            className="w-full md:w-[45%] bg-gray-200 rounded"
          />
          <div className="w-full md:w-[48%] h-full gap-6 flex flex-wrap justify-center">
            {about2.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-sm flex flex-col justify-center items-end space-y-3 w-full md:w-[48%] border border-gray-300 dark:border-gray-600"
              >
                <img src={item.icon} alt="text" className="h-8" />
                <h1 className="text-lg md:text-xl font-bold">{item.title}</h1>
                <p className="text-end text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
