const characters = {
  gumball: {
    name: "Gumball Watterson",
    image: "gumball.png",
    desc: "Sen enerjik, yaratıcı ve biraz da kaotik bir ruhsun. Aklına geleni yaparsın; bazen işler karışır ama ortamı renklendiren kişi kesinlikle sensin."
  },
  darwin: {
    name: "Darwin Watterson",
    image: "darwin.png",
    desc: "Sen iyi kalpli, sadık ve pozitif birisin. İnsanların yanında huzur bulduğu, tatlılığıyla ortamı yumuşatan karakter sensin."
  },
  anais: {
    name: "Anais Watterson",
    image: "anais.png",
    desc: "Sen zeki, mantıklı ve detaycısın. Olaylara herkes panikle bakarken sen çözüm planını çoktan çıkarmış olursun."
  },
  nicole: {
    name: "Nicole Watterson",
    image: "nicole.png",
    desc: "Sen güçlü, disiplinli ve sorumluluk sahibisin. Gerektiğinde liderliği alır, ortalığı toparlarsın. Kısaca sistem çökerse seni ararlar."
  },
  richard: {
    name: "Richard Watterson",
    image: "richard.png",
    desc: "Sen rahatına düşkün, eğlenceli ve hayatı çok ciddiye almayan birisin. Bazen tembellik yaparsın ama kalbin pamuk gibi."
  },
  penny: {
    name: "Penny Fitzgerald",
    image: "penny.png",
    desc: "Sen nazik, duygusal ve iç dünyası renkli birisin. Dışarıdan sakin görünsen de içinde kocaman bir evren taşıyorsun."
  }
};

const questions = [
  {
    q: "Boş zamanında en çok ne yaparsın?",
    a: [
      ["Saçma ama eğlenceli şeyler denerim", "gumball"],
      ["Arkadaşlarımla takılırım", "darwin"],
      ["Yeni bir şey öğrenirim", "anais"],
      ["Plan yapar işleri toparlarım", "nicole"]
    ]
  },
  {
    q: "Bir sorun çıkınca ilk tepkin ne olur?",
    a: [
      ["Doğaçlama çözerim", "gumball"],
      ["Sakinleştirmeye çalışırım", "darwin"],
      ["Mantıklı çözüm ararım", "anais"],
      ["Kontrolü elime alırım", "nicole"]
    ]
  },
  {
    q: "Seni en iyi anlatan kelime hangisi?",
    a: [
      ["Enerjik", "gumball"],
      ["Tatlı", "darwin"],
      ["Zeki", "anais"],
      ["Güçlü", "nicole"]
    ]
  },
  {
    q: "Arkadaş grubunda rolün nedir?",
    a: [
      ["Komik fikirleri bulan kişi", "gumball"],
      ["Herkesi destekleyen kişi", "darwin"],
      ["Akıl veren kişi", "anais"],
      ["Grubu toparlayan kişi", "nicole"]
    ]
  },
  {
    q: "Bir yarışmaya katılsan nasıl oynarsın?",
    a: [
      ["Risk alırım", "gumball"],
      ["Adil ve eğlenceli oynarım", "darwin"],
      ["Strateji kurarım", "anais"],
      ["Kazanmak için odaklanırım", "nicole"]
    ]
  },
  {
    q: "Sana göre mükemmel gün nasıl olur?",
    a: [
      ["Macera dolu", "gumball"],
      ["Sevdiklerimle sakin", "darwin"],
      ["Verimli ve düzenli", "anais"],
      ["Başarıyla biten", "nicole"]
    ]
  },
  {
    q: "En zayıf yönün hangisi olabilir?",
    a: [
      ["Düşünmeden hareket etmek", "gumball"],
      ["Fazla iyi niyetli olmak", "darwin"],
      ["Fazla eleştirel olmak", "anais"],
      ["Fazla kontrolcü olmak", "nicole"]
    ]
  },
  {
    q: "Birisi seni sinirlendirirse ne yaparsın?",
    a: [
      ["Komik ama sert cevap veririm", "gumball"],
      ["Kırmadan anlatmaya çalışırım", "darwin"],
      ["Mantıkla sustururum", "anais"],
      ["Net tavrımı koyarım", "nicole"]
    ]
  },
  {
    q: "Hangi ortam seni daha çok çeker?",
    a: [
      ["Kaotik ama eğlenceli ortam", "gumball"],
      ["Samimi arkadaş ortamı", "darwin"],
      ["Sessiz ve düzenli ortam", "anais"],
      ["Kontrollü ve ciddi ortam", "nicole"]
    ]
  },
  {
    q: "Bir hedefin olunca ne yaparsın?",
    a: [
      ["Deneye deneye ilerlerim", "gumball"],
      ["Destek alarak ilerlerim", "darwin"],
      ["Plan çıkarırım", "anais"],
      ["Disiplinle bitiririm", "nicole"]
    ]
  },
  {
    q: "Sence mizah nasıl olmalı?",
    a: [
      ["Absürt ve beklenmedik", "gumball"],
      ["Tatlı ve masum", "darwin"],
      ["Zekice", "anais"],
      ["İnce ama net", "nicole"]
    ]
  },
  {
    q: "Kendini bir renkle anlatsan?",
    a: [
      ["Mavi", "gumball"],
      ["Turuncu", "darwin"],
      ["Pembe", "anais"],
      ["Mor", "nicole"]
    ]
  },
  {
    q: "Okulda/projede nasıl birisin?",
    a: [
      ["Yaratıcı ama bazen dağınık", "gumball"],
      ["Uyumlu ve yardımsever", "darwin"],
      ["Başarılı ve dikkatli", "anais"],
      ["Sorumluluk alan", "nicole"]
    ]
  },
  {
    q: "Bir film karakteri olsan hangisi olurdun?",
    a: [
      ["Başına sürekli olay gelen ana karakter", "gumball"],
      ["Ana karakterin sadık dostu", "darwin"],
      ["Her şeyi çözen zeki karakter", "anais"],
      ["Ekibi kurtaran güçlü karakter", "nicole"]
    ]
  },
  {
    q: "Hayatta en çok neye önem verirsin?",
    a: [
      ["Eğlenceye", "gumball"],
      ["Dostluğa", "darwin"],
      ["Başarıya", "anais"],
      ["Aileye ve düzene", "nicole"]
    ]
  }
];

let currentQuestion = 0;

let scores = {
  gumball: 0,
  darwin: 0,
  anais: 0,
  nicole: 0,
  richard: 0,
  penny: 0
};

const startBtn = document.getElementById("startBtn");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answers");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");

startBtn.addEventListener("click", () => {
  document.querySelector(".hero").classList.add("hidden");
  quizBox.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const question = questions[currentQuestion];

  questionText.textContent = question.q;
  counter.textContent = `Soru ${currentQuestion + 1} / ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  answersBox.innerHTML = "";

  question.a.forEach(answer => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answer[0];

    button.onclick = () => {
      scores[answer[1]]++;

      if (currentQuestion % 5 === 0) {
        scores.richard++;
      }

      if (currentQuestion % 4 === 0) {
        scores.penny++;
      }

      currentQuestion++;

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };

    answersBox.appendChild(button);
  });
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  document.getElementById("characterImage").src = characters[winner].image;
  document.getElementById("characterName").textContent = characters[winner].name;
  document.getElementById("characterDesc").textContent = characters[winner].desc;
}

function restartQuiz() {
  currentQuestion = 0;

  scores = {
    gumball: 0,
    darwin: 0,
    anais: 0,
    nicole: 0,
    richard: 0,
    penny: 0
  };

  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  showQuestion();
}