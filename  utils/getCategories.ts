const categories = [
  {
    id: 1,
    name: 'Öne Çıkanlar',
    slug: '/one-cikanlar-film',
    contents: [
      {
        title: 'Kod 355',
        description:
          "Çok gizli bir silah, paralı askerlerin eline geçtiğinde, bir CIA ajanı onu geri almak için ölümcül bir görevde üç uluslararası ajanla güçlerini birleştirir.Adını, Amerikan devrimi sırasında 'vatanseverler' için savaşan kimliği belirsiz bir kadın casusun kod adından alan filmde, birçok başarılı yıldızı başrolde izliyoruz.",
        madeYear: '2022',
        duration: '117 dk',
        slug: '/film/kod-355',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359182/355-the-yeni_220x286.jpg',
      },
      {
        title: 'Bir Silahlı Çatışmada Ölmek',
        description:
          "New York'ta genç bir adam, babasının düşmanının kızına aşık olur.Aksiyonla komediyi başarılı bir şekilde harmanlayan filmde, 'Vikings'in Ragnar'ı Travis Fimmel yer alıyor.",
        madeYear: '2021',
        duration: '88 dk',
        slug: '/film/die-in-a-gunfight',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359815/die-in-a-gunfight_220x286.jpg',
      },
      {
        title: 'Alpinist: Dağcı',
        description:
          "Serbest solo dağ tırmanıcısı olan Marc-Andre Leclerc'in hayatını ve adrenalin dolu tırmanışlarını izliyoruz.23 yaşındaki dağcının nefes kesen macerasını anlatan film, 1,5 milyon dolara yakın gişe yaptı.",
        madeYear: '2021',
        duration: '88 dk',
        slug: '/film/the-alpinist',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359816/alpinist-the-2021_220x286.jpg',
      },
      {
        title: 'Gezginler',
        description:
          "Özel olarak yetiştirilmiş bir grup genç astronot, koloni kurmak üzere yeni bir gezegene gönderilir. Kaptan Richard, gizemli bir şekilde ölünce görev sorgulanır.Tye Sheridan ve Johnny Depp'in kızı Lily-Rose Depp'in başrollerde yer aldıkları bilimkurgu türündeki yapımın yönetmeni “Sihirbaz” (The Illusionist) ve “Uyumsuz” (Divergent) ile tanınan Neil Burger.",
        madeYear: '2021',
        duration: '103 dk',
        slug: '/film/voyagers',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000363281/voyagers-2021-turkce_220x286.jpg',
      },
      {
        title: "Dün Gece Soho'da",
        description:
          "Tasarımcı Sandy, gizemli bir şekilde zamanda yolculuk eder. 60'ların Londra'sında hayranı olduğu şarkıcıyla tanışır. Ancak işler hayal ettiği gibi gitmez.2022 Bafta Ödülleri'ne En İyi Müzik dahil toplam iki dalda aday gösterilen yapıt, prömiyerini yaptığı Venedik'in yanı sıra Toronto Film Festivali kapsamında da izleyicisiyle buluştu. 'Queen's Gambit' dizisiyle büyük çıkış yakalayan Anya Taylor-Joy başrolde.",
        madeYear: '2021',
        duration: '112 dk',
        slug: '/film/last-night-in-soho',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359817/last-night-in-soho-turkce_220x286.jpg',
      },
      {
        title: 'Dehşet Seansı',
        description:
          "Bir tarlada pilotluk yapmak için anlaşan Leonardo, ailesini yanına alarak kırsala yerleşir. Leonardo bulunduğu yere ait karanlık sırlarla yüzleşecektir.Arjantinli yönetmen Gabriel Grieco'nun yönetmenliğini ve senaristliğini üstlendiği bu gerilim dolu filmin başrollerinde Lautaro Delgado ve Sofia Gala Castiglione yer alıyor.",
        madeYear: '2019',
        duration: '76 dk',
        slug: '/film/dehset-seansi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000363334/respira-transgenesis_220x286.jpg',
      },
      {
        title: 'Asker Eşleri',
        description:
          "Eşleri Afganistan'da hizmet eden kadınlar, müzik korosu kurmaya karar verir ve kendilerini küresel bir hareketin merkezinde bulurlar.'The Choir: Military Wives' belgeselinden, Oscar adaylıkları da bulunan başarılı yönetmen Peter Cattaneo tarafından beyazperdeye aktarılan yapımda, Kristin Scott Thomas, Sharon Horgan ve Emma Lowndes'i izliyoruz.",
        madeYear: '2019',
        duration: '107 dk',
        slug: '/film/military-wives',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349735/military-wives_220x286.jpg',
      },
      {
        title: 'Durgun Su',
        description:
          "Bill, Marsilya'da okuyan kızı Allison'ın, işlemediğini iddia ettiği bir cinayetin zanlısı olarak tutuklanması sonucu kızını kurtarmak için Fransa'ya gider.Oscar ödüllü başarılı aktör Matt Damon'ın çizdiği baba figürüyle başrolde yer aldığı drama türündeki yapımda ona küçük gün ışığım (Little Miss Sunshine) filmiyle küçük yaşında Oscar adaylığı elde eden Abigail Breslin eşlik ediyor.",
        madeYear: '2021',
        duration: '132 dk',
        slug: '/film/stillwater',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000363280/stillwater-2021_220x286.jpg',
      },
      {
        title: 'Beyaz Fil',
        description:
          "Eski denizci Gabriel, mafya için bir şeyler yapmak zorunda kaldığında vicdanı ve onuru arasında bocalar.Jesse V. Johnson'ın hem yazıp hem yönettiği filmde, Bruce Willis'e, Oscar adaylıkları da bulunan usta aktör John Malkovic ve Olga Kurylenko gibi isimler eşlik ediyor.",
        madeYear: '2022',
        duration: '88 dk',
        slug: '/film/white-elephant',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000364496/white-elephant_220x286.jpg',
      },
      {
        title: 'Koleksiyon',
        description:
          'Kederli baba Brandon, geçmişin trajedileriyle baş etmeye çalışırken, yüksek bahisli borç tahsilatının manipülatif dünyasıyla da savaşmak zorunda kalır.',
        madeYear: '2021',
        duration: '83 dk',
        slug: '/film/collection',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000364495/collection-2021_220x286.jpg',
      },
      {
        title: 'Amatörler Gecesi',
        description:
          'Mimarlık bölümünde okuyan Guy, eşi Anne ile ilk bebeğinin heyecanını yaşar. İşsiz olan Guy, eşinin yönlendirmesiyle özel şoförlük işine başvurur."Amerikan Pastası" serisiyle adını duyuran Jason Biggs\'in başrolünde yer aldığı bu çılgın komedi, kahramanın taşıdığı yolcularla yaşadıklarını anlatarak seyirciyi kahkahaya boğuyor.',
        madeYear: '2016',
        duration: '84 dk',
        slug: '/film/amateur-night',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000363260/amateur-night_220x286.jpg',
      },
      {
        title: 'Amerikan Kuşatması',
        description:
          "New York polis departmanı dedektifi Watts, küçük bir kasabanın şerifi olur ve zengin bir doktoru rehin alan hırsız çetesiyle mücadele eder.Star oyuncu Bruce Willis'i başrolde izlediğimiz aksiyonda, Rob Gough ve Anna Hindman da var.",
        madeYear: '2021',
        duration: '86 dk',
        slug: '/film/american-siege',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000364494/american-siege-yeni_220x286.jpg',
      },
    ],
  },
  {
    id: 2,
    name: 'Bu Hafta En Çok İzlenenler',
    slug: '/bu-hafta-en-cok-izlenenler-film',
    contents: [
      {
        title: 'Salinger Yılım',
        description:
          "Görevi J.D. Salinger'a gelen hayran mektuplarına cevap vermek olan Joanna. Standart cevaplardan sıkılmaya başlayan kadın, kendi sesini bulmaya çalışır.2020 Berlin'in açılış filmi olan ve Joanna Rakoff'un aynı adlı romanından uyarlanan yapıtın kamera arkasında Philippe Falardeau yer alırken, Margaret Qualley ve Douglas Booth'a usta oyuncu Sıgourney Weaver eşlik ediyorlar.",
        madeYear: '2020',
        duration: '96 dk',
        slug: '/film/salinger-yilim',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000280024/my-salinger-year-yenii_220x286.jpg',
      },
      {
        title: 'Süpernova',
        description:
          "Sam ve Tusker, sevdiklerini ziyaret etmek için karavanla İngiltere'yi boydan boya gezerler. Tuscer'a bunama teşhisi konduğundan, bu gezi onlar için daha da kıymetlidir.Usta aktörler Colin Firth ve Stanley Tucci'yi başrolde izlediğimiz yapıtın kamera arkasında Harry Macqueen oturuyor.",
        madeYear: '2020',
        duration: '90 dk',
        slug: '/film/supernova',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000303655/supernova-turkce_220x286.jpg',
      },
      {
        title: 'Minari',
        description:
          "1980'ler Arkansas'ında çiftlik yaratmaya çalışan Koreli bir ailenin hikayesi.93. Oscar'larda 'En İyi Film' dahil toplam 6 dalda aday gösterilen ve 'En İyi Yardımcı Kadın Oyuncu' Oscar'ını kazanan yapıt, ilk gösterimini gerçekleştirdiği Sundance Film Festivali'nden de 'Jüri Büyük Ödülü'yle dönmüştü. Yapımcıları arasında Brad Pitt'in de bulunduğu film Lee Isaac Chung imzalı.",
        madeYear: '2020',
        duration: '110 dk',
        slug: '/film/minari',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000325694/minari-turkce_220x286.jpg',
      },
      {
        title: 'Ölümcül Günah',
        description:
          "Evli bir adam, tek gecelik bir ilişkiden sonra kendisini kurnaz bir dedektifin son cinayet soruşturmasının içinde bulur.'Million Dollar Baby' ve 'Boys Don't Cry' filmlerindeki performanslarıyla Oscar'a layık görülen başarılı aktris Hillary Swank'i başrolde izlediğimiz yapımda kendisine Michael Ealy ve Mike Colter eşlik ediyorlar.",
        madeYear: '2020',
        duration: '98 dk',
        slug: '/film/fatale',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000325085/fatale-2020_220x286.jpg',
      },
      {
        title: 'Yakuza Prensesi',
        description:
          "Suç örgütü lideri Yakuza öldürülünce, tek varis olan Akemi bebekken yurt dışına gönderilir. 20 yılın ardından kim olduğunu öğrenen Akemi, zulmedenlere savaş açar.Vicente Amorim'in kamera arkasında yer aldığı yapımda, Masumi, Jonathan Rhys Meyers ve Tsuyoshi Ihara'yı izliyoruz.",
        madeYear: '2021',
        duration: '106 dk',
        slug: '/film/yakuza-prensesi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000333442/yakuza-princess_220x286.jpg',
      },
      {
        title: 'Karanlık Geçmiş',
        description:
          "Zara ve Brian'ın mükemmel küçük kasaba hayatları, Zara'nın gizli geçmişinden gelen bir yabancının kızlarını kaçırmasıyla birlikte, bambaşka bir hal alır.Christian Sesma'nın kamera arkasında yer aldığı yapımda, usta oyuncu Mickey Rourke'a Michael Jai White ve James Russo eşlik ediyorlar.",
        madeYear: '2021',
        duration: '89 dk',
        slug: '/film/take-back',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000346596/take-back_220x286.jpg',
      },
      {
        title: 'Rüya Ülkesi',
        description:
          "Film, madde satıcısı, gizli görevdeki bir polis, bir profesör ve yas tutan bir annenin hikayelerini bir araya getiriyor.Oscar'lı usta aktör Gary Oldman'a, Armie Hammer ve 'Lost'un Kate'i Evangeline Lilly'nin eşlik ettikleri, gerçek bir hikayeden esinlenen yapımın kamera arkasında, senaryoyu da kaleme alan Nicholas Jarecki oturuyor.",
        madeYear: '2021',
        duration: '113 dk',
        slug: '/film/ruya-ulkesi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000343384/crisis-2021_220x286.jpg',
      },
      {
        title: 'Kötü Öğretmen',
        description:
          "Çılgın bir öğretmen olan Elizabeth, rakip meslektaşının flört ettiği Scott'tan hoşlanır ve onu elde etmek için komik olaylara neden olacaktır.Cameron Diaz, Jason Segel ve Justin Timberlake'ten oluşan yıldız kadrosuyla dikkat çeken filmin yönetmenliğini Jake Kasdan üstleniyor.",
        madeYear: '2011',
        duration: '86 dk',
        slug: '/film/kotu-ogretmen',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000030933/bad-teacher_220x286.jpg',
      },
      {
        title: '5.Dalga',
        description:
          "Dünya dışı varlıkların ani saldırısıyla büyük bir kaos yaşanmaktadır. Anne ve babasını kaybeden Cassie, kardeşini kurtarmak için mücadele verecektir.Yazar Rick Yancey'in çok satan kitabından uyarlama olan filmde, son dönemin başarılı aktrislerinden Chloe Grace Moretz başrolde yer alırken filmin yönetmen koltuğunda J Blakeson oturuyor.",
        madeYear: '2016',
        duration: '107 dk',
        slug: '/film/5dalga',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000064512/5th-wave-the_220x286.jpg',
      },
      {
        title: 'Komşu',
        description:
          "Sıkıcı bir evliliğin içindeki orta yaşlı Mike'ın hayatı, yan dairesine taşınan genç bir çiftle birlikte bambaşka bir hal alır.William Fichtner'a, Jessica McNamee ve Jean Louisa Kelly'nin eşlik ettikleri yapıtın yönetmen koltuğunda Aaron Harvey oturuyor.",
        madeYear: '2017',
        duration: '93 dk',
        slug: '/film/komsu',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000346717/neighbor-the-2017_220x286.jpg',
      },
      {
        title: 'Amerikan Suikastçı',
        description:
          "Amerikalı gangster Erik Vasquez, Meksika yeraltı dünyasının en iyisi olmak isterken, hem güçlü kartellerden, hem de müttefiklerinden düşmanlar edinir.Rj Collins'in ilk yönetmenlik denemesiyle kamera arkasında yer aldığı yapımda, Phillip A. Haddad, Maurice Compte ve Maya Stojan'a usta aktör Danny Trejo eşlik ediyor.",
        madeYear: '2021',
        duration: '100 dk',
        slug: '/film/american-sicario',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000346595/american-scario_220x286.jpg',
      },
      {
        title: 'İntikam Vakti',
        description:
          "Oğlunun intikamını almak için, her hafta milyonlarca dolar taşıyan zırhlı araç şirketinde güvenlik görevlisi olarak işe giren H'nin hikayesi.Guy Ritchie ile Jason Statham'ı yeniden bir araya getiren yapımda, Holt Mccallany ve Josh Hartnett gibi isimler de yer alıyor. Film, dünya çapında 100 milyon dolardan fazla hasılat elde etti.",
        madeYear: '2021',
        duration: '113 dk',
        slug: '/film/wrath-of-man',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000340881/wrath-of-man_220x286.jpg',
      },
    ],
  },
  {
    id: 3,
    name: 'Tüm Zamanların En İyi Filmleri',
    slug: '/tum-zamanlarin-en-iyi-filmleri',
    contents: [
      {
        title: 'Akıl Oyunları',
        description:
          '"En İyi Film" ve "En İyi Yönetmen" ödülleri dahil 4 dalda Oscar ödülünü kazanan yapımın yönetmenliğini usta yönetmen Ron Howard üstleniyor.John Forbes Nash’in gerçek hayatından ilham alınarak yapılan film, Nobel ödüllü matematik dehasının genç yaşında geliştirdiği kuramlarla adından söz ettirirken, dahilik ve delilik arasındaki ince çizgide aşkı da tatmasını ele alıyor.',
        madeYear: '2001',
        duration: '129 dk',
        slug: '/film/a-beautiful-mind',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000033216/beautiful-mind-a_220x286.jpg',
      },
      {
        title: 'Altına Hücum',
        description:
          'Film, Alaska\'da altın avına çıkan Şarlo\'nun başından geçen olayları anlatıyor.Chaplin\'in "Beni bu filmle hatırlayın" dediği yapım, 1943\'deki Oscar\'da "En İyi Müzik" ve "En İyi Ses" ödüllerinde adaylığı bulunuyor.',
        madeYear: '1925',
        duration: '69 dk',
        slug: '/film/the-gold-rush',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350444/gold-rush-the_220x286.jpg',
      },
      {
        title: 'Şarlo Sirkte',
        description:
          'Hayatının aşkını çalıştığı sirkte bulan bir adamın hikayesi.1929’daki ilk Oscar ödül töreninde ‘Onur Ödülü’ alan Chaplin, kendine has üslubuyla güldürmeye ve hüzünlendirmeye devam ediyor.',
        madeYear: '1928',
        duration: '68 dk',
        slug: '/film/sarlo-sirkte',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350443/circus-the-1928_220x286.jpg',
      },
      {
        title: 'Yumurcak',
        description:
          "Kimsesiz bir bebeği sahiplenen Şarlo’nun hikayesi... Yeni doğan bebeğiyle kocası tarafından terk edilen Edna, ona bakamayacağını düşünür ve çocuğu sokağa bırakır.Tesadüfen çocuğa rastlayan Şarlo, vicdanının sesini dinler, onu sahiplenerek büyütür. Sinema tarihinin en büyük klasiklerinden olan film, IMDb'de top 250 listesinde yer alıyor.",
        madeYear: '1921',
        duration: '50 dk',
        slug: '/film/the-kid-v3',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350452/kid-the-1921_220x286.jpg',
      },
      {
        title: 'Asri Zamanlar',
        description:
          'Çalıştığı fabrikada strese dayanamayıp sinir krizi geçiren Şarlo, birtakım olaylar sonucu hapse düşer. Çıktığında yetim bir kızla tanışacaktır.Sinema tarihinin ve Şarlo’nun en büyük filmlerinden. Chaplin’ın son sessiz filmi olan yapımın çekimleri 10 ayda tamamlandı.',
        madeYear: '1936',
        duration: '83 dk',
        slug: '/film/modern-times',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349741/modern-times_220x286.jpg',
      },
      {
        title: 'Şehir Işıkları',
        description:
          'İşsiz güçsüz, sevimli bir serseri, sokakta çiçek satan kör bir kadına aşık olur ve gözlerinin açılması için para bulmaya çalışır.Orson Welles, Stanley Kubrick, Tarkovski, Guillermo Del Toro ve bizzat Chaplin’ın favori filmi “Şehir Işıkları”, 1931’de ABD’de en çok izlenen yapım oldu. Sinema tarihinin bu altın klasiğinin müzikleri de Chaplin’e ait.',
        madeYear: '1931',
        duration: '82 dk',
        slug: '/film/city-lights',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349742/city-lights_220x286.jpg',
      },
      {
        title: 'Küçük Buda',
        description:
          "Reenkarnasyona inanan bir grup Budist rahip, ölmüş liderleri Lama Dorje'nin ruhunu Amerika'nın Seattle kentinde yaşayan küçük Jesse'de olduğuna inanırlar.Keanu Reeves ve Bridget Fonda gibi yıldız isimlerin yer aldığı bu etkileyici yapımın yönetmen koltuğunda 2 Oscar ödüllü usta yönetmen Bernardo Bertolucci oturuyor.",
        madeYear: '1993',
        duration: '134 dk',
        slug: '/film/little-buddha',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349510/little-buddha_220x286.jpg',
      },
      {
        title: 'Persepolis',
        description:
          "Ödüllü animasyon, İranlı küçük bir kızın, ülkenin islam devrimi öncesi ve sonrası büyük farklılıklar gösteren hayatından kesitler aktarıyor.En İyi Animasyon dalında Oscar'a aday gösterilen, dünyanın pek çok festivalinde yer alıp ödüller kazanan yapımın yönetmenliğini Vincent Paronnaud ve Marjane Satrapi üstleniyorlar.",
        madeYear: '2007',
        duration: '91 dk',
        slug: '/film/persepolis',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000031914/persepolis-2007_220x286.jpg',
      },
      {
        title: 'Hayatını Yaşamak',
        description:
          '22 yaşındaki Parisli Nana, aktris olma hayalleri suya düşünce hayat kadını olarak çalışmaya başlar. Kocasından yeni ayrılmıştır ve artık yapayalnızdır. Anna Karina’nın en güzel haliyle karşımıza çıktığı, 12 epizottan oluşan Godard’ın bu ‘Yeni Dalga’ şaheseri, Venedik’te Altın Aslan’a adaydı ve iki ödül kazandı.',
        madeYear: '1962',
        duration: '80 dk',
        slug: '/film/hayatini-yasamak',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349568/vivre-sa-vie-anisina_220x286.jpg',
      },
      {
        title: 'Baba III (Coda)',
        description:
          "Michael Corleone, ailesini suç dünyasından uzaklaştırıp işlerini legal olarak sürdürmek ister. Kendisine de varis olarak, kardeşi Sonny Corleone’nin aileden uzakta büyümüş oğlu Vincent'ı atar.Yönetmen Coppola’nın “The Godfather Coda: The Death of Michael Corleone” adını verdiği ve 30 yıl aradan sonra yeniden kurguladığı yapıt, En İyi Film dahil 7 dalda Oscar’a aday gösterildi.",
        madeYear: '1990',
        duration: '151 dk',
        slug: '/film/the-godfather-part-iii',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000031216/godfather-part3-yeni_220x286.jpg',
      },
      {
        title: 'Mösyö Verdu',
        description:
          '"En İyi Özgün Senaryo" Oscar adaylığı bulunan filmin yönetmenliğini ve başrolünü usta oyuncu Charlie Chaplin üstleniyor.Sıradan bir aile babası olan Mösyö Verdu, bir bankada gişe memuru olarak çalışırken işini kaybeder. Ailesini geçindirebilmek için zengin olan dulları ayartarak onları öldürme planları yapacaktır.',
        madeYear: '1947',
        duration: '118 dk',
        slug: '/film/monsieur-verdoux',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349484/monsieur-verdoux_220x286.jpg',
      },
      {
        title: 'Kızım Ve Ben',
        description:
          'Başarılı Aktris Sophia Loren\'in etkileyici performansıyla "En İyi Kadın Oyuncu" Oscar heykelciğine sahip olduğu filmin yönetmenliğini Vittorio De Sica üstleniyor.2. Dünya Savaşı sırasında İtalyan bir dul olan Cesira, kızıyla birlikte müttefik kuvvetlerin saldırısı altındaki Roma\'dan bir an önce ayrılmak zorundadır. Cesira ve kızı Rosetta, sığındıkları küçük bir köyde Michele ile tanışacaktır.',
        madeYear: '1960',
        duration: '99 dk',
        slug: '/film/two-woman',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349509/two-woman_220x286.jpg',
      },
    ],
  },
  {
    id: 4,
    name: 'IMDb Top Filmler',
    slug: '/imdb-top-filmler-film',
    contents: [
      {
        title: 'Akıl Oyunları',
        description:
          '"En İyi Film" ve "En İyi Yönetmen" ödülleri dahil 4 dalda Oscar ödülünü kazanan yapımın yönetmenliğini usta yönetmen Ron Howard üstleniyor.John Forbes Nash’in gerçek hayatından ilham alınarak yapılan film, Nobel ödüllü matematik dehasının genç yaşında geliştirdiği kuramlarla adından söz ettirirken, dahilik ve delilik arasındaki ince çizgide aşkı da tatmasını ele alıyor.',
        madeYear: '2001',
        duration: '129 dk',
        slug: '/film/a-beautiful-mind',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000033216/beautiful-mind-a_220x286.jpg',
      },
      {
        title: 'Altına Hücum',
        description:
          'Film, Alaska\'da altın avına çıkan Şarlo\'nun başından geçen olayları anlatıyor.Chaplin\'in "Beni bu filmle hatırlayın" dediği yapım, 1943\'deki Oscar\'da "En İyi Müzik" ve "En İyi Ses" ödüllerinde adaylığı bulunuyor.',
        madeYear: '1925',
        duration: '69 dk',
        slug: '/film/the-gold-rush',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350444/gold-rush-the_220x286.jpg',
      },
      {
        title: 'Yumurcak',
        description:
          "Kimsesiz bir bebeği sahiplenen Şarlo’nun hikayesi... Yeni doğan bebeğiyle kocası tarafından terk edilen Edna, ona bakamayacağını düşünür ve çocuğu sokağa bırakır.Tesadüfen çocuğa rastlayan Şarlo, vicdanının sesini dinler, onu sahiplenerek büyütür. Sinema tarihinin en büyük klasiklerinden olan film, IMDb'de top 250 listesinde yer alıyor.",
        madeYear: '1921',
        duration: '50 dk',
        slug: '/film/the-kid-v3',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350452/kid-the-1921_220x286.jpg',
      },
      {
        title: 'Baba',
        description:
          "Yaşlılığın etkilerini daha çok hissetmeye başlayan Anthony, değişen koşulları anlamlandırmaya çalışırken sevdiklerinden ve gerçekliğinden şüphe duymaya başlar.93. Oscar'larda En İyi Erkek Oyuncu ve En İyi Uyarlama Senaryo ödüllerine layık görülen yapıt, ilk yönetmenlik denemesiyle Florian Zeller imzası taşıyor. Usta aktör Anthony Hopkins'in performansıyla yine kendisine hayran bıraktığı yapıtta, bir başka Oscar'lı oyuncu Olivia Colman'ı da izliyoruz.",
        madeYear: '2020',
        duration: '92 dk',
        slug: '/film/baba-v12',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000303831/father-the-2020-turkce_220x286.jpg',
      },
      {
        title: 'Asri Zamanlar',
        description:
          'Çalıştığı fabrikada strese dayanamayıp sinir krizi geçiren Şarlo, birtakım olaylar sonucu hapse düşer. Çıktığında yetim bir kızla tanışacaktır.Sinema tarihinin ve Şarlo’nun en büyük filmlerinden. Chaplin’ın son sessiz filmi olan yapımın çekimleri 10 ayda tamamlandı.',
        madeYear: '1936',
        duration: '83 dk',
        slug: '/film/modern-times',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349741/modern-times_220x286.jpg',
      },
      {
        title: 'Şehir Işıkları',
        description:
          'İşsiz güçsüz, sevimli bir serseri, sokakta çiçek satan kör bir kadına aşık olur ve gözlerinin açılması için para bulmaya çalışır.Orson Welles, Stanley Kubrick, Tarkovski, Guillermo Del Toro ve bizzat Chaplin’ın favori filmi “Şehir Işıkları”, 1931’de ABD’de en çok izlenen yapım oldu. Sinema tarihinin bu altın klasiğinin müzikleri de Chaplin’e ait.',
        madeYear: '1931',
        duration: '82 dk',
        slug: '/film/city-lights',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349742/city-lights_220x286.jpg',
      },
      {
        title: 'Baba 2',
        description:
          "En İyi Film, Yönetmen, Uyarlama Senaryo, Yardımcı Erkek Oyuncu (De Niro), Özgün Müzik, Sanat Yönetimi Oscar'larını alan yapıt, 5 dalda daha ödüle aday oldu.1910'lu yıllarda, memleketinden kaçmak zorunda kalan genç Vito Corleone, Sicilya'dan New York'a göç eder. Çeşitli işlerde çalışarak ailesini ayakta tutmak isteyecektir. Babasından sonra ailenin başına geçen Michael Corleone, 1950'li yıllarda işlerini büyütür ve etrafı artık düşmanlarla doludur.",
        madeYear: '1974',
        duration: '191 dk',
        slug: '/film/the-godfather-part-ii',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000031217/the-godfather-part-ii_220x286.jpg',
      },
      {
        title: "Pan'ın Labirenti",
        description:
          '"En İyi Makyaj" dahil 3 dalda Oscar ödülüne sahip bu etkileyici filmin yönetmen ve senarist koltuğunda Oscar ödüllü Guillermo Del Toro yer alıyor.1944 yılında, peri masallarına hayran olan küçük Ofelia, hamile annesiyle birlikte İspanyol ordusunun acımasız ve sadist komutanlarından biri olan üvey babası Vidal\'in yanına gönderilir.Bir gün ormanın derinliklerinde Ofelia bir labirent bulur. Ve hayatı değişecektir.',
        madeYear: '2006',
        duration: '113 dk',
        slug: '/film/pans-labyrinth',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349511/pans-labyrinth-turkce_220x286.jpg',
      },
      {
        title: 'Şarlo Diktatör',
        description:
          '"En İyi Film" dahil 5 dalda Oscar adaylığı bulunan bu zamanın ötesinde film Charlie Chaplin\'in ilk sesli filmi olma özelliği taşıyor.Bir yanlışlık sonucunda diktatör Adenoid Hynkel ile iyi niyetli Yahudi bir berber yer değiştirir. Bu büyük karışıklık herkesin hayatını değiştirecek olaylara neden olacaktır.',
        madeYear: '1940',
        duration: '120 dk',
        slug: '/film/the-great-dictator',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349485/the-great-dictator_220x286.jpg',
      },
      {
        title: 'Baba',
        description:
          '11 dalda Oscar’a aday olup, En İyi Film, Erkek Oyuncu (Brando) ve Uyarlama Senaryo ödüllerini alan başyapıt, IMDb’nin top 250 listesinde 2. sırada.Corleone ailesi Sicilya’dan göç edip Amerika’da hayatta kalmaya çalışır. Bu sırada kimliği belirsiz kişiler tarafından rahatsız edilip haraç ödemeye zorlanınca, kendilerini savunarak güçlenmeye başlarlar. Öyle ki Amerika’nın önde gelen mafya topluluğundan biri haline gelirler…',
        madeYear: '1972',
        duration: '168 dk',
        slug: '/film/the-godfather',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000031215/the-godfather_220x286.jpg',
      },
      {
        title: 'Jurassic Park ',
        description:
          '"Westworld"ün de yazarı olan Michael Crichton\'ın eserinden uyarlanan 3 Oscar\'lı film, bilgisayar tabanlı efektleri beyazperdede ilk defa kullanan yapıt...Dinozor temalı parkın resmi açılışından önceki özel turunda büyük bir elektrik kesintisi yaşanır. Parkta aynı zamanda dinozor da klonlandığı için, yetkililer kontrolü kaybeder. IMBd Top 250 listesinde yer alan film, En İyi Görsel Efekt, Ses, Ses Efektleri Kurgusu dallarında Oscar aldı.',
        madeYear: '1993',
        duration: '121 dk',
        slug: '/film/jurassic-park',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000074023/jurassic-park-yeni_220x286.jpg',
      },
      {
        title: 'Babam ve Oğlum',
        description:
          'Küçük Deniz, gazetede çalışan babası Sadık ile birlikte, daha önce hiç görmediği dedesinin çiftliğine doğru beklenmedik bir yolculuğa çıkar...Gösterime girdiği dönem büyük ses getiren filmin senarist ve yönetmeni Çağan Irmak. Filmin başrollerini Fikret Kuşkan, Çetin Tekindor, Hümeyra ve Ege Tanman paylaşıyor.',
        madeYear: '2005',
        duration: '112 dk',
        slug: '/film/babam-ve-oglum',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000044714/babam-ve-oglum_220x286.jpg',
      },
    ],
  },
  {
    id: 5,
    name: 'Usta Yönetmenler',
    slug: '/usta-yonetmenler-film',
    contents: [
      {
        title: 'Hannah Arendt',
        description:
          "Felsefe alanında eğitim alan Hannah Arendt, Nazi generallerinden Adolf Eichmann'ın Kudüs'te yargılandığı davaya katılır ve bir takım çalışmalar yapar.Gerçek olaylara dayanan film siyaset bilimci Hannah Arendt'in hayatından kesitler sunarken başrolde bulunan Barbara Sukowa güçlü oyunculuğuyla göz dolduruyor.",
        madeYear: '2012',
        duration: '108 dk',
        slug: '/film/hannah-arendt',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000363768/hannah-arendt_220x286.jpg',
      },
      {
        title: "Dün Gece Soho'da",
        description:
          "Tasarımcı Sandy, gizemli bir şekilde zamanda yolculuk eder. 60'ların Londra'sında hayranı olduğu şarkıcıyla tanışır. Ancak işler hayal ettiği gibi gitmez.2022 Bafta Ödülleri'ne En İyi Müzik dahil toplam iki dalda aday gösterilen yapıt, prömiyerini yaptığı Venedik'in yanı sıra Toronto Film Festivali kapsamında da izleyicisiyle buluştu. 'Queen's Gambit' dizisiyle büyük çıkış yakalayan Anya Taylor-Joy başrolde.",
        madeYear: '2021',
        duration: '112 dk',
        slug: '/film/last-night-in-soho',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359817/last-night-in-soho-turkce_220x286.jpg',
      },
      {
        title: 'Prensesin Macerası',
        description:
          "Avusturyalı prenses Olympia, işlediği skandallar yüzünden saraydan uzaklaştırılır ve Amerikalı bir adamla tanışınca hayatı değişecektir. Oscarlı Sophia Loren'e Maurice Chevalier ve John Gavin'in eşlik ettikleri eğlenceli komedinin yönetmenliğini Oscarlı Michael Curtiz üstleniyor.",
        madeYear: '1960',
        duration: '94 dk',
        slug: '/film/prensesin-macerasi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000032854/breath-of-scandal-a_220x286.jpg',
      },
      {
        title: 'O Kadın',
        description:
          "Başarılı iş kadını Michele, çocukken yaşadığı olayı hafızasından silmişken, bir gün cinsel saldırıya uğrar ve hayatı kökünden değişecektir.En İyi Yabancı Dilde Film ve Kadın Oyuncu dallarında Altın Küre alan, Isabelle Huppert'e ayrıca En İyi Kadın Oyuncu Oscar adaylığı da getiren yapıt, “Temel İçgüdü – Basic Instinct”in yönetmeni Paul Verhoeven imzalı.",
        madeYear: '2016',
        duration: '125 dk',
        slug: '/film/elle',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359172/elle-2016-turkce_220x286.jpg',
      },
      {
        title: 'Acımasız Tanrı',
        description:
          'Oğulları kavgaya karışan iki aile, konuyu medenice konuşmak ister. Ancak konuştukça içinden çıkılamaz hale gelen olay, aileleri kaosa sürükler.Yasmina Reza’nın Tony ödüllü tiyatro oyunundan uyarlanan yapım, yıldız oyuncu kadrosuyla öne çıkarken, yönetmen koltuğunda Oscar’lı usta Roman Polanski oturuyor.',
        madeYear: '2011',
        duration: '76 dk',
        slug: '/film/god-of-carnage',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000029490/god-of-carnage_220x286.jpg',
      },
      {
        title: 'Körkütük',
        description:
          'Dört lise öğretmeni, sosyal ve profesyonel yaşamlarını nasıl etkileyeceğini görmek için günlük olarak alkol tüketmeye başlar.93. Oscar\'larda "En İyi Uluslararası Film" heykelciğini kucaklayan ve "En İyi Yönetmen" adaylığı bulunan yapıt, ilk gösterimini Toronto\'da gerçekleştirdi. Mads Mikkelsen yine kendisine hayran bırakan oyunculuğuyla başrolde...',
        madeYear: '2020',
        duration: '111 dk',
        slug: '/film/another-round-druk',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000326026/another-round-turkce_220x286.jpg',
      },
      {
        title: 'Akıl Oyunları',
        description:
          '"En İyi Film" ve "En İyi Yönetmen" ödülleri dahil 4 dalda Oscar ödülünü kazanan yapımın yönetmenliğini usta yönetmen Ron Howard üstleniyor.John Forbes Nash’in gerçek hayatından ilham alınarak yapılan film, Nobel ödüllü matematik dehasının genç yaşında geliştirdiği kuramlarla adından söz ettirirken, dahilik ve delilik arasındaki ince çizgide aşkı da tatmasını ele alıyor.',
        madeYear: '2001',
        duration: '129 dk',
        slug: '/film/a-beautiful-mind',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000033216/beautiful-mind-a_220x286.jpg',
      },
      {
        title: 'Parçalanmış',
        description:
          'Üç genç kız, alışverişten dönerken bir adam tarafından kaçırılır. Evin bodrumuna kapatılan kızlar ne kadar çabalasalar da bir türlü adamın elinden kurtulamazlar.M. Night Shyamalan\'ın yönetmenliğini ve senaristliğini üstlendiği bu gerilim dolu filmin başrollerinde "Queen\'s Gambit" dizisiyle üne kavuşan son dönemin başarılı aktrislerinden Anya Taylor-Joy yer alıyor.',
        madeYear: '2016',
        duration: '112 dk',
        slug: '/film/parcalanmis',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000118493/split_220x286.jpg',
      },
      {
        title: 'Zamanda Tutsak',
        description:
          "Cennet gibi bir bölgeye tatile gelen insanlar, dinlendikleri tenha bir kumsalın onları hızla yaşlandırdığını ve ömürlerini tek bir güne indirgediğini fark eder. M. Night Shamalayan'ın şaşırtıcı filmlerinden biri daha. Çok beğenilen bir çizgi romandan uyarlanan filmde merak duygusu ve tempo bir an bile düşmüyor.",
        madeYear: '2021',
        duration: '103 dk',
        slug: '/film/old',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350077/old-2021_220x286.jpg',
      },
      {
        title: 'Geçmiş',
        description:
          "Ahmad, dört yıllık ayrılığın ardından Fransız eşi Marie'den boşanmak ister ve işlemleri tamamlamak üzere Tahran'dan Paris'e gelir. Ahmad'ın peşindeki sırlar açığa çıkar.Berenice Bejo'ya Cannes Film Festivali'nde En İyi Kadın Oyuncu Ödülü'nü kazandıran ve En İyi Yabancı Film dalında Altın Küre’ye aday olan yapıt, İranlı yönetmen Asghar Farhadi'nin ülkesi dışında çektiği ilk film.",
        madeYear: '2013',
        duration: '124 dk',
        slug: '/film/the-past-le-passe',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000354865/past-the-2013_220x286.jpg',
      },
      {
        title: 'Her Şey Yolunda',
        description:
          "85 yaşındaki babası Andre'nin felç geçirdiğini öğrenen Emmanuele, babasının yanına gider ve babasının ölmek istediğini öğrenerek hayatı çıkmaza girecektir.Cannes Film Festivali'nde \"Altın Palmiye\" adaylığı bulunan film, gerçek olaylara dayanan romanın yazarı Emmanuele Bernheim'in hayatından kesitler paylaşıyor.",
        madeYear: '2021',
        duration: '108 dk',
        slug: '/film/tout-sest-bien-passe-everything-went-fine',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350298/everything-went-fine_220x286.jpg',
      },
      {
        title: 'Parisli Kadın',
        description:
          "Nişanlısı Jean'den ayrılan Marie St.Clair, Paris'e doğru tek başına yolculuğa çıkar. Kısa süre sonra tanıştığı varlıklı bir ailenin oğlu olan Pierre ile evlenir.1 sene sonra Paris'te Jean ile karşılaşan Marie St.Clair, aşk ve para arasında bir seçim yapmak zorunda kalır. Chaplin'in yazıp yönettiği onlarca filmden biri olan bu yapıt, seyirciyi derin düşüncelere sokuyor.",
        madeYear: '1923',
        duration: '77 dk',
        slug: '/film/a-woman-of-paris-a-drama-of-fate',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350445/a-woman-of-paris_220x286.jpg',
      },
    ],
  },
  {
    id: 6,
    name: 'Kitaptan Filme',
    slug: '/kitaptan-filme-film',
    contents: [
      {
        title: 'Satranç Oyuncusu',
        description:
          "Diego Padilla, İspanya'da yaşayan bir satranç ustasıdır. Fransız Marianne ile evlenip, Nazi işgali altındaki Fransa'ya gittikten sonra hayatları değişecektir.İspanya İç Savaşı yıllarında geçen film, Stefan Zweig’ın romanından uyarlama.",
        madeYear: '2017',
        duration: '98 dk',
        slug: '/film/the-chessplayer-el-jugador-de-ajedrez',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000363766/chessplayer-the_220x286.jpg',
      },
      {
        title: 'Eftihia',
        description:
          "Yunanistan'ın en büyük söz yazarlarından biri olan Eftyhia Papagianopoulou'nun hayat hikayesi karşımıza geliyor.Bu etkileyici biyografi filminin başrolünde Karyofyllia Karabeti yer alırken yönetmen koltuğunda ise Angelos Frantzis oturuyor.",
        madeYear: '2019',
        duration: '117 dk',
        slug: '/film/eftyhia',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000364497/eftyhia-2019_220x286.jpg',
      },
      {
        title: 'Dostumun Yolculuğu',
        description:
          "Köpek Bailey, sahibi Ethan'ın bebek torunu CJ ile kopulmaz bir bağ kurar. Artık Bailey'nin hayattaki tek amacı CJ'yi bütün kötülüklerden korumaktır.A Dog's Purpose filminin devam niteliğinde olan, Gail Mancuso yönetmenliğinde Amerikan aile komedi drama filmidir. Oyuncu kadrosunda Dennis Quaid, Betty Gilpin ve seslendirmede Josh Gad gibi ünlü isimler yer almaktadır.",
        madeYear: '2019',
        duration: '103 dk',
        slug: '/film/a-dogs-journey',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359304/dogs-journey-a_220x286.jpg',
      },
      {
        title: 'Bir Tutam Açlık',
        description:
          'Usta şef Carsten ve eşi Maggie, mutfak dünyasının en yüksek ödülü olan Michelin yıldızına taliptir. Ancak hayat, ikilinin istediği gibi gitmeyecektir.“Game Of Thrones”un Jaime Lannister’ı Nikolaj Coster-Waldau’nun ülkesi Danimarka’da çevirdiği filmin yönetmeni, 2003 yapımı unutulmaz dram “Yeniden Sev Beni” (Reconstruction) ile tanınan Christoffer Boe.',
        madeYear: '2021',
        duration: '98 dk',
        slug: '/film/a-taste-of-hunger',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350303/taste-of-hunger-a-turkce_220x286.jpg',
      },
      {
        title: 'Clifford Büyük Kırmızı Köpek',
        description:
          "Küçük bir kızın minik köpeği, onun sevgisiyle birlikte devasa boyutlara ulaşır.Normal Bridwell'in kitabından, Walt Becker tarafından beyazperdeye uyarlanan eğlenceli film, dünya çapında 107 milyon dolardan fazla hasılat elde etti.",
        madeYear: '2021',
        duration: '92 dk',
        slug: '/film/clifford-buyuk-kirmizi-kopek',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000356736/clifford-the-big-red-dog-turkce_220x286.jpg',
      },
      {
        title: 'Ayrı Dünyalar',
        description:
          "Sosyal adaletsizlik ve gelecek kaygısıyla ilgili yazacağı kitabın araştırmasını yapmak için, kimliğini gizleyerek Fransa'nın kuzeyine giden Marianne'nin hikayesi.Florence Aubenas'nın çok satan romanından uyarlanan yapıt, San Sebastian Film Festivali'nde seyirci ödülü aldı. Gerçek bir öyküden uyarlanan filmde Juliette Binoche her zamanki gibi mükemmel.",
        madeYear: '2021',
        duration: '102 dk',
        slug: '/film/ayri-dunyalar-v4',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350414/ouistreham-between-two-worlds-turkce_220x286.jpg',
      },
      {
        title: 'Kimsesiz Çocuk Remi',
        description:
          "Madam Barber'in büyüttüğü yetim Remi bir gün Madam Barber'in kocası tarafından gezgin müzisyen Vitalis'e satılır. Remi, Vitalis ile gizemli bir maceraya başlar.Hector Malot'un ünlü Sans Famille romanından uyarlanan filmde Remi'nin hüzün dolu hikayesi konu ediliyor. Filmin yönetmen koltuğunda Antoine Blossier oturuyor.",
        madeYear: '2018',
        duration: '103 dk',
        slug: '/film/remi-nobodys-boy-remi-sans-famille',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359290/remi-nobodys-boy_220x286.jpg',
      },
      {
        title: 'Nefret Oyunu',
        description:
          "Etik ilkelerinden ödün vermeden profesyonel başarıya ulaşmaya kararlı olan Lucy, soğuk ve etkili düşmanı Joshua'ya karşı acımasız bir üstünlük savaşına girer.Sally Thorne'un çok satanlar listesine de giren aynı adlı keyifli romanından uyarlanan romantik komedide, 2020 yapımı 'Hayal Adası - Fantasy Island'da da birlikte rol alan Austin Stowell ve Lucy Hale başrollerde.",
        madeYear: '2021',
        duration: '98 dk',
        slug: '/film/nefret-oyunu',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350415/hating-game-the_220x286.jpg',
      },
      {
        title: 'Köpek Oteli',
        description:
          'Andy ve küçük kardeşi Bruce, terk edilmiş bir otel binasını köpekler için harika bir yuvaya çevirmek için kolları sıvarlar.Louis Duncan’ın aynı adlı romanından sinemaya uyarlanan filmin yönetmenliğini Thor Freudental yaparken, başrollerde ise Emma Roberts, Lisa Kudrow, Don Cheadle gibi ünlü isimler var.',
        madeYear: '2009',
        duration: '95 dk',
        slug: '/film/hotel-for-dogs',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000033450/hotel-for-dogs_220x286.jpg',
      },
      {
        title: 'Kutupta Macera',
        description:
          "Spitsbergen adasında kar fırtınasına yakalanan üç çocuk, tek başlarına kalır ve çetin bir hayatta kalma mücadelesinin tam içine düşerler.Leif Hamre'nin romanından beyazperdeye uyarlanan film hem masalsı hem de dramatik bir serüvenin deneyimini izleyiciye sunuyor.",
        madeYear: '2014',
        duration: '86 dk',
        slug: '/film/operation-arctic',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359163/operation-arctic_220x286.jpg',
      },
      {
        title: 'O Kadın',
        description:
          "Başarılı iş kadını Michele, çocukken yaşadığı olayı hafızasından silmişken, bir gün cinsel saldırıya uğrar ve hayatı kökünden değişecektir.En İyi Yabancı Dilde Film ve Kadın Oyuncu dallarında Altın Küre alan, Isabelle Huppert'e ayrıca En İyi Kadın Oyuncu Oscar adaylığı da getiren yapıt, “Temel İçgüdü – Basic Instinct”in yönetmeni Paul Verhoeven imzalı.",
        madeYear: '2016',
        duration: '125 dk',
        slug: '/film/elle',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359172/elle-2016-turkce_220x286.jpg',
      },
      {
        title: 'Samsam',
        description:
          'Gerçek süper gücünü bulmaya çalışan Samsam, arkadaşlarıyla eğlenceli bir maceraya atılır.3 milyon dolardan fazla gişe yapan animasyon, pozitif mesajlarıyla öne çıkıyor.',
        madeYear: '2019',
        duration: '74 dk',
        slug: '/film/samsam',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000239704/samsam-turkce_220x286.jpg',
      },
    ],
  },
  {
    id: 7,
    name: 'Şarlo’dan Sevgilerle',
    slug: '/sarlodan-sevgilerle',
    contents: [
      {
        title: 'Yumurcak',
        description:
          "Kimsesiz bir bebeği sahiplenen Şarlo’nun hikayesi... Yeni doğan bebeğiyle kocası tarafından terk edilen Edna, ona bakamayacağını düşünür ve çocuğu sokağa bırakır.Tesadüfen çocuğa rastlayan Şarlo, vicdanının sesini dinler, onu sahiplenerek büyütür. Sinema tarihinin en büyük klasiklerinden olan film, IMDb'de top 250 listesinde yer alıyor.",
        madeYear: '1921',
        duration: '50 dk',
        slug: '/film/the-kid-v3',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350452/kid-the-1921_220x286.jpg',
      },
      {
        title: 'Altına Hücum',
        description:
          'Film, Alaska\'da altın avına çıkan Şarlo\'nun başından geçen olayları anlatıyor.Chaplin\'in "Beni bu filmle hatırlayın" dediği yapım, 1943\'deki Oscar\'da "En İyi Müzik" ve "En İyi Ses" ödüllerinde adaylığı bulunuyor.',
        madeYear: '1925',
        duration: '69 dk',
        slug: '/film/the-gold-rush',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350444/gold-rush-the_220x286.jpg',
      },
      {
        title: 'Asri Zamanlar',
        description:
          'Çalıştığı fabrikada strese dayanamayıp sinir krizi geçiren Şarlo, birtakım olaylar sonucu hapse düşer. Çıktığında yetim bir kızla tanışacaktır.Sinema tarihinin ve Şarlo’nun en büyük filmlerinden. Chaplin’ın son sessiz filmi olan yapımın çekimleri 10 ayda tamamlandı.',
        madeYear: '1936',
        duration: '83 dk',
        slug: '/film/modern-times',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349741/modern-times_220x286.jpg',
      },
      {
        title: 'Şarlo Diktatör',
        description:
          '"En İyi Film" dahil 5 dalda Oscar adaylığı bulunan bu zamanın ötesinde film Charlie Chaplin\'in ilk sesli filmi olma özelliği taşıyor.Bir yanlışlık sonucunda diktatör Adenoid Hynkel ile iyi niyetli Yahudi bir berber yer değiştirir. Bu büyük karışıklık herkesin hayatını değiştirecek olaylara neden olacaktır.',
        madeYear: '1940',
        duration: '120 dk',
        slug: '/film/the-great-dictator',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349485/the-great-dictator_220x286.jpg',
      },
      {
        title: 'Şehir Işıkları',
        description:
          'İşsiz güçsüz, sevimli bir serseri, sokakta çiçek satan kör bir kadına aşık olur ve gözlerinin açılması için para bulmaya çalışır.Orson Welles, Stanley Kubrick, Tarkovski, Guillermo Del Toro ve bizzat Chaplin’ın favori filmi “Şehir Işıkları”, 1931’de ABD’de en çok izlenen yapım oldu. Sinema tarihinin bu altın klasiğinin müzikleri de Chaplin’e ait.',
        madeYear: '1931',
        duration: '82 dk',
        slug: '/film/city-lights',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349742/city-lights_220x286.jpg',
      },
      {
        title: 'Sahne Işıkları',
        description:
          '"En İyi Film Müziği" Oscar Ödülü\'ne sahip olan bu etkileyici yapımın yönetmenliğini ve başrolünü usta oyuncu Charlie Chaplin üstleniyor.Eski şöhretini kaybetmiş olan sahne sanatçısı Calvero, intihara teşebbüs eden komuşusunun hayatını kurtarır. Belden aşağısı felç geçiren ve eski bir balerin olan kadın, Calvero\'nun çabasıyla sahneye dönmek için güvenini kazanmaya çalışır.',
        madeYear: '1952',
        duration: '131 dk',
        slug: '/film/limelight',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349483/limelight-1952_220x286.jpg',
      },
      {
        title: 'Mösyö Verdu',
        description:
          '"En İyi Özgün Senaryo" Oscar adaylığı bulunan filmin yönetmenliğini ve başrolünü usta oyuncu Charlie Chaplin üstleniyor.Sıradan bir aile babası olan Mösyö Verdu, bir bankada gişe memuru olarak çalışırken işini kaybeder. Ailesini geçindirebilmek için zengin olan dulları ayartarak onları öldürme planları yapacaktır.',
        madeYear: '1947',
        duration: '118 dk',
        slug: '/film/monsieur-verdoux',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349484/monsieur-verdoux_220x286.jpg',
      },
      {
        title: 'Parisli Kadın',
        description:
          "Nişanlısı Jean'den ayrılan Marie St.Clair, Paris'e doğru tek başına yolculuğa çıkar. Kısa süre sonra tanıştığı varlıklı bir ailenin oğlu olan Pierre ile evlenir.1 sene sonra Paris'te Jean ile karşılaşan Marie St.Clair, aşk ve para arasında bir seçim yapmak zorunda kalır. Chaplin'in yazıp yönettiği onlarca filmden biri olan bu yapıt, seyirciyi derin düşüncelere sokuyor.",
        madeYear: '1923',
        duration: '77 dk',
        slug: '/film/a-woman-of-paris-a-drama-of-fate',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350445/a-woman-of-paris_220x286.jpg',
      },
      {
        title: 'Şarlo Milyoner',
        description:
          "Kısa yoldan zengin olmaya çalışan Şarlo, kasabanın varlıklı ailelerinden birinin kızı Tillie'yi kendine âşık eder. Babasının rızası olmadığı için kaçmaya karar verirler. Saf âşık Tillie, babasının parasını çalıp Şarlo ile şehre yolculuğa çıkar. Chaplin’in ilk uzun metraj filmi.",
        madeYear: '1914',
        duration: '85 dk',
        slug: '/film/tillies-punctured-romance',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350446/tillies-punctured-romance_220x286.jpg',
      },
      {
        title: 'Şarlo Sirkte',
        description:
          'Hayatının aşkını çalıştığı sirkte bulan bir adamın hikayesi.1929’daki ilk Oscar ödül töreninde ‘Onur Ödülü’ alan Chaplin, kendine has üslubuyla güldürmeye ve hüzünlendirmeye devam ediyor.',
        madeYear: '1928',
        duration: '68 dk',
        slug: '/film/sarlo-sirkte',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350443/circus-the-1928_220x286.jpg',
      },
      {
        title: 'Şarlo Kısa Filmleri 4',
        description:
          'Chaplin’in 1914’te yönetip rol aldığı sessiz kısa filmler, box-set halinde karşınızda.Dördüncü bölümdeki kısalar: “Şarlo Flört Ediyor-Getting Acquainted” ve “Şarlo Nüdist-His Prehistoric Past”.',
        madeYear: '1914',
        duration: '35 dk',
        slug: '/film/chaplin-short-films-part-4',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349758/chaplin-short-films_220x286.jpg',
      },
      {
        title: 'Şarlo Kısa Filmleri 3',
        description:
          "Chaplin’in 1914’te yönetip rol aldığı sessiz kısa filmler, box-set halinde karşınızda.Üçüncü bölümdeki kısalar: “Şarlo Koket-The Masquerader”, “Şarlo Hemşire-His New Profession”, “Şarlo ve Tombul-The Rounders”, “Şarlo Hademe-The New Janitor”, “Şarlo'nun Aşk Sancıları-Those Love Pangs”, “Şarlo Fırıncı-Dough and Dynamite”, “Şarlo Yarışlarda-Gentlemen of Nerve”, “Şarlo Müzisyen-His Musical Career” ve “Şarlo Baba-His Trysting Place”.",
        madeYear: '1914',
        duration: '138 dk',
        slug: '/film/chaplin-short-films-part-3',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349757/chaplin-short-films_220x286.jpg',
      },
    ],
  },
  {
    id: 8,
    name: 'Farklı Diyarlara',
    slug: '/farkli-diyarlara-film',
    contents: [
      {
        title: 'Babalar Takımı',
        description:
          "Claude ve Ruby, sorunlu bir çift olarak görünse de birbirlerini delicesine seven ikilidir. Claude'un amcası tutuklandığında Claude ailesine destek olmaya gider.Başrolde bulunan Billy Bob Thornton'un yönetmenliğini ve senaristliğini üstlendiği bu kara komedi filminde ona Oscarlı oyuncu Laura Dern eşlik ediyor.",
        madeYear: '2001',
        duration: '97 dk',
        slug: '/film/daddy-and-them',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000366734/daddy-and-them_220x286.jpg',
      },
      {
        title: 'Alpinist: Dağcı',
        description:
          "Serbest solo dağ tırmanıcısı olan Marc-Andre Leclerc'in hayatını ve adrenalin dolu tırmanışlarını izliyoruz.23 yaşındaki dağcının nefes kesen macerasını anlatan film, 1,5 milyon dolara yakın gişe yaptı.",
        madeYear: '2021',
        duration: '88 dk',
        slug: '/film/the-alpinist',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359816/alpinist-the-2021_220x286.jpg',
      },
      {
        title: 'Big Kill Kasabası',
        description:
          "Eşinin ölümünün ardından yola çıkan Jim, bu yolculukta Jake ve Travis'le tanışır. Big Kill kasabasına geldiklerinde düşündüklerinden bambaşka bir şeyle karşılaşırlar.'Kaybolan - The Vanished''de de izlediğimiz Jason Patric'in başrolde yer aldığı yapıt, 'Cowboys And Indians' dergisi tarafından 21. yüzyılın en iyi Western'lerinden biri olarak listelendi.",
        madeYear: '2019',
        duration: '121 dk',
        slug: '/film/big-kill-kasabasi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359196/big-kill_220x286.jpg',
      },
      {
        title: 'Durgun Su',
        description:
          "Bill, Marsilya'da okuyan kızı Allison'ın, işlemediğini iddia ettiği bir cinayetin zanlısı olarak tutuklanması sonucu kızını kurtarmak için Fransa'ya gider.Oscar ödüllü başarılı aktör Matt Damon'ın çizdiği baba figürüyle başrolde yer aldığı drama türündeki yapımda ona küçük gün ışığım (Little Miss Sunshine) filmiyle küçük yaşında Oscar adaylığı elde eden Abigail Breslin eşlik ediyor.",
        madeYear: '2021',
        duration: '132 dk',
        slug: '/film/stillwater',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000363280/stillwater-2021_220x286.jpg',
      },
      {
        title: 'Vahşi Dostum',
        description:
          "On yaşındaki Mia ailesiyle birlikte Güney Afrika'ya taşınmak zorunda kalır.Burada yavru beyaz aslan Charlie'yle kopulmaz bir bağ kurar.Amerika ve Güney Afrika ortak yapımı filmin oyuncu kadrosunda ünlü oyuncu Melanie Laurent, yönetmenliğinde ise Gilles De Maistre bulunuyor. Duygusal ve macera geçişleri olan bir aile filmidir.",
        madeYear: '2018',
        duration: '94 dk',
        slug: '/film/mia-et-le-lion-blanc-mia-and-the-white-lion',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000363250/mia-and-the-white-lion_220x286.jpg',
      },
      {
        title: 'Bir Tutam Açlık',
        description:
          'Usta şef Carsten ve eşi Maggie, mutfak dünyasının en yüksek ödülü olan Michelin yıldızına taliptir. Ancak hayat, ikilinin istediği gibi gitmeyecektir.“Game Of Thrones”un Jaime Lannister’ı Nikolaj Coster-Waldau’nun ülkesi Danimarka’da çevirdiği filmin yönetmeni, 2003 yapımı unutulmaz dram “Yeniden Sev Beni” (Reconstruction) ile tanınan Christoffer Boe.',
        madeYear: '2021',
        duration: '98 dk',
        slug: '/film/a-taste-of-hunger',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350303/taste-of-hunger-a-turkce_220x286.jpg',
      },
      {
        title: 'Kimsesiz Çocuk Remi',
        description:
          "Madam Barber'in büyüttüğü yetim Remi bir gün Madam Barber'in kocası tarafından gezgin müzisyen Vitalis'e satılır. Remi, Vitalis ile gizemli bir maceraya başlar.Hector Malot'un ünlü Sans Famille romanından uyarlanan filmde Remi'nin hüzün dolu hikayesi konu ediliyor. Filmin yönetmen koltuğunda Antoine Blossier oturuyor.",
        madeYear: '2018',
        duration: '103 dk',
        slug: '/film/remi-nobodys-boy-remi-sans-famille',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359290/remi-nobodys-boy_220x286.jpg',
      },
      {
        title: 'Tercüman',
        description:
          "Çeviri sırasında dil sürçmesi sonucu siyasi mülteci olarak Avustralya'da kalan Sami, kardeşi tutuklanınca her şeyi riske atarak Suriye'ye dönmeye çalışır.Gerilimin bir an bile düşmediği film, çok uluslu bir ortak yapım olarak öne çıkıyor. Mültecilik sorununa farklı açıdan bir bakış.",
        madeYear: '2020',
        duration: '100 dk',
        slug: '/film/tercuman',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350417/translator-the-2020_220x286.jpg',
      },
      {
        title: 'Pazartesi',
        description:
          "Bir cuma günü, cıvıl cıvıl bir hafta sonu kaçamağına yol açabilir. Peki ya kaçınılmaz pazartesiye geldiğinizde ne olur?Prömiyerini Toronto Film Festivali'nde gerçekleştiren yapıtta Denise Gough ve Sebastian Stan'i izliyoruz.",
        madeYear: '2020',
        duration: '116 dk',
        slug: '/film/monday-v3',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000356719/monday-2020_220x286.jpg',
      },
      {
        title: 'Rüzgârın Kardeşleri',
        description:
          "Kardeşi tarafından yuvasından atılmış bir kartal yavrusunun hayatı genç Lukas ile kesişir. Lukas, kartalın doğada tek başına yaşaması için bakacaktır.Başarılı oyuncu Jean Reno'nun da oyuncu kadrosunda yer aldığı bu macera türündeki filmin yönetmenliğini Gerardo Olivares ve Otmar Penker üstleniyor.",
        madeYear: '2015',
        duration: '93 dk',
        slug: '/film/brothers-of-the-wind',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000151453/brothers-of-the-wind_220x286.jpg',
      },
      {
        title: 'Masumiyetin Dayanılmaz...',
        description:
          "Genç ve güzel Claire, üvey annesinin onu kıskanması yüzünden hizmetçi gibi çalışmaktadır ve onun ölmesini ister. Claire, kendisine uzakta yeni bir dünya kurar.Başarılı aktris Isabelle Huppert ve Lou De Laage'nin başrollerinde yer aldıkları bu suç-drama türündeki filmin yönetmenliğini Anne Fontaine üstleniyor.",
        madeYear: '2019',
        duration: '107 dk',
        slug: '/film/blanche-comme-neige-pure-as-snow',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359173/white-as-snow_220x286.jpg',
      },
      {
        title: 'Kutupta Macera',
        description:
          "Spitsbergen adasında kar fırtınasına yakalanan üç çocuk, tek başlarına kalır ve çetin bir hayatta kalma mücadelesinin tam içine düşerler.Leif Hamre'nin romanından beyazperdeye uyarlanan film hem masalsı hem de dramatik bir serüvenin deneyimini izleyiciye sunuyor.",
        madeYear: '2014',
        duration: '86 dk',
        slug: '/film/operation-arctic',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359163/operation-arctic_220x286.jpg',
      },
    ],
  },
  {
    id: 9,
    name: 'Seri Filmler',
    slug: '/seri-filmler-film',
    contents: [
      {
        title: 'Köstebekgiller 2: Gölgenin Tılsımı',
        description:
          "Vaktiyle, yaptığı kötülükler yüzünden, ağaca dönüşen Gölge'yi, Köstebekgiller'den Köstan amca, iyi bir insan olması sözüne karşılık kurtarmıştır.Ancak Gölge sözünü tutmamış ve çalışmakta olduğu müzayede salonundan, kraliçe Sora'nın tılsımlı olduğu söylenen elbisesini çalmıştır. Elbiseye dokunur dokunmaz da, içinde olan kötülükle birlikte, Gölge yeniden ağaca dönüşmeye başlamıştır.",
        madeYear: '2016',
        duration: '83 dk',
        slug: '/film/kostebekgiller-2-golgenin-tilsimi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000182629/kostebekgiller-2-golgenin-tilsimi_220x286.jpg',
      },
      {
        title: 'Amman Hocam 2',
        description:
          "Fransa'nın en kötü öğretmenleri çok gizli bir görev için İngiltere'ye giderler. Bu sefer sınıfın başarısı tüm kraliyetin geleceğine etki edecektir.Serinin devam eden filminde başrolleri Kev Adams ve Gaia Weiss üstleniyorlar.",
        madeYear: '2015',
        duration: '88 dk',
        slug: '/film/serial-teachers-2',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359166/les-profs2_220x286.jpg',
      },
      {
        title: 'Amman Hocam',
        description:
          'Kenar bir mahallede yer alan lise yılın en kötü okulu seçilmiştir. Bu durumu kurtarmak için yetkililerin dahiyane bir fikri vardır, en kötü öğretmenleri seçmektir.Bir lisesinin itibarını kurtarmaya çalışan öğretmen ve öğrencilerin hikayesini anlatan komedi dolu filmin yönetmenliğini oyuncu kadrosunda da bulunan Pierre-Francois Martin-Laval üstleniyor.',
        madeYear: '2013',
        duration: '88 dk',
        slug: '/film/serial-teachers',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359165/les-profs-turkce_220x286.jpg',
      },
      {
        title: 'Zagor Kara Korsanın Hazineleri',
        description:
          'Zagor ve yardımcısı Çiko, eski dostları bir albayın idamla yargılanan kardeşini kurtarmaya çalışırken, azılı bir korsan çetesiyle de mücadele eder.Efsane çizgi romandan yapılan ilk yerli uyarlama. Siyah-beyaz çekilen film, olabildiğince çizgi romana sadık kalıyor. Uzun yıllar kayıp olan film, yıllar sonra yurt dışında bulunup restore edildi.',
        madeYear: '1971',
        duration: '78 dk',
        slug: '/film/zagor-kara-korsanin-hazineleri',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000044882/zagor-kara-korsanin-hazineleri-1971_220x286.jpg',
      },
      {
        title: 'Zagor Kara Bela',
        description:
          "Kızılderililerin 'Kanlı Hayalet' tarafından öldürülmesi üzerine kabile reisi Satko, baltalı ilah Zagor ve Çiko'nun yardımıyla harekete geçer.Ünlü çizgi romandan yapılan yerli uyarlamaların ikincisi. Uzun yıllar kayıp olan \"Zagor\" filmlerinin temiz negatifleri yurt dışında bulunmuş ve restore edilmişti.",
        madeYear: '1971',
        duration: '74 dk',
        slug: '/film/zagor-kara-bela',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000044880/zagor-kara-bela-1971_220x286.jpg',
      },
      {
        title: 'Üç Arkadaş',
        description:
          'Murat, Mıstık ve Artin adlı üç yoksul arkadaş, tesadüfen karşılaştıkları gözleri görmeyen fakir bir kızı para bularak ameliyat ettirmeye çalışır.1958 tarihli siyah-beyaz klasiğin renkli yeniden çevrimi olan film, hikayesindeki duyarlılık ve hüzünle seyirciyi bir kez daha avucuna alıyor.',
        madeYear: '1972',
        duration: '91 dk',
        slug: '/film/titletur-v99',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000357991/uc-arkadas2_220x286.jpg',
      },
      {
        title: 'Üç Arkadaş',
        description:
          "Hayat mücadelesi veren üç fakir arkadaş, gözleri görmeyen Gül'ü tanıdıktan sonra onu tedavi ettirmek için elinden geleni yapar.Türk sinemasının en çok gişe yapan filmlerinden olan bu ölümsüz klasiğin senaryosunda Metin Erksan ve Ertem Göreç’in de imzası var.",
        madeYear: '1958',
        duration: '85 dk',
        slug: '/film/uc-arkadas',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000357990/uc-arkadas-1958_220x286.jpg',
      },
      {
        title: 'Turist Ömer Yamyamlar Arasında',
        description:
          "Turist Ömer'in koluna bilmeden yaptırdığı dövmenin bir hazine haritası olduğu anlaşılır. Bunun üzerine Afrika'ya kadar uzanan, eğlenceli macera başlar.Açılış jeneriği animasyonu ve Alışık'ın seslendirdiği şarkısıyla da hatırlanan çılgın komedi. Sadri Alışık, arada 'Turist Ömer' olarak gözüktüğü \"Ayşecik Çıtı Pıtı Kız\" ve \"Ayşecik Cimcime Hanım\" filmleri dışında, serinin 5. Filmiyle kahkahaya boğuyor.",
        madeYear: '1970',
        duration: '81 dk',
        slug: '/film/turist-omer-yamyamlar-arasinda',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000044752/turist-omer-yamyamlar-arasinda-yeni_220x286.jpg',
      },
      {
        title: 'Turist Ömer Uzay Yolunda',
        description:
          'Kaptan Kirk ve mürettebatı,Orin7 gezegenine indiğinde tuhaf olaylarla karşılaşır.Orada karısıyla yaşayan çılgın profesör zaman makinesiyle Turist Ömer\'i gezegene getirir."Uzay Yolu - Star Trek" dizisinin ülkemizde meşhur olduğu yıllarda çekilen, Mr. Spock da dahil dizideki karakterlere benzeyen türk oyuncuların rol aldığı filmin konusu, orijinal serinin ilk bölümünden uyarlama.',
        madeYear: '1973',
        duration: '69 dk',
        slug: '/film/turist-omer-uzay-yolunda',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000044751/turist-omer-uzay-yolunda_220x286.jpg',
      },
      {
        title: 'Turist Ömer Boğa Güreşçisi',
        description:
          "Bulduğu cüzdanın şarkıcı Rodrİgez'e ait olması üzerine ödül olarak İspanya'ya seyahate giden Ömer, burada yanlışlıkla bir soyguna karışınca boğa güreşçisi kılığına girer.Her filminde ayrı bir diyara giden Turist Ömer, serinin altıncı filminde kendini arenada, boğaların arasında buluyor.",
        madeYear: '1971',
        duration: '94 dk',
        slug: '/film/turist-omer-boga-gurescisi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000044750/turist-omer-boga-gurescisi_220x286.jpg',
      },
      {
        title: "Turist Ömer Arabistan'da",
        description:
          "Ömer, bir kumarhane sahibinin öldürülmesi üzerine arkadaşı komiser Ferit'le birlikte delil toplamak için Arabistan'a gider.İlk kez 'Helal Olsun Ali Abi' filminde yan karakter olarak gözüken fakir, neşeli, muzip ve 'şapkalı' kahramanımız, 1964'te 'Turist Ömer' adlı film serisiyle büyük ilgi gördü. Kültür farklılıklarına değinen 'Arabistan' macerası, serinin 4. filmi.",
        madeYear: '1969',
        duration: '78 dk',
        slug: '/film/turist-omer-arabistanda',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000044749/turist-omer-arabistanda_220x286.jpg',
      },
      {
        title: "Battal Gazi'nin Oğlu",
        description:
          "Battal Gazi şehit olduktan sonra oğlu tesadüfler sonucu bir Bizans prensi olarak yetiştirilir. Prens gerçekten kim olduğunu öğrendiğinde Bizans'ın korkulu rüyası olur.",
        madeYear: '1974',
        duration: '73 dk',
        slug: '/film/battal-gazinin-oglu',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000028919/battal-gazinin-oglu_220x286.jpg',
      },
    ],
  },
  {
    id: 10,
    name: 'Ailece',
    slug: '/ailece-film',
    contents: [
      {
        title: 'Küçük Komik Masallar',
        description:
          "Yolunu kaybetmiş ufak bir cırcır böceği, yaptığı dedikodularla küçük hayvanların yaşadığı krallığın altını üstüne getirir.Avrupa'nın önde gelen şirketlerinden On Animasyon stüdyolarına ait, ailece izlenecek eğleceli bir animasyon yapımıdır.",
        madeYear: '2017',
        duration: '84 dk',
        slug: '/film/tall-tales-from-the-magical-garden-of-antoon-kring',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000364500/tall-tales_220x286.jpg',
      },
      {
        title: 'Köstebekgiller 2: Gölgenin Tılsımı',
        description:
          "Vaktiyle, yaptığı kötülükler yüzünden, ağaca dönüşen Gölge'yi, Köstebekgiller'den Köstan amca, iyi bir insan olması sözüne karşılık kurtarmıştır.Ancak Gölge sözünü tutmamış ve çalışmakta olduğu müzayede salonundan, kraliçe Sora'nın tılsımlı olduğu söylenen elbisesini çalmıştır. Elbiseye dokunur dokunmaz da, içinde olan kötülükle birlikte, Gölge yeniden ağaca dönüşmeye başlamıştır.",
        madeYear: '2016',
        duration: '83 dk',
        slug: '/film/kostebekgiller-2-golgenin-tilsimi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000182629/kostebekgiller-2-golgenin-tilsimi_220x286.jpg',
      },
      {
        title: 'Gamba: Macera Çetesi',
        description:
          "Atsuo Saito'nun romanından sinemaya uyarlanan, Doreamon'un yapımcılarından heyecanlı ve sürükleyici bir animasyon!Hayatında hiç okyanus görmemiş fare Gamba, bu merakını gidermek için arkadaşı Mampuku ile yola çıkar. Ancak suya ulaşamadan kendilerini limandaki gemi fareleri arasında bulunca yolculukları zorlu bir hal alır.",
        madeYear: '2015',
        duration: '89 dk',
        slug: '/film/gamba-macera-cetesi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000141643/gamba_220x286.jpg',
      },
      {
        title: 'Spirit: Özgür Ruh',
        description:
          'Akrobat olan annesini kaybetmiş küçük Lucky Prescott, Spirit adında yabani bir atı kurtarmak için arkadaşlarıyla beraber mücadele verecektir.Jake Gyllenhaal ve Julianne Moore gibi yıldız isimlerin seslendirme kadrosunda bulunduğu bu animasyon filminin başrolünde yer alan Lucky karakterini "Dora ve Kayıp Altın Şehri" filmiyle tanınan Isabela Merced seslendiriyor.',
        madeYear: '2021',
        duration: '84 dk',
        slug: '/film/spirit-untamed',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350074/spirit-untamed_220x286.jpg',
      },
      {
        title: "Emıly'nin Sihirli Yolculuğu",
        description:
          "Annesiyle birlikte yaşayan küçük Emily, bulduğu gizemli bir sandığın açtığı kapı sayesinde büyülü bir dünyadaki tehlikeli maceralara adım atar.Busan Uluslararası Film Festivali'nde prömiyer yapan, Marcus Ovnell imzalı filmin oyuncu kadrosunda Tipper Seifert-Cleveland, Harrıet Slater ve Chelsea Edge gibi isimler rol alıyor.",
        madeYear: '2020',
        duration: '81 dk',
        slug: '/film/faunutland-and-the-lost-magic',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349284/fauntland-and-the-lost-magic_220x286.jpg',
      },
      {
        title: 'Zaman Gezginleri: Korsan...',
        description:
          "Kayıp bir hazinenin peşinde zamanda yolculuk yapan korsanlar kendilerini günümüzde teknoloji dahisi bir grup çocukla savaşırken bulur.Rick Spalla'nın yönettiği filmin başrollerinde Denise Richards, Malcolm Mcdowell ve Eric Balfour'u izliyoruz.",
        madeYear: '2020',
        duration: '89 dk',
        slug: '/film/timecrafters-the-treasure-of-pirates-cove',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349570/timecrafters-2020_220x286.jpg',
      },
      {
        title: 'Kahraman Ördek',
        description:
          "Küçük bir adada huzurlu bir yaşam süren bir ördek kabilesi ile adayı işgal eden yabanördeği sürüsünün arasında soğuk savaş başlar.Filmin yönetmenliğini ''Mr Magorium's Wonder Emporium'' gibi filmlerde de imzası bulunan Viktor Lakisov üstlenirken seslendirme kadrosunda Michael Gross, Robbie Daymond ve Mark Decarlo gibi isimler var.",
        madeYear: '2016',
        duration: '78 dk',
        slug: '/film/kahraman-ordek',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000124682/quackerz-turkce_220x286.jpg',
      },
      {
        title: 'Turu Ve Sirk Maceraları',
        description:
          'Kendine has görüntüsü ve yumurtlama şekli yüzünden alay konusu olan Tavuk Turuleca, yeni sahibi yaşlı İsabel yüzünden büyük bir maceraya atılır.İspanya\'nın Prestijli Goya Ödülleri\'nde "En İyi Animasyon" dalında ödül kazanan filmin yönetmen koltuğunda Eduardo Gondell ve Victor Monigote var. Sevimli animasyonun seslendirme kadrosunda Eva Hache, Jose Mota ve Ana Angeles Garcia gibi isimler bulunuyor.',
        madeYear: '2019',
        duration: '76 dk',
        slug: '/film/la-gallina-turuleca',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000211005/turu-the-wacky-hen_220x286.jpg',
      },
      {
        title: 'Kuzular Firarda',
        description:
          "Çiftlikteki hayatından sıkılan sevimli koyun Shaun biraz değişiklik isteyince işler tamamen sarpa sarar.2016 Oscar'larında en iyi animasyon dalında aday olan film, prömiyerini 31. Sundance Film Festivali'nde yaptı. Mark Burton ve Richard Starzak ikilisinin yönettiği filmin seslendirme kadrosunda Justin Fletcher, John Sparkes ve Omid Djalili gibi isimler var.",
        madeYear: '2015',
        duration: '81 dk',
        slug: '/film/kuzular-firarda',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000066512/shaun-the-sheep-movie_220x286.jpg',
      },
      {
        title: "Crood'lar 2: Yeni Bir Çağ",
        description:
          "Bu zamana kadar başlarına gelen her felaketten kurtulmayı başaran Crood'lar, bu kez kendilerinden daha üstte bir aileyle birlikte yaşamaya başlarlar.2014 yılında 'En İyi Animasyon' Oscar adaylığı bulunan filmin devamının kamera arkasında Joel Crawford oturuyor. Nicholas Cage, Emma Stone ve Ryan Reynolds'ın sesleriyle hayat verdikleri yapıt, dünya çapında 210 milyon dolardan fazla gişe hasılatı elde etti.",
        madeYear: '2020',
        duration: '91 dk',
        slug: '/film/the-croods-a-new-age',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000340899/croods-a-new-age-the_220x286.jpg',
      },
      {
        title: 'Ninja Kaplumbağalar: Gölgelerin İçinden',
        description:
          "Kaplumbağaların düşmanı Shredder, yeni ortakları sayesinde daha da güçlüdür ve savaş hiç olmadığı kadar zorlu geçecektir.Dave Green'in yönettiği aksiyon dolu filmin başrollerinde Megan Fox, Will Arnett ve Tyler Perry gibi yıldız isimleri izliyoruz.",
        madeYear: '2016',
        duration: '107 dk',
        slug: '/film/ninja-kaplumbagalar-golgelerin-icinden',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000104711/teenage-mutant-ninja-turtles-out-shadows-2016_220x286.jpg',
      },
      {
        title: 'Köfte Yağmuru 2',
        description:
          'Mucit Flint Lockwood bu kez dünyayı, icat ettiği makinenin yarattığı yiyecek-hayvan karışımı, mutant yaratıklardan kurtarmak zorundadır.Dünya çapında ses getiren "Köfte Yağmuru"nun devam filminde yönetmen koltuğu Cody Cameron ve Kris Pearn\'e emanet edildi. Filmin seslendirme kadrosunda Bill Hader, Anna Faris ve Will Forte gibi isimler var.',
        madeYear: '2013',
        duration: '90 dk',
        slug: '/film/cloudy-with-a-chance-of-meatballs-2',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000309973/cloudy-with-chance-meatballs-2_220x286.jpg',
      },
    ],
  },
  {
    id: 11,
    name: 'Eleştirmenlerin Gözdesi',
    slug: '/elestirmenlerin-gozdesi-film',
    contents: [
      {
        title: 'Hannah Arendt',
        description:
          "Felsefe alanında eğitim alan Hannah Arendt, Nazi generallerinden Adolf Eichmann'ın Kudüs'te yargılandığı davaya katılır ve bir takım çalışmalar yapar.Gerçek olaylara dayanan film siyaset bilimci Hannah Arendt'in hayatından kesitler sunarken başrolde bulunan Barbara Sukowa güçlü oyunculuğuyla göz dolduruyor.",
        madeYear: '2012',
        duration: '108 dk',
        slug: '/film/hannah-arendt',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000363768/hannah-arendt_220x286.jpg',
      },
      {
        title: 'Alpinist: Dağcı',
        description:
          "Serbest solo dağ tırmanıcısı olan Marc-Andre Leclerc'in hayatını ve adrenalin dolu tırmanışlarını izliyoruz.23 yaşındaki dağcının nefes kesen macerasını anlatan film, 1,5 milyon dolara yakın gişe yaptı.",
        madeYear: '2021',
        duration: '88 dk',
        slug: '/film/the-alpinist',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359816/alpinist-the-2021_220x286.jpg',
      },
      {
        title: "Dün Gece Soho'da",
        description:
          "Tasarımcı Sandy, gizemli bir şekilde zamanda yolculuk eder. 60'ların Londra'sında hayranı olduğu şarkıcıyla tanışır. Ancak işler hayal ettiği gibi gitmez.2022 Bafta Ödülleri'ne En İyi Müzik dahil toplam iki dalda aday gösterilen yapıt, prömiyerini yaptığı Venedik'in yanı sıra Toronto Film Festivali kapsamında da izleyicisiyle buluştu. 'Queen's Gambit' dizisiyle büyük çıkış yakalayan Anya Taylor-Joy başrolde.",
        madeYear: '2021',
        duration: '112 dk',
        slug: '/film/last-night-in-soho',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359817/last-night-in-soho-turkce_220x286.jpg',
      },
      {
        title: 'Kara Yılan İnliyor',
        description:
          "Tanrı korkusuyla yaşayan eski bir blues müzisyeni, yolda bulup evine aldığı 'sorunlu' bir genç kadını 'doğru yol'a sokmaya çalışır.Craig Brewer'ın yönetmenliğini ve senaristliğini üstlendiği bu etkileyici yapımın başrollerinde bulunan Samuel L. Jackson ve Christina Ricci güçlü oyunculuklarıyla adından söz ettiriyor.",
        madeYear: '2006',
        duration: '110 dk',
        slug: '/film/kara-yilan-inliyor',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000034116/black-snake-moan_220x286.jpg',
      },
      {
        title: 'Eftihia',
        description:
          "Yunanistan'ın en büyük söz yazarlarından biri olan Eftyhia Papagianopoulou'nun hayat hikayesi karşımıza geliyor.Bu etkileyici biyografi filminin başrolünde Karyofyllia Karabeti yer alırken yönetmen koltuğunda ise Angelos Frantzis oturuyor.",
        madeYear: '2019',
        duration: '117 dk',
        slug: '/film/eftyhia',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000364497/eftyhia-2019_220x286.jpg',
      },
      {
        title: 'Nefes: Vatan Sağolsun',
        description:
          "Güneydoğu'da “Karabal” tepesindeki bir telsiz röle istasyonunu korumakla görevlendirilen, Mete yüzbaşının komuta ettiği komando takımı istasyondaki jandarmalara katılır.Birlikte geçirdikleri günlerde acıyı, sevinci ve hasreti paylaşırlar ve her ne pahasına olursa olsun, karakolu ve telsizi koruma görevlerini yerine getirmek için mücadele ederler.",
        madeYear: '2009',
        duration: '123 dk',
        slug: '/film/nefes-v2',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000047025/nefes-yeni_220x286.jpg',
      },
      {
        title: 'Ayrı Dünyalar',
        description:
          "Sosyal adaletsizlik ve gelecek kaygısıyla ilgili yazacağı kitabın araştırmasını yapmak için, kimliğini gizleyerek Fransa'nın kuzeyine giden Marianne'nin hikayesi.Florence Aubenas'nın çok satan romanından uyarlanan yapıt, San Sebastian Film Festivali'nde seyirci ödülü aldı. Gerçek bir öyküden uyarlanan filmde Juliette Binoche her zamanki gibi mükemmel.",
        madeYear: '2021',
        duration: '102 dk',
        slug: '/film/ayri-dunyalar-v4',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350414/ouistreham-between-two-worlds-turkce_220x286.jpg',
      },
      {
        title: 'Kaçış',
        description:
          "Afganistan'dan kaçıp, mülteci olarak Danimarka'ya giden Amin, evlenmek üzereyken, 20 yıl boyunca kaçtığı, hayatının alt üst olmasına neden olan korkunç sırlarla yüzleşir.2022 yılında, En İyi Belgesel, En İyi Animasyon ve En İyi Uluslararası Film Oscar'larına aday gösterilen ve bu kategorilerde aday olan ilk film olma özelliği taşıyan belgeselin kamera arkasında Jonas Poher Rasmussen oturuyor.",
        madeYear: '2021',
        duration: '88 dk',
        slug: '/film/flee',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000325693/flee-2021_220x286.jpg',
      },
      {
        title: 'Rita Moreno: Kararlı Bir Kız',
        description:
          '"West Side Story" filmiyle Oscar ödülü kazanan başarılı aktris Rita Moreno\'nun Hollywood serüveni hayatından kesitlerle sunuluyor.',
        madeYear: '2021',
        duration: '86 dk',
        slug: '/film/rita-moreno-just-a-girl-who-decided-to-go-for-it',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350092/rita-moreno_220x286.jpg',
      },
      {
        title: 'Masumiyetin Dayanılmaz...',
        description:
          "Genç ve güzel Claire, üvey annesinin onu kıskanması yüzünden hizmetçi gibi çalışmaktadır ve onun ölmesini ister. Claire, kendisine uzakta yeni bir dünya kurar.Başarılı aktris Isabelle Huppert ve Lou De Laage'nin başrollerinde yer aldıkları bu suç-drama türündeki filmin yönetmenliğini Anne Fontaine üstleniyor.",
        madeYear: '2019',
        duration: '107 dk',
        slug: '/film/blanche-comme-neige-pure-as-snow',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359173/white-as-snow_220x286.jpg',
      },
      {
        title: 'Dört Güzel Gün',
        description:
          "Kızının madde bağımlılığından kurtulacağı dört önemli gün boyunca yanında olan bir annenin hikayesi.2022'deki Oscar Ödülleri'nde en iyi orijinal müzik dalında adaylığı bulunan yapıt, prömiyerini Sundance Film Festivali'nde gerçekleştirmişti. Usta aktris Glenn Close ve Mila Kunis'i başrolde izliyoruz.",
        madeYear: '2020',
        duration: '96 dk',
        slug: '/film/four-good-days',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350078/four-good-days_220x286.jpg',
      },
      {
        title: 'O Kadın',
        description:
          "Başarılı iş kadını Michele, çocukken yaşadığı olayı hafızasından silmişken, bir gün cinsel saldırıya uğrar ve hayatı kökünden değişecektir.En İyi Yabancı Dilde Film ve Kadın Oyuncu dallarında Altın Küre alan, Isabelle Huppert'e ayrıca En İyi Kadın Oyuncu Oscar adaylığı da getiren yapıt, “Temel İçgüdü – Basic Instinct”in yönetmeni Paul Verhoeven imzalı.",
        madeYear: '2016',
        duration: '125 dk',
        slug: '/film/elle',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000359172/elle-2016-turkce_220x286.jpg',
      },
      {
        title: 'The Sparks Brothers',
        description:
          "60''lı yıllarda müzik kariyerine başlayan Ron ve Russell Mael kardeşler, Sparks adlı müzik grubuyla 25 albüm sığdırdıkları yolculukları anlatılıyor.",
        madeYear: '2021',
        duration: '135 dk',
        slug: '/film/the-sparks-brothers',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350093/sparks-brothers-the_220x286.jpg',
      },
      {
        title: 'Tanrı Komitesi',
        description:
          'Organ nakli komitesinin, kalp nakli yapacakları 3 hastadan birini seçmeleri için 1 saatleri vardır. 7 yıl sonra bu vahim kararın sonuçlarıyla mücadele ederler.',
        madeYear: '2021',
        duration: '94 dk',
        slug: '/film/the-god-committee',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350091/god-committee-the_220x286.jpg',
      },
      {
        title: 'Acımasız Tanrı',
        description:
          'Oğulları kavgaya karışan iki aile, konuyu medenice konuşmak ister. Ancak konuştukça içinden çıkılamaz hale gelen olay, aileleri kaosa sürükler.',
        madeYear: '2011',
        duration: '76 dk',
        slug: '/film/god-of-carnage',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000029490/god-of-carnage_220x286.jpg',
      },
      {
        title: 'Körkütük',
        description:
          'Dört lise öğretmeni, sosyal ve profesyonel yaşamlarını nasıl etkileyeceğini görmek için günlük olarak alkol tüketmeye başlar.',
        madeYear: '2020',
        duration: '111 dk',
        slug: '/film/another-round-druk',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000326026/another-round-turkce_220x286.jpg',
      },
      {
        title: 'Akıl Oyunları',
        description:
          '"En İyi Film" ve "En İyi Yönetmen" ödülleri dahil 4 dalda Oscar ödülünü kazanan yapımın yönetmenliğini usta yönetmen Ron Howard üstleniyor.',
        madeYear: '2001',
        duration: '129 dk',
        slug: '/film/a-beautiful-mind',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000033216/beautiful-mind-a_220x286.jpg',
      },
      {
        title: 'Parçalanmış',
        description:
          'Üç genç kız, alışverişten dönerken bir adam tarafından kaçırılır. Evin bodrumuna kapatılan kızlar ne kadar çabalasalar da bir türlü adamın elinden kurtulamazlar.',
        madeYear: '2016',
        duration: '112 dk',
        slug: '/film/parcalanmis',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000118493/split_220x286.jpg',
      },
      {
        title: 'İki Aşığın Ölümü',
        description:
          'David ve eşi boşanma kararı alıp, başkalarıyla görüşebileceklerine dair anlaşırlar. Fakat David eşinin yeni ilişkisini kıskanmaya başlar.',
        madeYear: '2020',
        duration: '80 dk',
        slug: '/film/iki-asigin-olumu',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350411/killing-of-two-lovers-turkce_220x286.jpg',
      },
      {
        title: 'Ben Kadınım',
        description:
          "1970'lerin müzisyeni ve aktivisti Helen Reddy'nin hikayesi.",
        madeYear: '2019',
        duration: '111 dk',
        slug: '/film/ben-kadinim',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350409/i-am-woman_220x286.jpg',
      },
      {
        title: 'Mogul Mowgli',
        description:
          'Pakistan kökenli ünlü bir İngiliz rapçi, ilk dünya turu öncesinde ağır bir hastalığa yakalanır. Bu hastalık, büyük çıkışının sona ermesine sebep olur.',
        madeYear: '2020',
        duration: '85 dk',
        slug: '/film/mogul-mowgli',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350406/mogul-mowgli_220x286.jpg',
      },
      {
        title: 'Eve Dönüş',
        description:
          '19 yaşındaki madde bağımlısı Ben, rehabilitasyon merkezinden Noel için eve döner. Annesi bu beklenmedik ziyarete çok sevinirken, aile içinde sorunlar baş gösterir.',
        madeYear: '2018',
        duration: '98 dk',
        slug: '/film/eve-donus-v5',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000237354/ben-is-back_220x286.jpg',
      },
      {
        title: 'Ayin',
        description:
          'Aile büyüklerinin vefatıyla birlikte yaslı aile, köklerinin rahatsız edici ve karanlık sırlarıyla yüzleşmek zorunda kalırlar.',
        madeYear: '2018',
        duration: '122 dk',
        slug: '/film/ayin-v3',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000187049/hereditary_220x286.jpg',
      },
      {
        title: 'İhtiyar Adam ve Silah',
        description:
          "İlk hapis cezasını 15 yaşında alan Forrest Tucker'ın, 70 yaşında San Quentin'den kaçışına ve benzeri görülmemiş soygunlar dizisine tanıklık ediyoruz.",
        madeYear: '2018',
        duration: '89 dk',
        slug: '/film/ihtiyar-adam-ve-silah',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000237353/old-man-the-gun_220x286.jpg',
      },
    ],
  },
  {
    id: 12,
    name: 'Komedi Türk Filmleri',
    slug: '/komedi-turk-filmleri-film',
    contents: [
      {
        title: 'Düğüm Salonu',
        description:
          "Yıllar önce tanışıp aşık olduktan sonra ayrılan Serkan ve Hülya, farklı hayatlar kurmanın eşiğine gelmiştir. Kader onları hiç beklemedikleri bir gecede tekrar bir araya getirir. Şahin Irmak'ın senaryosunu yazdığı filmin yönetmen koltuğunda Hakan Algül var. Filmin başrollerini Şahin Irmak, İrem Sak ve Emre Karayel paylaşıyor.",
        madeYear: '2018',
        duration: '97 dk',
        slug: '/film/dugum-salonu',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000172304/dugum-salonu_220x286.jpg',
      },
      {
        title: 'Cebimdeki Yabancı',
        description:
          "Yedi eski arkadaş, akşam yemeğinde bir araya gelir ve yemek boyunca bir oyun oynamaya karar verir. Herkes telefonlarına gelen her mesaj ve bildirimi yüksek sesle okuyacaktır. Ünlü yönetmen Ferzan Özpetek'in yapımcıları arasında yer aldığı filmin yönetmenliğini Serra Yılmaz üstleniyor. Başlıca rollerde ise Serkan Altunorak, Belçim Bilgin, Buğra Gülsoy ve Şebnem Bozoklu'yu izliyoruz.",
        madeYear: '2018',
        duration: '91 dk',
        slug: '/film/cebimdeki-yabanci',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000169096/cebimdeki-yabanci_220x286.jpg',
      },
      {
        title: 'El Değmemiş Aşk',
        description:
          "Zafer, babasının zoruyla, kendisini istemediği bir evliliğin içerisinde bulur. Birbirinden komik yollarla bu evlilikten kurtulmaya çalışan Zafer’in planları beklediği gibi gitmez.Umut Kırca'nın yönettiği filmin başrollerini Ceren Moray, Emre Karayel ve Begüm Kütük Yaşaroğlu paylaşıyor.",
        madeYear: '2016',
        duration: '93 dk',
        slug: '/film/el-degmemis-ask',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000125270/el-degmemis-ask_220x286.jpg',
      },
      {
        title: 'Sınav',
        description:
          "En tartışmalı sınavlardan biri olan ÖSS'ye hazırlanan 5 yakın arkadaş, ailelerini ve çevrelerini hayal kırıklığına uğratacakları korkusuyla bir çıkış yolu aramaktadırlar.Notlarını normal yollarla yükseltemeyeceklerini anlayan 5 yakın arkadaş, notlarını yükseltmek için okuldaki sınavların sorularını çalmaya karar verirler. Ancak bu soru çalma işi bu kadarla sınırlı kalmaz...",
        madeYear: '2006',
        duration: '120 dk',
        slug: '/film/sinav',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000047017/sinav220x286.jpg',
      },
      {
        title: 'Deliha 2',
        description:
          "Temiz kalpli ve bir o kadar da deli dolu olan ve başı dertten kurtulmayan Deliha, aşk hayatını bir kenara bırakıp kariyerine odaklanmaya karar verir.Gupse Özay'ın imzasını taşıyan serinin ikinci filminde, ünlü oyuncu bu kez yönetmen koltuğunda da görev yaptı. Filmin başlıca rollerinde Özay'a Eda Ece, Ali Çelik ve Derya Alabora eşlik ediyor.",
        madeYear: '2018',
        duration: '102 dk',
        slug: '/film/deliha-2',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000167510/deliha2_220x286.jpg',
      },
      {
        title: 'Popstar: Yıldızlar da Kayar',
        description:
          'Yaşadığı talihsiz bir olay sosyal medyada linç yiyen popstar Berkcan, bir köyde altı ay yaşamak zorunda kalır.Tv dizileri ve korku filmleri çeken yönetmen Günay Günaydın’dan bu kez günümüz yaşantısında sosyal medyanın etkilerine değinen eğlenceli bir komedi.',
        madeYear: '2022',
        duration: '102 dk',
        slug: '/film/popstar-yildizlar-da-kayar',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350821/popstar-yildizlar-da-kayar_220x286.jpg',
      },
      {
        title: 'Arif V 216',
        description:
          "Robot 216'nın hayali insan olmaktır. Uzaydan yakın arkadaşı Arif'i ziyarete geldiğinde insan gibi yaşamaya başlar.Robot olduğunu saklamaya çalışan 216, bu arada aşık da olur.Cem Yılmaz'ın senaryosunu yazıp başrolü üstlendiği, ''Robot Muymuş Efenim?'' repliğiyle hafızalara kazınan gişe rekortmeni filmde Zafer Algöz, Ozan Güven, Özkan Uğur, Farah Zeynep Abdullah, Ediz Hun, Çağlar Çorumlu ve Kerem Alışık var.",
        madeYear: '2018',
        duration: '121 dk',
        slug: '/film/arif-v-216',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000355273/arif-v-216_220x286.jpg',
      },
      {
        title: 'İftarlık Gazoz',
        description:
          '1970’ler Türkiye’sinin barış ve huzur dolu Ege kasabalarından birinde ailesi ile beraber yaşayan Adem, zor da olsa izni koparıp gazozcu çırağı olarak çalışmaya başlar.Ramazan ayının başıdır ve Adem camide imamın oruç ile anlattıklarını üzerine alınır. Küçük olduğu için oruç tutmasına izin vermeyen ailesinden gizli niyet eder fakat Ege’nin yaz sıcağında, bir yandan da gazoz satarken oruç tutmak hiç de kolay değildir.',
        madeYear: '2016',
        duration: '106 dk',
        slug: '/film/iftarlik-gazoz',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000104738/iftarlik-gazoz_220x286.jpg',
      },
      {
        title: 'Dost Kazığı',
        description:
          "Balayına giden bir çift, bu sırada yanlış anlaşılmadan dolayı ayrılmanın eşiğine gelen arkadaşlarını barıştırmaya çalışır.Fakat bütün bunların altında başka bir sebep yatmaktadır.'Issız Adam' olarak ünlenen Cemal Hünal'e Ruhi Sarı ve Müjde Uzman'ın eşlik ettiği komedi, sinemalardan önce karşınızda.",
        madeYear: '2022',
        duration: '92 dk',
        slug: '/film/dost-kazigi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000351190/dost-kazigi_220x286.jpg',
      },
      {
        title: 'Tatlı Melek',
        description:
          "Başı talihsiz olaylardan kurtulamayan Abbas'a annesini bulmak isteyen bir şans meleği gönderilir.Yunus Bülbül'ün başrolde olduğu yapım, ünlü 'Bücür Cadı' dizisinden yola çıkıyor. Sinemalardan önce ilk kez ekranda.",
        madeYear: '2022',
        duration: '100 dk',
        slug: '/film/tatli-melek',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000351197/tatli-melek_220x286.jpg',
      },
      {
        title: 'Aşkın Ömrü',
        description:
          "Evliliklerde boşanma sürecinin zorluklarını en aza indirmek için sözleşmeli evlilik dönemine geçildiği bir sistemde, çiftleri neler bekler?'Dünyanın En Güzel Kokusu' filmlerinin yönetmeninden romantik bir yapım daha. Sinemalardan önce karşınızda.",
        madeYear: '2022',
        duration: '101 dk',
        slug: '/film/askin-omru',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000351195/askin-omru-yeni_220x286.jpg',
      },
      {
        title: 'Şeflerin Şefi',
        description:
          "Birbirlerine rakip olarak büyüyen Halil ile Cemal, bu rekabetin kazananını belirlemek için bir televizyon programına katılırlar.En son 'Zalo'da izlediğimiz sevilen komedi oyuncusu Sermiyan Midyat ve Ruhi Sarı'yı bir araya getiren yapım, 'lezzetli' bir komedi.",
        madeYear: '2021',
        duration: '108 dk',
        slug: '/film/seflerin-sefi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000351194/seflerin-sefi_220x286.jpg',
      },
      {
        title: 'Salur Kazan: Zoraki Kahraman',
        description:
          'Ünlü masalları mizahi bir dille ekrana taşıyan filmde, zoraki kahraman Salur, kötü adamlar tarafından esir alınan sevdiklerini kurtarmaya çalışıyor.',
        madeYear: '2017',
        duration: '96 dk',
        slug: '/film/salur-kazan-zoraki-kahraman',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000161552/salur-kazan_220x286.jpg',
      },
      {
        title: 'Çalgı Çengi',
        description:
          'Düğün, kına gecesi gibi organizasyonlarda müzisyenlik yapan Salih ve Gürkan, yine bir düğün hazırlığı esnasında hayatlarının en zorlu macerasına atılırlar.',
        madeYear: '2011',
        duration: '86 dk',
        slug: '/film/calgi-cengi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000047024/calgi-cengi-yenii_220x286.jpg',
      },
      {
        title: 'A.R.O.G',
        description:
          "Son macerasından sonra Ceku ile Dünya'da yaşayan Arif, Logar'ın intikam için kendisini tam bir milyon yıl öncesine yollayacağından habersizdir.",
        madeYear: '2008',
        duration: '122 dk',
        slug: '/film/arog',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000047019/arog_220x286.jpg',
      },
      {
        title: 'Yahşi Batı',
        description:
          "Cem Yılmaz'ın başrolleri Ozan Güven, Demet Evgar, Özkan Uğur ve Zafer Algöz'le paylaştığı western-komedi filminde yönetmen koltuğunda Ömer Faruk Sorak oturuyor.",
        madeYear: '2010',
        duration: '115 dk',
        slug: '/film/yahsi-bati',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000044496/yahsi-bati_220x286.jpg',
      },
      {
        title: 'Aylak Takımı',
        description:
          'Şehirden uzak bir üniversitede okuyan bir grup öğrenci, deney yaparken meydana gelen patlamayla gaza maruz kalıp mutasyona uğrayınca kampüste büyük bir macera başlar.',
        madeYear: '2021',
        duration: '83 dk',
        slug: '/film/aylak-takimi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000350820/aylak-takimi_220x286.jpg',
      },
      {
        title: 'Ailecek Şaşkınız',
        description:
          "Babasının şirketinin başına geçen Ferhat ile şirketin finans direktörü ve aynı zamanda çocukluk arkadaşı Gökhan'ın başından geçen eğlenceli olayları izliyoruz.",
        madeYear: '2018',
        duration: '113 dk',
        slug: '/film/ailecek-saskiniz',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000175707/ailecek_saskiniz_220x286.jpg',
      },
      {
        title: 'Hep Yek 2',
        description:
          "Gürkan ile Altan,mafya babası Cevat'ın eline düşmüştür.Kendisini kazıklayan Şahin'i öldüren Cevat,Altan ile Gürkan'ı Şahin'in cesedini ortadan kaldırırlarsa affedecektir.",
        madeYear: '2017',
        duration: '92 dk',
        slug: '/film/hep-yek-2',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000182624/hep-yek-2_220x286.jpg',
      },
      {
        title: 'Hababam Sınıfı Askerde',
        description:
          "Yaşıtları çoktan iş güç sahibi olan Hababam sınıfı öğrencileri, okul müdürü Deli Bedri'nin bulduğu çözümle, bir sabah ansızın askeri inzibatlar tarafından uyandırılır.",
        madeYear: '2004',
        duration: '111 dk',
        slug: '/film/hababam-sinifi-askerde',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000046840/hababam-sinifi-askerde-yeni_220x286.jpg',
      },
      {
        title: 'Hababam Sınıfı 3,5',
        description:
          "Okul müdürü deli Bedri sürpriz bir evlilik yapar. Hababam Sınıfı'ndan kurtulmaya ant içen deli Bedri, karısı ve üvey oğlunun yardımıyla Hababam sınıfına savaş açar.",
        madeYear: '2005',
        duration: '96 dk',
        slug: '/film/hababam-sinifi-35',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000046839/hababam-sinifi-ucbucuk_220x286.jpg',
      },
      {
        title: 'Hababam Sınıfı Merhaba',
        description:
          "Özel Çamlıca Lisesi'ndeki Hababam geleneği tüm hızıyla devam etmektedir.",
        madeYear: '2003',
        duration: '115 dk',
        slug: '/film/hababam-sinifi-merhaba',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000046838/hababam-sinifi-merhaba_220x286.jpg',
      },
      {
        title: "Çift'lik Bank: Tosun Firarda",
        description:
          "Tosun, arkadaşı Cenk'in oynadığı mobil çiftlik oyununu gerçek hayata uyarlar. Gerçek bir çiftlik kurarak kullanıcıların güvenini kazanır ve insanları dolandırmaya başlar.",
        madeYear: '2018',
        duration: '98 dk',
        slug: '/film/ciftlik-bank-tosun-firarda',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349249/ciftlik-bank-tosun-firarda_220x286.jpg',
      },
      {
        title: 'Kaybedenler Kulübü',
        description:
          '90\'lı yıllarda geçen film, Kaan ve Mete\'nin radyo programları aracılığıyla farklı kesimlerden insanları bir araya getirerek "Kaybedenler Kulübü"nü kurmasını işliyor.',
        madeYear: '2011',
        duration: '114 dk',
        slug: '/film/kaybedenler-kulubu',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000349245/kaybedenler-kulubu_220x286.jpg',
      },
      {
        title: '10.Köy Teyatora',
        description:
          "Gezici tiyatro topluluğuyla birlikte Anadolu'yu dolaşan bir öğretmenin yolu, Dionysos'tan kalan antik köye düşer ve burada yöre halkının sıradışı özellikleriyle tanışır.",
        madeYear: '2014',
        duration: '108 dk',
        slug: '/film/10koy-teyatora',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000345054/10-koy-teyatora_220x286.jpg',
      },
      {
        title: 'Hızlı ve Tüplü',
        description:
          'Hayallerindeki şahin marka arabaya kavuşan iki yakın arkadaş olan Gökhan ve Metin, arabayı modifiye ettirirken birbirinden eğlenceli maceralarla karşılaşırlar.',
        madeYear: '2017',
        duration: '90 dk',
        slug: '/film/hizli-ve-tuplu',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000345049/hizli-ve-tuplu_220x286.jpg',
      },
      {
        title: 'Kadın İşi Banka Soygunu',
        description:
          'Zor zamanlarında birbirlerine destek olan dört yakın arkadaş, bu kez maddi manevi çıkmazda olan Gülay için bir araya gelip akıl almaz bir banka soygunu planlarlar.',
        madeYear: '2014',
        duration: '100 dk',
        slug: '/film/kadin-isi-banka-soygunu',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000334378/kadin-isi-banka-soygunu_220x286.jpg',
      },
      {
        title: 'Güvercin Uçuverdi',
        description:
          "Belediyede otobüs şoförü olarak çalışan Yüksek Güvercin'in en büyük hayali pilot olmaktır ve bu yolda çeşitli maceralardan geçecektir.",
        madeYear: '2015',
        duration: '84 dk',
        slug: '/film/guvercin-ucuverdi',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000334375/guvercin-ucuverdi-yeni_220x286.jpg',
      },
      {
        title: 'Yaktın Beni',
        description:
          'İtfaiye eri Selam Kuloğlu, ailesini kaybettikten sonra kendi düzenini kurup hayata geri dönmeyi başarmıştır.',
        madeYear: '2015',
        duration: '96 dk',
        slug: '/film/yaktin-beni',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000159289/yaktin-beni_220x286.jpg',
      },
      {
        title: 'Pişt',
        description:
          "Depresyon nedeniyle kliniğe yatan 3 genç, acil tedavi için alternatif yöntemler uygulayan Hidayet Hanım'a emanet edilirler...",
        madeYear: '2015',
        duration: '97 dk',
        slug: '/film/pist',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000153959/pist_220x286.jpg',
      },
      {
        title: 'Mazlum Kuzey',
        description:
          'Mazlum Kuzey bir elinde sazı, bir yanında dostu Tıfıl ile pavyondan kovulup işsiz kalınca, organ mafyasının tuzağına düşer ve başı çok büyük derde girer.',
        madeYear: '2015',
        duration: '100 dk',
        slug: '/film/mazlum-kuzey',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000047230/mazlum-kuzey-yeni_220x286.jpg',
      },
      {
        title: 'Bizans Oyunları',
        description:
          "Mayalar, Güney Amerika'dan Anadolu'ya göç edip Bağcılar civarına yerleşirler.",
        madeYear: '2016',
        duration: '100 dk',
        slug: '/film/bizans-oyunlari',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000094043/bizans-oyunlari_220x286.jpg',
      },
      {
        title: 'Sevimli Tehlikeli',
        description:
          "Yıllar önce Edirne'de bir ailenin bebeğini kaçırıp büyük acıların yaşanmasına sebep olan Zarok, yakaladığı fırsatla,yıllarca yaşadığı vicdan azabından kurtulmaya çalışır.",
        madeYear: '2015',
        duration: '108 dk',
        slug: '/film/sevimli-tehlikeli',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000050666/sevimli-tehlikeli220x286.jpg',
      },
      {
        title: 'Hep Yek 3',
        description:
          "Beladan uzak kalamayan Altan ve Gürkan, Türkiye'nin ünlü kabadayılarından birinin oğlu olan Cevat Bakır'ın ölümüne neden olunca tehlikeli bir maceraya atılırlar.",
        madeYear: '2019',
        duration: '86 dk',
        slug: '/film/hep-yek-3',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000334576/hep-yek3_220x286.jpg',
      },
      {
        title: 'Sorma Neden?',
        description:
          'Yağmur ve Kayhan çevrelerinin itirazlarına rağmen evlenmeye karar verir. Düğün günü geldiğinde Kayhan gizemli bir şekilde ortadan kaybolur...',
        madeYear: '2018',
        duration: '81 dk',
        slug: '/film/sorma-neden',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000334575/sorma-neden_220x286.jpg',
      },
      {
        title: 'Sinyalciler',
        description:
          "İşlemedikleri bir cinayet yüzünden borçlanan üç kafadar, canlarını kurtarmak için zamanla yarışırken içerisinde Interpol'ün de olduğu bir maceraya sürüklenirler.",
        madeYear: '2017',
        duration: '87 dk',
        slug: '/film/sinyalciler',
        imageUrl:
          'https://mediacms01.digiturkplay.com/sa_bc/PT0000334589/sinyalciler_220x286.jpg',
      },
    ],
  },
];

export type categoriesType = typeof categories;

export function getCategories() {
  return categories;
}
