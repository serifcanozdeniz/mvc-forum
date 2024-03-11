# Kütüphaneler

- axios
- json-server
- react-router-dom
- tailwind

# MVC (Model - View - Controller)

- Model:

* Uygulamanın veri mantığını ve yapısını temsil eder.
  Örn:
* Bileşende tutulacak state'in başlangıç değeri
* Veriyi formatlamaya yarayan fonksiyon
* Api istekleri tutulabilir
* Genellikle Class yapısı ile tanımlanır.

- View:

* Son kullanıcının gördüğü tasarımdır.
* Bileşenin return satırında yazdığımız jsx elementleri burada tanımlanır.

- Controller:

* View ile model arasındaki bağlantıyı sağlar
* Kullanıcı etkileşimiyle tetiklenecek bütün fonksiyonlar burada tanımlanır.

# MVC Klasör Yapısı

## 1.yol

- public
- src
- - pages
- - - MainPage
- - - - MainPageController
- - - - MainPageView
- - - - MainPageModel

- - - AuthPage
- - - - AuthPageController
- - - - AuthPageView
- - - - AuthPageModel

## 2.yol

- public
- src
- - controllers
- - - MainPageController
- - - AuthPageController

- - models
- - - MainPageModel
- - - AuthPageModel

- - views
- - - MainPageView
- - - AuthPageView
# mvc-forum
