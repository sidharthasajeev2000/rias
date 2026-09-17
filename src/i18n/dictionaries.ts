export type Locale = "id" | "en" | "ta";

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "id", label: "Indonesia / Melayu", short: "ID" },
  { code: "en", label: "English", short: "EN" },
  { code: "ta", label: "தமிழ்", short: "TA" },
];

export const DEFAULT_LOCALE: Locale = "id";
export const STORAGE_KEY = "rias-locale";

export type Dictionary = {
  nav: {
    services: string;
    about: string;
    lookbook: string;
    contact: string;
    bookVisit: string;
    openMenu: string;
    closeMenu: string;
    homeAria: string;
  };
  hero: {
    badge: string;
    tagline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    cardEyebrow: string;
    cardLines: [string, string, string];
    cardFooterLabel: string;
    cardFooterMeta: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    tiles: { title: string; subtitle: string }[];
  };
  lookbook: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    addressLabel: string;
    hoursLabel: string;
    hoursLines: [string, string];
    phoneLabel: string;
    whatsappCta: string;
    addresses: { label: string; lines: string[] }[];
    phones: {
      label: string;
      display: string;
      tel: string;
      wa: string;
    }[];
    form: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
      messagePlaceholder: string;
      select: string;
      submit: string;
      received: string;
      thankYou: string;
      demoNote: string;
      sendAnother: string;
      serviceOptions: { value: string; label: string }[];
      errors: {
        nameRequired: string;
        nameShort: string;
        emailRequired: string;
        emailInvalid: string;
        phoneInvalid: string;
        serviceRequired: string;
        messageRequired: string;
        messageShort: string;
      };
    };
  };
  footer: {
    tagline: string;
    copyright: string;
  };
  lang: {
    switcherAria: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  id: {
    nav: {
      services: "Layanan",
      about: "Tentang",
      lookbook: "Lookbook",
      contact: "Kontak",
      bookVisit: "Buat janji",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      homeAria: "Beranda RIAS",
    },
    hero: {
      badge: "Modeling wanita & gadis",
      tagline: "Gaya lembut. Setiap usia.",
      body: "RIAS adalah ruang manis untuk model perempuan — gadis dan wanita — look portfolio, persiapan runway & pageant, fitting lembut, dan styling yang membuat setiap kepribadian bersinar.",
      ctaPrimary: "Buat janji",
      ctaSecondary: "Lihat lookbook",
      cardEyebrow: "Untuk wanita & gadis",
      cardLines: ["Look lucu.", "Fitting lembut.", "Senyum besar."],
      cardFooterLabel: "Atelier modeling",
      cardFooterMeta: "Anak & dewasa · Portfolio · Runway · Pageant",
    },
    services: {
      eyebrow: "Yang kami tawarkan",
      title: "Look manis untuk setiap bintang",
      intro:
        "Dari foto portfolio pertama hingga kilau runway dan pageant, RIAS membantu wanita dan gadis tampil serta merasa indah — lembut, manis, dan penuh perhatian di setiap usia.",
      items: [
        {
          title: "Fitting anak & dewasa",
          description:
            "Fitting lembut dan menyenangkan untuk gadis dan wanita — kenyamanan dulu, siap kamera sesudahnya.",
        },
        {
          title: "Look portfolio",
          description:
            "Look bersih dan manis untuk buku modeling — warna lembut, potongan rapi untuk setiap usia.",
        },
        {
          title: "Runway & pageant",
          description:
            "Styling siap panggung untuk fashion show, kompetisi, dan momen pageant — gadis dan wanita.",
        },
        {
          title: "Pesta & acara",
          description:
            "Gaun ulang tahun, set meriah, dan outfit hari spesial dengan detail manis yang akan Anda sukai.",
        },
        {
          title: "Styling shoot",
          description:
            "Styling di set dan studio — look terkoordinasi, pergantian cepat, serta energi tenang dan ceria.",
        },
        {
          title: "Konsultasi wardrobe",
          description:
            "Bantu membangun kapsul kecil pakaian sehari-hari + acara yang mudah dipadukan.",
        },
      ],
    },
    about: {
      eyebrow: "Cerita kami",
      title: "Studio fashion lembut untuk wanita dan gadis",
      p1: "RIAS lahir sebagai sudut nyaman untuk gaya manis — rak pastel, fitting teliti, dan keyakinan bahwa setiap gadis dan wanita pantas memakai outfit seceria dirinya.",
      p2: "Kami menyambut model perempuan segala usia: anak dan dewasa — look portfolio, busana pesta, alterasi lembut, serta styling untuk fashion show, runway, dan pageant.",
      p3: "Sengaja kecil, sengaja manis. Keluarga dan model merasa disambut; setiap klien merasa seperti tokoh utama — yang, tentu saja, memang dirinya.",
      tiles: [
        { title: "♡", subtitle: "Semua wanita" },
        { title: "Lembut", subtitle: "Kain & potongan" },
        { title: "Seru", subtitle: "Energi fitting" },
        { title: "Bersinar", subtitle: "Di setiap panggung" },
      ],
    },
    lookbook: {
      eyebrow: "Lookbook & momen",
      title: "Look yang kami cintai",
      intro:
        "Momen runway dan penghargaan nyata — pageant, fashion show, Best Performance, dan look panggung yang menangkap energi RIAS untuk wanita dan gadis.",
    },
    contact: {
      eyebrow: "Sapa kami",
      title: "Buat janji",
      intro:
        "Ceritakan tentang Anda atau model Anda — fitting, look portfolio, runway & pageant, outfit pesta, atau styling shoot. Kami akan membalas dengan langkah berikutnya yang hangat. WhatsApp paling cepat.",
      addressLabel: "Alamat",
      hoursLabel: "Jam buka",
      hoursLines: ["Sel–Sab · 10:00–18:00", "Minggu dengan janji temu"],
      phoneLabel: "Telepon / WhatsApp",
      whatsappCta: "Chat WhatsApp",
      addresses: [
        {
          label: "Indonesia",
          lines: [
            "Jln. Tarutung",
            "Pematangsiantar, Sumatera Utara, Indonesia",
          ],
        },
        {
          label: "Malaysia",
          lines: ["Kuala Lumpur, Malaysia"],
        },
      ],
      phones: [
        {
          label: "Malaysia",
          display: "+60 11 2442 0613",
          tel: "+601124420613",
          wa: "https://wa.me/601124420613",
        },
        {
          label: "Indonesia",
          display: "+62 813 6151 9101",
          tel: "+6281361519101",
          wa: "https://wa.me/6281361519101",
        },
      ],
      form: {
        name: "Nama Anda",
        email: "Email",
        phone: "Telepon (opsional)",
        service: "Layanan",
        message: "Pesan",
        messagePlaceholder: "Ceritakan tentang Anda atau model Anda…",
        select: "Pilih…",
        submit: "Kirim pertanyaan",
        received: "Diterima ♡",
        thankYou: "Terima kasih,",
        demoNote:
          "Ini formulir demo dengan validasi di sisi klien saja—pesan tidak dikirim. Untuk respons cepat, hubungi kami lewat WhatsApp.",
        sendAnother: "Kirim pertanyaan lain",
        serviceOptions: [
          { value: "fittings", label: "Fitting anak & dewasa" },
          { value: "portfolio-looks", label: "Look portfolio" },
          { value: "runway-pageants", label: "Runway & pageant" },
          { value: "party-occasion", label: "Pesta & acara" },
          { value: "shoot-styling", label: "Styling shoot" },
          { value: "wardrobe-consult", label: "Konsultasi wardrobe" },
        ],
        errors: {
          nameRequired: "Silakan masukkan nama Anda.",
          nameShort: "Nama minimal 2 karakter.",
          emailRequired: "Silakan masukkan email Anda.",
          emailInvalid: "Silakan masukkan alamat email yang valid.",
          phoneInvalid: "Silakan masukkan nomor telepon yang valid.",
          serviceRequired: "Silakan pilih layanan.",
          messageRequired: "Silakan tulis pesan singkat.",
          messageShort: "Pesan minimal 10 karakter.",
        },
      },
    },
    footer: {
      tagline: "Modeling wanita & gadis · Gaya lembut · Setiap usia",
      copyright: "© {year} RIAS",
    },
    lang: {
      switcherAria: "Pilih bahasa",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      lookbook: "Lookbook",
      contact: "Contact",
      bookVisit: "Book a visit",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      homeAria: "RIAS home",
    },
    hero: {
      badge: "Women & girls modeling",
      tagline: "Soft styles. Every age.",
      body: "RIAS is a sweet space for female models — girls and women — portfolio looks, runway and pageant prep, gentle fittings, and styling that lets every personality shine.",
      ctaPrimary: "Book a visit",
      ctaSecondary: "See the lookbook",
      cardEyebrow: "For women & girls",
      cardLines: ["Cute looks.", "Soft fits.", "Big smiles."],
      cardFooterLabel: "Modeling atelier",
      cardFooterMeta: "Kids & adult · Portfolio · Runway · Pageants",
    },
    services: {
      eyebrow: "What we offer",
      title: "Cute looks for every star",
      intro:
        "From first portfolio shots to runway and pageant sparkle, RIAS helps women and girls look and feel wonderful — softly, sweetly, and with care at every age.",
      items: [
        {
          title: "Kids & adult fittings",
          description:
            "Gentle, playful fittings for girls and women — comfort first, camera-ready next.",
        },
        {
          title: "Portfolio looks",
          description:
            "Clean, cute looks styled for modeling books — soft colors, polished fits for every age.",
        },
        {
          title: "Runway & pageants",
          description:
            "Stage-ready styling for fashion shows, competitions, and pageant moments — girls and women.",
        },
        {
          title: "Party & occasion",
          description:
            "Birthday dresses, festive sets, and special-day outfits with sweet details you will love.",
        },
        {
          title: "Shoot styling",
          description:
            "On-set and studio styling — coordinated looks, quick changes, and calm, cheerful energy.",
        },
        {
          title: "Wardrobe consults",
          description:
            "Help building a small capsule of cute everyday + occasion pieces you can mix with ease.",
        },
      ],
    },
    about: {
      eyebrow: "Our story",
      title: "A soft fashion studio for women and girls",
      p1: "RIAS began as a cozy corner for sweet styles — pastel rails, careful fittings, and the belief that every girl and woman deserves outfits as joyful as she is.",
      p2: "We welcome female models of all ages: kids and adults — portfolio looks, party and occasion pieces, gentle alterations, and styling for fashion shows, runway, and pageants.",
      p3: "Intentionally small, intentionally sweet. Families and models feel welcome; every client feels like the main character — which, of course, she is.",
      tiles: [
        { title: "♡", subtitle: "All women" },
        { title: "Soft", subtitle: "Fabrics & fits" },
        { title: "Fun", subtitle: "Fitting energy" },
        { title: "Shine", subtitle: "On every stage" },
      ],
    },
    lookbook: {
      eyebrow: "Lookbook & moments",
      title: "Looks we adore",
      intro:
        "Real runway and award moments — pageants, fashion shows, Best Performance, and stage looks that capture RIAS energy for women and girls.",
    },
    contact: {
      eyebrow: "Say hello",
      title: "Book a visit",
      intro:
        "Tell us about you or your model — fittings, portfolio looks, runway and pageants, party outfits, or shoot styling. We'll reply with a warm next step. WhatsApp is fastest.",
      addressLabel: "Address",
      hoursLabel: "Hours",
      hoursLines: ["Tue–Sat · 10:00–18:00", "Sundays by appointment"],
      phoneLabel: "Phone / WhatsApp",
      whatsappCta: "Chat on WhatsApp",
      addresses: [
        {
          label: "Indonesia",
          lines: [
            "Jln. Tarutung",
            "Pematangsiantar, Sumatera Utara, Indonesia",
          ],
        },
        {
          label: "Malaysia",
          lines: ["Kuala Lumpur, Malaysia"],
        },
      ],
      phones: [
        {
          label: "Malaysia",
          display: "+60 11 2442 0613",
          tel: "+601124420613",
          wa: "https://wa.me/601124420613",
        },
        {
          label: "Indonesia",
          display: "+62 813 6151 9101",
          tel: "+6281361519101",
          wa: "https://wa.me/6281361519101",
        },
      ],
      form: {
        name: "Your name",
        email: "Email",
        phone: "Phone (optional)",
        service: "Service",
        message: "Message",
        messagePlaceholder: "Tell us about you or your model…",
        select: "Select…",
        submit: "Send enquiry",
        received: "Received ♡",
        thankYou: "Thank you,",
        demoNote:
          "This is a demo form with client-side validation only—no message was sent. For a quick reply, reach us on WhatsApp.",
        sendAnother: "Send another enquiry",
        serviceOptions: [
          { value: "fittings", label: "Kids & adult fittings" },
          { value: "portfolio-looks", label: "Portfolio looks" },
          { value: "runway-pageants", label: "Runway & pageants" },
          { value: "party-occasion", label: "Party & occasion" },
          { value: "shoot-styling", label: "Shoot styling" },
          { value: "wardrobe-consult", label: "Wardrobe consult" },
        ],
        errors: {
          nameRequired: "Please enter your name.",
          nameShort: "Name should be at least 2 characters.",
          emailRequired: "Please enter your email.",
          emailInvalid: "Please enter a valid email address.",
          phoneInvalid: "Please enter a valid phone number.",
          serviceRequired: "Please select a service.",
          messageRequired: "Please share a short message.",
          messageShort: "Message should be at least 10 characters.",
        },
      },
    },
    footer: {
      tagline: "Women & girls modeling · Soft styles · Every age",
      copyright: "© {year} RIAS",
    },
    lang: {
      switcherAria: "Choose language",
    },
  },
  ta: {
    nav: {
      services: "சேவைகள்",
      about: "எங்களைப் பற்றி",
      lookbook: "லுக்புக்",
      contact: "தொடர்பு",
      bookVisit: "சந்திப்பு பதிவு",
      openMenu: "மெனுவைத் திற",
      closeMenu: "மெனுவை மூடு",
      homeAria: "RIAS முகப்பு",
    },
    hero: {
      badge: "பெண்கள் & சிறுமிகள் மாடலிங்",
      tagline: "மென்மையான ஸ்டைல். எல்லா வயதும்.",
      body: "RIAS என்பது பெண் மாடல்களுக்கான இனிய இடம் — சிறுமிகள் மற்றும் பெண்கள் — போர்ட்ஃபோலியோ லுக்குகள், ரன்வே & பேஜண்ட் தயாரிப்பு, மென்மையான ஃபிட்டிங்குகள், ஒவ்வொரு ஆளுமையும் ஒளிர வைக்கும் ஸ்டைலிங்.",
      ctaPrimary: "சந்திப்பு பதிவு",
      ctaSecondary: "லுக்புக் பாருங்கள்",
      cardEyebrow: "பெண்கள் & சிறுமிகளுக்கு",
      cardLines: ["கியூட் லுக்குகள்.", "மென்மையான ஃபிட்.", "பெரிய புன்னகை."],
      cardFooterLabel: "மாடலிங் அட்டேலியே",
      cardFooterMeta: "குழந்தைகள் & வயது வந்தோர் · போர்ட்ஃபோலியோ · ரன்வே · பேஜண்ட்",
    },
    services: {
      eyebrow: "நாங்கள் வழங்குவது",
      title: "ஒவ்வொரு நட்சத்திரத்திற்கும் இனிய லுக்குகள்",
      intro:
        "முதல் போர்ட்ஃபோலியோ படங்களில் இருந்து ரன்வே மற்றும் பேஜண்ட் ஒளி வரை, RIAS பெண்களும் சிறுமிகளும் அழகாகத் தோன்றவும் உணரவும் உதவுகிறது — மென்மையாக, இனிமையாக, ஒவ்வொரு வயதிலும் கவனத்துடன்.",
      items: [
        {
          title: "குழந்தை & வயது வந்தோர் ஃபிட்டிங்",
          description:
            "சிறுமிகள் மற்றும் பெண்களுக்கான மென்மையான, மகிழ்ச்சியான ஃபிட்டிங்குகள் — முதலில் வசதி, பிறகு கேமராவுக்கு தயார்.",
        },
        {
          title: "போர்ட்ஃபோலியோ லுக்குகள்",
          description:
            "மாடலிங் புத்தகங்களுக்கான சுத்தமான, கியூட் லுக்குகள் — மென்மையான நிறங்கள், ஒவ்வொரு வயதிற்கும் அழகான ஃபிட்.",
        },
        {
          title: "ரன்வே & பேஜண்ட்",
          description:
            "ஃபேஷன் ஷோ, போட்டிகள், பேஜண்ட் தருணங்களுக்கான மேடை தயார் ஸ்டைலிங் — சிறுமிகள் மற்றும் பெண்கள்.",
        },
        {
          title: "பார்ட்டி & விழா",
          description:
            "பிறந்தநாள் உடைகள், விழா செட்டுகள், சிறப்பு நாள் அவுட்ஃபிட்கள் — நீங்கள் விரும்பும் இனிய விவரங்களுடன்.",
        },
        {
          title: "ஷூட் ஸ்டைலிங்",
          description:
            "செட் மற்றும் ஸ்டுடியோ ஸ்டைலிங் — ஒருங்கிணைந்த லுக்குகள், விரைவு மாற்றங்கள், அமைதியான மகிழ்ச்சியான ஆற்றல்.",
        },
        {
          title: "வார்ட்ரோப் ஆலோசனை",
          description:
            "தினசரி + விழா உடைகளின் சிறிய கேப்சூல் உருவாக்க உதவி — எளிதாக கலக்கலாம்.",
        },
      ],
    },
    about: {
      eyebrow: "எங்கள் கதை",
      title: "பெண்கள் மற்றும் சிறுமிகளுக்கான மென்மையான ஃபேஷன் ஸ்டுடியோ",
      p1: "RIAS இனிய ஸ்டைல்களுக்கான அரவணைப்பான மூலையாகத் தொடங்கியது — பாஸ்டல் ரெயில்கள், கவனமான ஃபிட்டிங்குகள், ஒவ்வொரு சிறுமியும் பெண்ணும் தன் மகிழ்ச்சிக்கு ஏற்ற உடைகளைப் பெற வேண்டும் என்ற நம்பிக்கை.",
      p2: "எல்லா வயதினரான பெண் மாடல்களையும் வரவேற்கிறோம்: குழந்தைகள் மற்றும் வயது வந்தோர் — போர்ட்ஃபோலியோ லுக்குகள், பார்ட்டி உடைகள், மென்மையான மாற்றங்கள், ஃபேஷன் ஷோ, ரன்வே, பேஜண்ட் ஸ்டைலிங்.",
      p3: "வேண்டுமென்றே சிறியது, வேண்டுமென்றே இனிமையானது. குடும்பங்களும் மாடல்களும் வரவேற்கப்படுகிறார்கள்; ஒவ்வொரு வாடிக்கையாளரும் முதன்மை கதாநாயகியாக உணர்கிறார்கள் — அது நிச்சயமாக அவளே.",
      tiles: [
        { title: "♡", subtitle: "எல்லா பெண்கள்" },
        { title: "மென்மை", subtitle: "துணி & ஃபிட்" },
        { title: "மகிழ்ச்சி", subtitle: "ஃபிட்டிங் ஆற்றல்" },
        { title: "ஒளிர", subtitle: "ஒவ்வொரு மேடையிலும்" },
      ],
    },
    lookbook: {
      eyebrow: "லுக்புக் & தருணங்கள்",
      title: "நாங்கள் விரும்பும் லுக்குகள்",
      intro:
        "உண்மையான ரன்வே மற்றும் விருது தருணங்கள் — பேஜண்ட், ஃபேஷன் ஷோ, Best Performance, பெண்கள் மற்றும் சிறுமிகளுக்கான RIAS ஆற்றலைப் பதிவு செய்யும் மேடை லுக்குகள்.",
    },
    contact: {
      eyebrow: "வணக்கம் சொல்லுங்கள்",
      title: "சந்திப்பு பதிவு",
      intro:
        "உங்களைப் பற்றியோ உங்கள் மாடலைப் பற்றியோ சொல்லுங்கள் — ஃபிட்டிங், போர்ட்ஃபோலியோ லுக்குகள், ரன்வே & பேஜண்ட், பார்ட்டி அவுட்ஃபிட், அல்லது ஷூட் ஸ்டைலிங். நாங்கள் அன்பான அடுத்த படியுடன் பதிலளிப்போம். WhatsApp வேகமானது.",
      addressLabel: "முகவரி",
      hoursLabel: "நேரம்",
      hoursLines: ["செவ்–சனி · 10:00–18:00", "ஞாயிறு நேரம் ஒதுக்கி"],
      phoneLabel: "தொலைபேசி / WhatsApp",
      whatsappCta: "WhatsApp அரட்டை",
      addresses: [
        {
          label: "இந்தோனேசியா",
          lines: [
            "Jln. Tarutung",
            "Pematangsiantar, Sumatera Utara, Indonesia",
          ],
        },
        {
          label: "மலேசியா",
          lines: ["Kuala Lumpur, Malaysia"],
        },
      ],
      phones: [
        {
          label: "மலேசியா",
          display: "+60 11 2442 0613",
          tel: "+601124420613",
          wa: "https://wa.me/601124420613",
        },
        {
          label: "இந்தோனேசியா",
          display: "+62 813 6151 9101",
          tel: "+6281361519101",
          wa: "https://wa.me/6281361519101",
        },
      ],
      form: {
        name: "உங்கள் பெயர்",
        email: "மின்னஞ்சல்",
        phone: "தொலைபேசி (விருப்பம்)",
        service: "சேவை",
        message: "செய்தி",
        messagePlaceholder: "உங்களைப் பற்றியோ உங்கள் மாடலைப் பற்றியோ சொல்லுங்கள்…",
        select: "தேர்வு செய்…",
        submit: "கேள்வி அனுப்பு",
        received: "பெறப்பட்டது ♡",
        thankYou: "நன்றி,",
        demoNote:
          "இது கிளையன்ட்-சைடு சரிபார்ப்பு மட்டும் உள்ள டெமோ படிவம்—செய்தி அனுப்பப்படவில்லை. விரைவு பதிலுக்கு WhatsApp இல் தொடர்பு கொள்ளுங்கள்.",
        sendAnother: "மற்றொரு கேள்வி அனுப்பு",
        serviceOptions: [
          { value: "fittings", label: "குழந்தை & வயது வந்தோர் ஃபிட்டிங்" },
          { value: "portfolio-looks", label: "போர்ட்ஃபோலியோ லுக்குகள்" },
          { value: "runway-pageants", label: "ரன்வே & பேஜண்ட்" },
          { value: "party-occasion", label: "பார்ட்டி & விழா" },
          { value: "shoot-styling", label: "ஷூட் ஸ்டைலிங்" },
          { value: "wardrobe-consult", label: "வார்ட்ரோப் ஆலோசனை" },
        ],
        errors: {
          nameRequired: "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.",
          nameShort: "பெயர் குறைந்தது 2 எழுத்துகளாக இருக்க வேண்டும்.",
          emailRequired: "தயவுசெய்து உங்கள் மின்னஞ்சலை உள்ளிடவும்.",
          emailInvalid: "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.",
          phoneInvalid: "சரியான தொலைபேசி எண்ணை உள்ளிடவும்.",
          serviceRequired: "தயவுசெய்து ஒரு சேவையைத் தேர்ந்தெடுக்கவும்.",
          messageRequired: "தயவுசெய்து ஒரு சிறிய செய்தியை எழுதுங்கள்.",
          messageShort: "செய்தி குறைந்தது 10 எழுத்துகளாக இருக்க வேண்டும்.",
        },
      },
    },
    footer: {
      tagline: "பெண்கள் & சிறுமிகள் மாடலிங் · மென்மையான ஸ்டைல் · எல்லா வயதும்",
      copyright: "© {year} RIAS",
    },
    lang: {
      switcherAria: "மொழியைத் தேர்ந்தெடு",
    },
  },
};
