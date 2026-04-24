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
    desc: "Sen güçlü, disiplinli ve sorumluluk sahibisin. Gerektiğinde liderliği alır, ortalığı toparlarsın."
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

const questionPool = [
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
    q: "Yeni bir ortama girince nasıl davranırsın?",
    a: [
      ["Hemen ortamın enerjisini yükseltirim", "gumball"],
      ["Gülümseyip insanlarla kaynaşırım", "darwin"],
      ["Önce ortamı analiz ederim", "anais"],
      ["Kim ne yapıyor hızlıca çözerim", "nicole"]
    ]
  },
  {
    q: "Bir arkadaşın üzülürse ne yaparsın?",
    a: [
      ["Onu güldürmeye çalışırım", "gumball"],
      ["Yanında durur moral veririm", "darwin"],
      ["Mantıklı tavsiye veririm", "anais"],
      ["Sorunu çözmek için harekete geçerim", "nicole"]
    ]
  },
  {
    q: "Planın bozulursa tepkin ne olur?",
    a: [
      ["Yeni maceraya çeviririm", "gumball"],
      ["Canımı sıkmam, uyum sağlarım", "darwin"],
      ["Hemen B planı yaparım", "anais"],
      ["Kontrolü tekrar ele alırım", "nicole"]
    ]
  },
  {
    q: "İnsanlar sende en çok neyi fark eder?",
    a: [
      ["Enerjimi", "gumball"],
      ["Samimiyetimi", "darwin"],
      ["Zekamı", "anais"],
      ["Kararlılığımı", "nicole"]
    ]
  },
  {
    q: "Bir karar verirken neye bakarsın?",
    a: [
      ["İçimden ne geliyorsa ona", "gumball"],
      ["Kimse kırılmasın diye düşünürüm", "darwin"],
      ["Mantıklı olan neyse ona", "anais"],
      ["Sonucu ne olacak ona", "nicole"]
    ]
  },
  {
    q: "Bir ekipte seni ne motive eder?",
    a: [
      ["Eğlenceli fikirler", "gumball"],
      ["Takım ruhu", "darwin"],
      ["Başarılı olmak", "anais"],
      ["Düzen ve sorumluluk", "nicole"]
    ]
  },
  {
    q: "Kendini hangi cümleye daha yakın görüyorsun?",
    a: [
      ["Önce yaparım, sonra düşünürüm", "gumball"],
      ["İnsanların iyi hissetmesi önemli", "darwin"],
      ["Her şeyin bir mantığı olmalı", "anais"],
      ["Dağınıklık bana göre değil", "nicole"]
    ]
  },
  {
    q: "Bir sırrı öğrensen ne yaparsın?",
    a: [
      ["Yanlışlıkla ağzımdan kaçabilir", "gumball"],
      ["Saklarım, güven önemlidir", "darwin"],
      ["Neden saklandığını anlamaya çalışırım", "anais"],
      ["Kimseye söylemem, konu kapanır", "nicole"]
    ]
  },
  {
    q: "Hafta sonu planın ne olurdu?",
    a: [
      ["Plansız eğlence", "gumball"],
      ["Arkadaşlarla vakit geçirmek", "darwin"],
      ["Kendimi geliştirmek", "anais"],
      ["İşleri toparlamak", "nicole"]
    ]
  },
  {
    q: "Birisi seni överse ne yaparsın?",
    a: [
      ["Havaya girerim", "gumball"],
      ["Utanıp teşekkür ederim", "darwin"],
      ["Haklıysa kabul ederim", "anais"],
      ["Daha iyisini yapmaya çalışırım", "nicole"]
    ]
  },
  {
    q: "En çok hangi tip insanlarla iyi anlaşırsın?",
    a: [
      ["Komik ve çılgın olanlarla", "gumball"],
      ["İyi kalpli olanlarla", "darwin"],
      ["Zeki ve meraklı olanlarla", "anais"],
      ["Sorumluluk sahibi olanlarla", "nicole"]
    ]
  },
  {
    q: "Bir hata yapınca ne yaparsın?",
    a: [
      ["Şakaya vururum", "gumball"],
      ["Özür dilerim", "darwin"],
      ["Nerede hata yaptığımı bulurum", "anais"],
      ["Hemen düzeltirim", "nicole"]
    ]
  },
  {
    q: "Hayatta seni en çok ne yorar?",
    a: [
      ["Sıkıcı rutinler", "gumball"],
      ["İnsanların üzülmesi", "darwin"],
      ["Mantıksız davranışlar", "anais"],
      ["Sorumsuzluk", "nicole"]
    ]
  },
  {
    q: "Bir oyunda hangi rolü seçersin?",
    a: [
      ["Kaotik saldırgan", "gumball"],
      ["Destek karakteri", "darwin"],
      ["Stratejist", "anais"],
      ["Tank/lider", "nicole"]
    ]
  },
  {
    q: "Sence en güzel başarı nedir?",
    a: [
      ["Eğlenirken kazanmak", "gumball"],
      ["Birlikte başarmak", "darwin"],
      ["Zekayla çözmek", "anais"],
      ["Emekle zirveye çıkmak", "nicole"]
    ]
  },
  {
    q: "Birinin sana güvenmesi ne hissettirir?",
    a: [
      ["Güzel ama biraz baskı", "gumball"],
      ["Çok değerli", "darwin"],
      ["Ciddi bir sorumluluk", "anais"],
      ["Güç ve görev hissi", "nicole"]
    ]
  },
  {
    q: "Kötü bir gün geçirince ne iyi gelir?",
    a: [
      ["Komik şeyler izlemek", "gumball"],
      ["Sevdiğim biriyle konuşmak", "darwin"],
      ["Yalnız kalıp düşünmek", "anais"],
      ["Kendimi işe vermek", "nicole"]
    ]
  },
  {
    q: "Bir projeye başlarken ilk ne yaparsın?",
    a: [
      ["Heyecanla direkt girerim", "gumball"],
      ["Kimlerle yapacağımı düşünürüm", "darwin"],
      ["Araştırma yaparım", "anais"],
      ["Görevleri planlarım", "nicole"]
    ]
  },
  {
    q: "Sana göre eğlence nedir?",
    a: [
      ["Beklenmedik olaylar", "gumball"],
      ["Sevdiklerinle gülmek", "darwin"],
      ["Zihni çalıştıran şeyler", "anais"],
      ["Hak edilmiş dinlenme", "nicole"]
    ]
  },
  {
    q: "Bir tartışmada nasıl davranırsın?",
    a: [
      ["Espriyle ortamı yumuşatırım", "gumball"],
      ["Kimse kırılmasın isterim", "darwin"],
      ["Kanıtlarla konuşurum", "anais"],
      ["Net ve ciddi olurum", "nicole"]
    ]
  },
  {
    q: "Kendini hangi havada hissedersin?",
    a: [
      ["Fırtınalı ama eğlenceli", "gumball"],
      ["Güneşli ve sıcak", "darwin"],
      ["Serin ve sakin", "anais"],
      ["Güçlü bir yağmur gibi", "nicole"]
    ]
  },
  {
    q: "Bir şeyi öğrenirken nasıl ilerlersin?",
    a: [
      ["Kurcalayarak öğrenirim", "gumball"],
      ["Biriyle birlikte öğrenmeyi severim", "darwin"],
      ["Not alarak öğrenirim", "anais"],
      ["Disiplinli tekrar yaparım", "nicole"]
    ]
  },
  {
    q: "Seni en çok ne mutlu eder?",
    a: [
      ["Kahkaha attığım anlar", "gumball"],
      ["Sevildiğimi hissetmek", "darwin"],
      ["Başardığımı görmek", "anais"],
      ["Her şeyin yolunda gitmesi", "nicole"]
    ]
  },
  {
    q: "Bir günlüğüne süper gücün olsa ne isterdin?",
    a: [
      ["Her şeyi komik hale getirmek", "gumball"],
      ["İnsanları mutlu etmek", "darwin"],
      ["Süper zeka", "anais"],
      ["Sınırsız güç", "nicole"]
    ]
  },
  {
    q: "Bir yerde sıra beklerken ne yaparsın?",
    a: [
      ["Sıkılıp saçma şeyler düşünürüm", "gumball"],
      ["Etrafımdakilerle konuşurum", "darwin"],
      ["Telefonumdan bir şey okurum", "anais"],
      ["Sabırla beklerim", "nicole"]
    ]
  }
];

let questions = [];
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

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function generateRandomQuestions() {
  questions = shuffleArray(questionPool).slice(0, 15);
}

startBtn.addEventListener("click", () => {
  generateRandomQuestions();

  document.querySelector(".hero").classList.add("hidden");
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");

  showQuestion();
});

function showQuestion() {
  const question = questions[currentQuestion];

  questionText.textContent = question.q;
  counter.textContent = `Soru ${currentQuestion + 1} / ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  answersBox.innerHTML = "";

  const shuffledAnswers = shuffleArray(question.a);

  shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answer[0];

    button.onclick = () => {
      scores[answer[1]]++;

      if (answer[1] === "gumball") scores.richard += 0.25;
      if (answer[1] === "darwin") scores.penny += 0.25;
      if (answer[1] === "anais") scores.penny += 0.15;
      if (answer[1] === "nicole") scores.richard += 0.1;

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

  generateRandomQuestions();

  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");

  showQuestion();
}