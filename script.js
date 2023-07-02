// Veri seti
const data = [
  // Soru ve yanıtlar buraya gelecek
  {
    soru: "HTML nedir ve nasıl kullanılır?",
    yanit:
      "HTML, web sayfalarının yapısını tanımlamak için kullanılan bir işaret dili veya etiket setidir. Web tarayıcıları, HTML kodunu okuyarak sayfayı oluşturur ve görselleştirir.",
  },
  {
    soru: "CSS'in temel özellikleri nelerdir?",
    yanit:
      "CSS, web sayfalarının görünümünü ve düzenini kontrol etmek için kullanılan bir stil dilidir. Renkler, yazı tipleri, arka planlar, kenarlıklar gibi görsel öğeleri kontrol etmek için kullanılır.",
  },
  {
    soru: "JavaScript nedir ve hangi amaçlarla kullanılır?",
    yanit:
      "JavaScript, web sayfalarında interaktif öğeler ve dinamik davranışlar oluşturmak için kullanılan bir programlama dilidir. Kullanıcı etkileşimleri, veri doğrulama, form kontrolleri gibi işlemleri gerçekleştirebilir.",
  },
  {
    soru: "Responsive web tasarımın önemi nedir?",
    yanit:
      "Responsive web tasarım, web sitelerinin farklı cihazlarda ve ekran boyutlarında düzgün bir şekilde görüntülenmesini sağlar. Mobil cihazlar ve tabletler gibi farklı ekran boyutlarına uyumlu olmak, kullanıcı deneyimini iyileştirir ve erişilebilirliği artırır.",
  },
  {
    soru: "Web tarayıcı uyumluluğu için nelere dikkat etmek gerekir?",
    yanit:
      "Web tarayıcı uyumluluğu sağlamak için, web standartlarına uygun kodlama, tarayıcı uyumluluk testleri ve modern web standartlarını kullanmak önemlidir. Ayrıca, kritik tarayıcıların (Chrome, Firefox, Safari, vb.) sürümlerini desteklemek gereklidir.",
  },
  {
    soru: "Box modeli nedir ve nasıl çalışır?",
    yanit:
      "Box modeli, bir HTML elementinin içeriğini, iç kenarlıklarını, kenar boşluklarını ve dış kenarlıklarını tanımlayan bir yapıdır. Elementin boyutunu ve pozisyonunu belirlemek için kullanılır.",
  },
  {
    soru: "CSS flexbox ve grid sistemleri arasındaki farklar nelerdir?",
    yanit:
      "Flexbox, tek boyutlu (satır veya sütun) düzenler oluşturmak için kullanılırken, grid sistemi iki boyutlu (satır ve sütun) düzenler oluşturmak için kullanılır. Grid sistemi daha karmaşık düzenler oluşturmak için daha esnek bir yapı sunar.",
  },
  {
    soru: "Web sayfalarında animasyon ve geçiş efektleri nasıl oluşturulur?",
    yanit:
      "Animasyon ve geçiş efektleri CSS ile oluşturulabilir. Örneğin, @keyframes kuralıyla belirli bir süre boyunca birden fazla aşamada yapılan değişikliklerle animasyonlar oluşturulabilir.",
  },
  {
    soru: "jQuery nedir ve nasıl kullanılır?",
    yanit:
      "jQuery, JavaScript tabanlı bir kütüphanedir ve web sayfalarında HTML manipülasyonu, olay yönetimi, animasyonlar ve AJAX gibi işlemleri kolaylaştırır. jQuery, kısa ve basit bir sözdizimi ile kullanılabilir.",
  },
  {
    soru: "Bootstrap framework'ün avantajları ve dezavantajları nelerdir?",
    yanit:
      "Bootstrap, hazır bileşenler, grid sistemi ve stil şablonları içeren bir CSS framework'üdür. Avantajları arasında hızlı prototip oluşturma, duyarlı tasarım kolaylığı ve tarayıcı uyumluluğu sağlama yer alırken, dezavantajları arasında tasarımın standartlaşması ve aynı görünümün yaygınlaşması yer alır.",
  },
  {
    soru: "SVG (Scalable Vector Graphics) nedir ve nasıl kullanılır?",
    yanit:
      "SVG, ölçeklenebilir vektör tabanlı grafikler oluşturmak için kullanılan bir XML tabanlı dosya formatıdır. SVG dosyaları, herhangi bir boyutta yüksek kaliteli grafikler sağlar ve çizim ve animasyon özellikleriyle etkileşimli web grafikleri oluşturulabilir.",
  },
  {
    soru: "Web sayfalarında hangi performans optimizasyon teknikleri kullanılabilir?",
    yanit:
      "Web sayfalarının performansını artırmak için resimleri optimize etmek, dosya boyutlarını azaltmak, önbellekleme kullanmak, gzip sıkıştırması uygulamak, kodu minimize etmek, etiketleri optimize etmek ve gereksiz veritabanı sorgularından kaçınmak gibi teknikler kullanılabilir.",
  },
  {
    soru: "Web sayfalarında kullanılan farklı dosya türleri ve aralarındaki farklar nelerdir?",
    yanit:
      "Web sayfalarında yaygın olarak kullanılan dosya türleri arasında HTML, CSS, JavaScript, resim dosyaları (JPG, PNG, GIF), video dosyaları (MP4, WebM), ses dosyaları (MP3, WAV), font dosyaları (TTF, WOFF) ve belge dosyaları (PDF) bulunur. Her dosya türünün farklı bir amacı ve kullanım alanı vardır.",
  },
  {
    soru: "Modern Front-End geliştirme araçlarından bazıları nelerdir (Webpack, Babel, vs.)?",
    yanit:
      "Modern Front-End geliştirme araçları arasında Webpack, Babel, npm (Node Package Manager), Gulp, Sass, Less, PostCSS, ESLint, Prettier ve Vue CLI gibi araçlar yer alır. Bu araçlar, modüler bir yapı, derleme, kod optimizasyonu, otomatikleştirme ve diğer geliştirme süreçlerini kolaylaştırır.",
  },
  {
    soru: "PWA (Progressive Web App) nedir ve nasıl oluşturulur?",
    yanit:
      "PWA, web teknolojilerini kullanarak mobil uygulama benzeri deneyim sağlayan web uygulamalarıdır. Bir PWA, tarayıcıda çalışırken çevrimdışı erişim, hızlı yükleme, bildirimler, yer imleri ve ana ekran ikonu gibi özelliklere sahip olabilir. PWA'lar, hizmet işçisi (service worker) teknolojisiyle desteklenir ve manifest dosyasıyla yapılandırılır.",
  },
  {
    soru: "Web sayfalarında hangi güvenlik önlemleri alınmalıdır?",
    yanit:
      "Web sayfalarında güvenlik önlemleri almak için HTTPS kullanımı, güvenlik duvarları, veri doğrulama, saldırı önleme önlemleri, oturum yönetimi, SQL enjeksiyonlarından kaçınma, güvenli parola politikaları, güncellemelerin takip edilmesi ve güvenlik açıklarının düzenli olarak test edilmesi gibi önlemler alınmalıdır.",
  },
  {
    soru: "SEO (Search Engine Optimization) için Front-End'de nelere dikkat etmek gerekir?",
    yanit:
      "SEO için Front-End'de dikkat edilmesi gerekenler arasında düzgün HTML yapılandırması, başlık etiketlerinin kullanımı, meta açıklamaların ve anahtar kelimelerin optimize edilmesi, uygun URL yapılandırması, hızlı yükleme süreleri, mobil uyumluluk ve kullanıcı deneyimi ön planda tutulması yer alır.",
  },
  {
    soru: "Web bileşenleri ve UI kütüphaneleri hakkında bilgi verebilir misiniz?",
    yanit:
      "Web bileşenleri, tekrar kullanılabilir ve özelleştirilebilir bileşenlerdir ve web sayfalarında kullanılabilir. UI kütüphaneleri ise hazır bileşenler, stil şablonları ve interaktif öğeler içerir. Örnek olarak, React, Angular, Vue.js gibi popüler UI kütüphaneleri ve framework'leri kullanılabilir.",
  },
  {
    soru: "WebGL nedir ve ne için kullanılır?",
    yanit:
      "WebGL, web tarayıcılarında 3D grafikler oluşturmak ve görselleştirmek için kullanılan bir JavaScript API'sidir. WebGL, GPU hızlandırması kullanarak yüksek performanslı web tabanlı 3D uygulamaları sağlar.",
  },
  {
    soru: "Web sayfalarında performansı artırmak için hangi yöntemler kullanılabilir?",
    yanit:
      "Web sayfalarının performansını artırmak için resimleri optimize etmek, dosyaları önbellekleme, minify ve sıkıştırma yapmak, tarayıcı önbellekleme kullanmak, tarayıcı isteklerini azaltmak, etiketleri optimize etmek, gecikmeleri azaltmak ve asenkron yüklemeleri kullanmak gibi yöntemler kullanılabilir.",
  },
  {
    soru: "Web sayfalarında hangi test teknikleri kullanılabilir?",
    yanit:
      "Web sayfalarında test teknikleri arasında birim testleri, entegrasyon testleri, kabul testleri, performans testleri, tarayıcı uyumluluk testleri ve güvenlik testleri yer alır. Bu testler, hataları tespit etmek, işlevselliği doğrulamak ve kullanıcı deneyimini iyileştirmek için kullanılır.",
  },
  {
    soru: "Front-End geliştirici olmak için hangi becerilere sahip olmak gerekir?",
    yanit:
      "Front-End geliştirici olmak için HTML, CSS ve JavaScript'i iyi derecede bilmek gerekir. Ayrıca, UI/UX tasarımı, tarayıcı uyumluluğu, responsive tasarım, kod optimizasyonu, hata ayıklama, version kontrol sistemi kullanımı gibi becerilere sahip olmak önemlidir.",
  },
  {
    soru: "Back-End geliştirici olmak için hangi becerilere sahip olmak gerekir?",
    yanit:
      "Back-End geliştirici olmak için sunucu tarafı programlama dillerini (örneğin, PHP, Python, Ruby, C#) ve web framework'leri bilmek gerekir. Veritabanı yönetimi, API geliştirme, güvenlik, performans optimizasyonu, hata ayıklama gibi beceriler de önemlidir.",
  },
  {
    soru: "Web güvenliği için neler yapılabilir?",
    yanit:
      "Web güvenliği için güçlü parola kullanımı, güncel yazılım ve güvenlik yamaları, güvenlik duvarları, HTTPS kullanımı, kullanıcı giriş doğrulaması, veri şifreleme, saldırı önleme önlemleri, düzenli güvenlik testleri ve güvenlik bilinci eğitimi gibi önlemler alınmalıdır.",
  },
  {
    soru: "Web sayfalarında hangi HTTP yöntemleri kullanılır ve ne işe yararlar?",
    yanit:
      "Web sayfalarında yaygın olarak kullanılan HTTP yöntemleri GET, POST, PUT, DELETE ve PATCH'tir. GET, bir kaynağın alınması için kullanılır. POST, yeni bir kaynak oluşturmak veya mevcut bir kaynağı değiştirmek için kullanılır. PUT, mevcut bir kaynağı değiştirmek için kullanılır. DELETE, bir kaynağı silmek için kullanılır. PATCH, bir kaynağın kısmi olarak değiştirilmesi için kullanılır.",
  },
  {
    soru: "RESTful API nedir ve nasıl çalışır?",
    yanit:
      "RESTful API, Representational State Transfer (Temsilî Durum Aktarımı) prensiplerine uygun olarak tasarlanmış bir web hizmetidir. REST, HTTP protokolü üzerinden kaynaklarla etkileşim kurmayı sağlar. RESTful API, belirli bir URI'yi kullanarak kaynaklara erişir, HTTP yöntemlerini kullanır ve genellikle JSON veya XML formatında veri döndürür.",
  },
  {
    soru: "Veritabanı yönetim sistemleri nelerdir ve aralarındaki farklar nelerdir?",
    yanit:
      "Veritabanı yönetim sistemleri (VYS) arasında yaygın olarak kullanılanlar MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, SQLite'dir. Her VYS'nin farklı özellikleri, veri yapıları, sorgu dilleri ve performans karakteristikleri vardır. Örneğin, MySQL açık kaynaklı ve hızlıdır, PostgreSQL güçlü bir SQL desteğine sahiptir, MongoDB doküman tabanlıdır, Oracle genişletilebilir ve ticari bir çözümdür.",
  },
  {
    soru: "API (Application Programming Interface) nedir ve nasıl kullanılır?",
    yanit:
      "API, uygulamalar arasında iletişim sağlamak için tanımlanan bir arayüzdür. API'lar, belirli bir yazılım bileşeninin (örneğin, bir kütüphane, framework veya hizmet) işlevlerine erişmek için kullanılır. API'lar, önceden tanımlanmış talimatları ve parametreleri takip ederek işlevleri çağırmak ve sonuçları almak için kullanılır.",
  },
  {
    soru: "Git ve GitHub arasındaki farklar nelerdir?",
    yanit:
      "Git, dağıtılmış bir versiyon kontrol sistemi olup, projelerinizi yerel olarak yönetmenizi sağlar. GitHub ise Git tabanlı bir bulut tabanlı kod paylaşım ve işbirliği platformudur. GitHub, projelerinizi sunar, işbirliği yapmanızı sağlar ve kaynak kodunuzu depolar.",
  },
  {
    soru: "Web sayfalarında hangi test teknikleri kullanılabilir?",
    yanit:
      "Web sayfalarında test teknikleri arasında birim testleri, entegrasyon testleri, kabul testleri, performans testleri, tarayıcı uyumluluk testleri ve güvenlik testleri yer alır. Bu testler, hataları tespit etmek, işlevselliği doğrulamak ve kullanıcı deneyimini iyileştirmek için kullanılır.",
  },
  {
    soru: "Web sayfalarında hangi test teknikleri kullanılabilir?",
    yanit:
      "Web sayfalarında test teknikleri arasında birim testleri, entegrasyon testleri, kabul testleri, performans testleri, tarayıcı uyumluluk testleri ve güvenlik testleri yer alır. Bu testler, hataları tespit etmek, işlevselliği doğrulamak ve kullanıcı deneyimini iyileştirmek için kullanılır.",
  },
  {
    soru: "Front-End geliştirici olmak için hangi becerilere sahip olmak gerekir?",
    yanit:
      "Front-End geliştirici olmak için HTML, CSS ve JavaScript'i iyi derecede bilmek gerekir. Ayrıca, UI/UX tasarımı, tarayıcı uyumluluğu, responsive tasarım, kod optimizasyonu, hata ayıklama, version kontrol sistemi kullanımı gibi becerilere sahip olmak önemlidir.",
  },
  {
    soru: "Back-End geliştirici olmak için hangi becerilere sahip olmak gerekir?",
    yanit:
      "Back-End geliştirici olmak için sunucu tarafı programlama dillerini (örneğin, PHP, Python, Ruby, C#) ve web framework'leri bilmek gerekir. Veritabanı yönetimi, API geliştirme, güvenlik, performans optimizasyonu, hata ayıklama gibi beceriler de önemlidir.",
  },
  {
    soru: "Web güvenliği için neler yapılabilir?",
    yanit:
      "Web güvenliği için güçlü parola kullanımı, güncel yazılım ve güvenlik yamaları, güvenlik duvarları, HTTPS kullanımı, kullanıcı giriş doğrulaması, veri şifreleme, saldırı önleme önlemleri, düzenli güvenlik testleri ve güvenlik bilinci eğitimi gibi önlemler alınmalıdır.",
  },
  {
    soru: "Web sayfalarında hangi HTTP yöntemleri kullanılır ve ne işe yararlar?",
    yanit:
      "Web sayfalarında yaygın olarak kullanılan HTTP yöntemleri GET, POST, PUT, DELETE ve PATCH'tir. GET, bir kaynağın alınması için kullanılır. POST, yeni bir kaynak oluşturmak veya mevcut bir kaynağı değiştirmek için kullanılır. PUT, mevcut bir kaynağı değiştirmek için kullanılır. DELETE, bir kaynağı silmek için kullanılır. PATCH, bir kaynağın kısmi olarak değiştirilmesi için kullanılır.",
  },
  {
    soru: "RESTful API nedir ve nasıl çalışır?",
    yanit:
      "RESTful API, Representational State Transfer (Temsilî Durum Aktarımı) prensiplerine uygun olarak tasarlanmış bir web hizmetidir. REST, HTTP protokolü üzerinden kaynaklarla etkileşim kurmayı sağlar. RESTful API, belirli bir URI'yi kullanarak kaynaklara erişir, HTTP yöntemlerini kullanır ve genellikle JSON veya XML formatında veri döndürür.",
  },
  {
    soru: "Veritabanı yönetim sistemleri nelerdir ve aralarındaki farklar nelerdir?",
    yanit:
      "Veritabanı yönetim sistemleri (VYS) arasında yaygın olarak kullanılanlar MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, SQLite'dir. Her VYS'nin farklı özellikleri, veri yapıları, sorgu dilleri ve performans karakteristikleri vardır. Örneğin, MySQL açık kaynaklı ve hızlıdır, PostgreSQL güçlü bir SQL desteğine sahiptir, MongoDB doküman tabanlıdır, Oracle genişletilebilir ve ticari bir çözümdür.",
  },
  {
    soru: "API (Application Programming Interface) nedir ve nasıl kullanılır?",
    yanit:
      "API, uygulamalar arasında iletişim sağlamak için tanımlanan bir arayüzdür. API'lar, belirli bir yazılım bileşeninin (örneğin, bir kütüphane, framework veya hizmet) işlevlerine erişmek için kullanılır. API'lar, önceden tanımlanmış talimatları ve parametreleri takip ederek işlevleri çağırmak ve sonuçları almak için kullanılır.",
  },
  {
    soru: "Git ve GitHub arasındaki farklar nelerdir?",
    yanit:
      "Git, dağıtılmış bir versiyon kontrol sistemi olup, projelerinizi yerel olarak yönetmenizi sağlar. GitHub ise Git tabanlı bir bulut tabanlı kod paylaşım ve işbirliği platformudur. GitHub, projelerinizi sunar, işbirliği yapmanızı sağlar ve kaynak kodunuzu depolar.",
  },
];

// Başla tuşuna erişim
const startButton = document.getElementById("start-button");

// Başla tuşuna tıklama olayını dinleme
startButton.addEventListener("click", function () {
  // Başlangıç ekranını gizle
  const startScreen = document.getElementById("start-screen");
  startScreen.style.display = "none";

  // ChatBot'u başlat
  const chatContainer = document.getElementById("chat-container");
  chatContainer.style.display = "block";

  // Kullanıcı adını al
  const usernameInput = document.getElementById("username-input");
  const username = usernameInput.value.trim();

  // Kullanıcı adını arayüzde görüntüle
  const usernameElements = document.getElementsByClassName("username");
  Array.from(usernameElements).forEach((element) => {
    element.textContent = `${username}: `;
  });

  // Kullanıcı adı girdi alanını gizle
  usernameInput.style.display = "none";
});

// Kullanıcı arabirim elemanlarına erişim
const chatContainer = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");

// Kullanıcı girişi dinleme
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Enter tuşunun varsayılan işlevini engelle

    const userQuestion = userInput.value;
    const answer = findAnswer(userQuestion);
    displayMessage(userQuestion, "user");
    displayMessage(answer, "bot");
    userInput.value = "";
  }
});

// Yanıt bulma fonksiyonu
function findAnswer(question) {
  // Veri setindeki soruları ve yanıtları kontrol et
  for (let i = 0; i < data.length; i++) {
    if (question.toLowerCase().includes(data[i].soru.toLowerCase())) {
      return data[i].yanit;
    }
  }

  // Eşleşme bulunamadıysa standart bir yanıt döndür
  return "Üzgünüm, RBT beni sadece belirli bir kalıp üzerinde geliştirdi. Şu an için kendi kendine öğrenen bir dil modeli değilim, An Yela.ai yakında daha da gelişecek. Bu soruyu yanıtlayamıyorum. Lütfen başka bir soru sorun.";
}

// Mesajları görüntüleme fonksiyonu
function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);

  const messageBubble = document.createElement("div");
  messageBubble.classList.add("message-bubble");
  messageBubble.textContent = message;

  messageElement.appendChild(messageBubble);

  if (sender === "user") {
    const usernameSpan = document.createElement("span");
    usernameSpan.classList.add("username");
    usernameSpan.textContent = "Demo Kullanıcı :";
    messageElement.prepend(usernameSpan);
  } else if (sender === "bot") {
    const botNameSpan = document.createElement("span");
    botNameSpan.classList.add("bot-name");
    botNameSpan.textContent = "Ay Nela.ai: ";
    messageElement.prepend(botNameSpan);
  }

  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
