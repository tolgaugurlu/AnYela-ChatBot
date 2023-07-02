# Projeye Katkıda Bulunma Rehberi

Bu proje, katkıda bulunmak isteyen geliştiriciler için açık bir şekilde belirtilen adımları içeren bir rehber sunmaktadır. Lütfen bu rehberi okuyun ve projeye katkıda bulunurken izlemeniz gereken adımları takip edin.

## Adımlar

1. Proje deposunu çatalınız (fork) üzerine alın.

2. Çatalladığınız proje deposunu yerel bilgisayarınıza klonlayın:

   ```bash
   git clone https://github.com/sizin-kullanici-adi/proje-repo.git
   ```

3. Yeni bir dal (branch) oluşturun ve üzerinde çalışacağınız değişiklikleri yapın:

   ```bash
   git checkout -b ozellik/dosya-duzenlemesi
   ```

   > Not: Dal adınızı açıklama yapacak şekilde uygun bir şekilde değiştirin.

4. Yaptığınız değişiklikleri düzenli bir şekilde ve anlaşılır bir dilde kodlayın.

5. Yaptığınız değişiklikler için uygun bir şekilde testler yazın ve mevcut testlerin başarılı bir şekilde çalıştığından emin olun.

6. Yaptığınız değişiklikleri ve eklediğiniz dosyaları birleştirme isteği (pull request) göndermek için yerel depoda dalınızı (branch) yükleyin:

   ```bash
   git add .
   git commit -m "Yapılan değişikliklerin açıklayıcı bir başlık"
   git push origin ozellik/dosya-duzenlemesi
   ```

7. GitHub reposuna gidin ve "New Pull Request" düğmesine tıklayın. Açılan formu doldurun ve pull request'inizi gönderin.

8. Projenin sahibi veya yetkilileri, inceleyecektir. Değişikliklerinizin kabul edilmesi veya reddedilmesi hakkında geri bildirim alacaksınız.

9. Gerekirse, geri bildirimleri dikkate alarak değişiklik yapın ve adımları 4-8 arasında tekrarlayın.

## Katkıda Bulunma Kuralları

- Katkıda bulunmadan önce, [CONTRIBUTING](CONTRIBUTING.md) dosyasını okuyun.

- Kodunuza yeterli miktarda açıklama ekleyin ve kodun anlaşılmasını kolaylaştırın.

- Kodunuzu test edin ve mevcut testlerin başarılı bir şekilde çalıştığından emin olun.

- İlgili birleştirme isteğini (pull request) açmadan önce son değişikliklerinizi kontrol edin.

- Projenin sahibi veya yetkilileriyle saygılı bir şekilde iletişim kurun.

## İletişim

Herhangi bir sorunuz veya öneriniz varsa, lütfen [info@tolgaugurlu.com] adresine e-posta gönderin.
