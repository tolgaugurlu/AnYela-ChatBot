# Ay Nela.ai ChatBot

Ay Nela.ai ChatBot, kullanıcıların metin girişi yaparak belirli soruları sormasına ve yanıtlar almalarına olanak tanıyan bir web uygulamasıdır.

## Özellikler

- ChatBot, kullanıcılarla etkileşim halinde çalışır ve sorulara otomatik yanıtlar sağlar.
- Kullanıcı dostu bir arayüz sunar ve kolay kullanım sağlar.
- Sorular ve yanıtlar, veri seti aracılığıyla yönetilir ve esnek bir şekilde güncellenebilir.

## Nasıl Kullanılır

1. `index.html` dosyasını bir tarayıcıda açarak ChatBot'u başlatın.
2. ChatBot ekranında "Sohbete Başla" düğmesine tıklayın.
3. Sorularınızı girmek için metin giriş alanına yazın ve Enter tuşuna basın.
4. ChatBot, girilen sorulara uygun yanıtlar verecektir. Yanıtlar, veri setindeki eşleşen soru ve yanıtlardan alınır.

## Teknolojiler ve Araçlar

- HTML
- CSS
- JavaScript

## Dosya Yapısı

Proje dosyalarının yapısı aşağıdaki gibi olacaktır:

- `index.html`: ChatBot web sayfasının ana HTML dosyasıdır.
- `style.css`: ChatBot web sayfasının stil tanımları için CSS dosyasıdır.
- `script.js`: ChatBot'un işlevselliğini sağlayan JavaScript kodlarının bulunduğu dosyadır.
- `background.jpeg`: Arkaplan için ayarlanmış bir görüntüdür.
- `README.md`: Proje hakkında genel bilgilerin yer aldığı README dosyasıdır.

## Veri Seti

An Yela.ai ChatBot, sorulara yanıt vermek için bir veri seti kullanır. Veri seti, `script.js` dosyasında bir dizi olarak tanımlanmıştır. Örneğin:

```javascript
const data = [
  {
    question: "HTML nedir ve nasıl kullanılır?",
    answer:
      "HTML, web sayfalarının yapısını tanımlamak için kullanılan bir işaret dili veya etiket setidir...",
  },
  {
    question: "CSS'in temel özellikleri nelerdir?",
    answer:
      "CSS, web sayfalarının görünümünü ve düzenini kontrol etmek için kullanılan bir stil dilidir...",
  },
  // ...
];
```

Bu veri setindeki sorulara uygun yanıtlar, kullanıcıların girdiği sorulara göre otomatik olarak sağlanır.

## Katkıda Bulunma

Eğer ChatBot'u geliştirmek veya hataları düzeltmek isterseniz, aşağıdaki adımları izleyebilirsiniz:

1. Bu depoyu fork edin.
2. Yeni bir özellik eklemek veya hata düzeltmek için branch oluşturun.
3. Yapmak istediğiniz değişiklikleri yapın.
4. Yaptığınız değişiklikleri açıklayan bir pull request (PR) oluşturun.
   PR'nizi gözden geçirmek için bekleyin ve katkılarınızın kabul edilmesini bekleyin :)

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasını inceleyebilirsiniz.
