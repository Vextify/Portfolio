let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currentTime = new Date();

hrs = currentTime.getHours();
min = currentTime.getMinutes();
sec = currentTime.getSeconds();

if (hrs < 12) {
  const typed = new Typed(".multiple-text", {
    strings: [
      "Good Morning",
      "Buen día",
      "早上好",
      "सुप्रभात",
      "Bonjour",
      "صباح الخير",
      "সুপ্রভাত",
      "Доброе утро",
      "Bom dia",
      "Selamat pagi",
      "おはよう",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
} else if (hrs < 18) {
  const typed = new Typed(".multiple-text", {
    strings: [
      "Good Afternoon",
      "Buenas tardes",
      "下午好",
      "शुभ अपराह्न",
      "Bon après-midi",
      "مساء الخير",
      "শুভ অপরাহ্ন",
      "Добрый день",
      "Boa tarde",
      "Selamat siang",
      "こんにちは",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
} else {
  const typed = new Typed(".multiple-text", {
    strings: [
      "Good Evening",
      "Buenas Noches",
      "晚上好",
      "शुभ संध्या",
      "Bonsoir",
      "مساء الخير",
      "শুভ সন্ধ্যা",
      "Добрый вечер",
      "Boa noite",
      "Selamat malam",
      "こんばんは",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
}
