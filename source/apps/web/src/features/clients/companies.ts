import type { SupportedLocale } from "@kavian/config";

type ClientCompany = {
  id: string;
  name: Record<SupportedLocale, string>;
  logo?: { src: string; width: number; height: number; darkBackground?: boolean };
};

// Attach only visually verified, locally stored logos to the matching company.
export const clientCompanies: ClientCompany[] = [
  {
    "id": "hamoun-nyzeh",
    "logo": {"src": "/clients/hamoun-nyzeh.png", "width": 220, "height": 208, "darkBackground": true},
    "name": {
      "fa": "شرکت هامون نایزه",
      "en": "Hamoun Nayzeh"
    }
  },
  {
    "id": "sudico",
    "logo": {"src": "/clients/sudico.jpg", "width": 136, "height": 132},
    "name": {
      "fa": "کارخانه تهیه و توزیع مواد ریخته‌گری و قطعات صنعتی ایران (سودیکو)",
      "en": "Iran Foundry Materials & Industrial Parts (Soudico)"
    }
  },
  {
    "id": "fooladsazan-jam",
    "logo": {"src": "/clients/fooladsazan-jam.png", "width": 200, "height": 95, "darkBackground": true},
    "name": {
      "fa": "شرکت فولادسازان جم",
      "en": "Fooladsazan Jam"
    }
  },
  {
    "id": "iran-tractor",
    "logo": {"src": "/clients/iran-tractor.jpg", "width": 160, "height": 160},
    "name": {
      "fa": "کارخانه تراکتورسازی ایران",
      "en": "Iran Tractor Manufacturing"
    }
  },
  {
    "id": "machine-sazi-tabriz",
    "logo": {"src": "/clients/machine-sazi-tabriz.png", "width": 167, "height": 133},
    "name": {
      "fa": "کارخانه ماشین‌سازی تبریز",
      "en": "Machine Sazi Tabriz"
    }
  },
  {
    "id": "ghaltaksazan-sepahan",
    "logo": {"src": "/clients/ghaltaksazan-sepahan.png", "width": 300, "height": 88, "darkBackground": true},
    "name": {
      "fa": "شرکت غلتک‌سازان سپاهان",
      "en": "Ghaltaksazan Sepahan"
    }
  },
  {
    "id": "mazandaran-steel",
    "logo": {"src": "/clients/mazandaran-steel.svg", "width": 5713, "height": 1600},
    "name": {
      "fa": "کارخانه فولاد مازندران",
      "en": "Mazandaran Steel"
    }
  },
  {
    "id": "kavir-damghan",
    "logo": {"src": "/clients/kavir-damghan.jpg", "width": 300, "height": 300},
    "name": {
      "fa": "شرکت فولاد کویر دامغان",
      "en": "Kavir Damghan Steel"
    }
  },
  {
    "id": "peyman-profile-asia",
    "logo": {"src": "/clients/peyman-profile-asia.png", "width": 228, "height": 186, "darkBackground": true},
    "name": {
      "fa": "شرکت پیمان پروفیل آسیا",
      "en": "Peyman Profile Asia"
    }
  },
  {
    "id": "mahan-alloy-pars",
    "logo": {"src": "/clients/mahan-alloy-pars.png", "width": 202, "height": 60},
    "name": {
      "fa": "شرکت ماهان آلیاژ پارس",
      "en": "Mahan Alloy Pars"
    }
  },
  {
    "id": "qazvin-kelach",
    "logo": {"src": "/clients/qazvin-kelach.png", "width": 259, "height": 32, "darkBackground": true},
    "name": {
      "fa": "شرکت کلاچ قزوین",
      "en": "Qazvin Clutch"
    }
  },
  {
    "id": "tabarestan-steel-foundry",
    "logo": {"src": "/clients/tabarestan-steel-foundry.png", "width": 300, "height": 96},
    "name": {
      "fa": "شرکت صنایع ریخته‌گری فولاد طبرستان",
      "en": "Tabarestan Steel Foundry Industries"
    }
  }
];
