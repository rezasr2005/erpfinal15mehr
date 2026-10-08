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
    "name": {
      "fa": "شرکت هامون نایزه",
      "en": "Hamoun Nayzeh"
    }
  },
  {
    "id": "sudico",
    "name": {
      "fa": "کارخانه تهیه و توزیع مواد ریخته‌گری و قطعات صنعتی ایران (سودیکو)",
      "en": "Iran Foundry Materials & Industrial Parts (Soudico)"
    }
  },
  {
    "id": "fooladsazan-jam",
    "name": {
      "fa": "شرکت فولادسازان جم",
      "en": "Fooladsazan Jam"
    }
  },
  {
    "id": "iran-tractor",
    "name": {
      "fa": "کارخانه تراکتورسازی ایران",
      "en": "Iran Tractor Manufacturing"
    }
  },
  {
    "id": "machine-sazi-tabriz",
    "name": {
      "fa": "کارخانه ماشین‌سازی تبریز",
      "en": "Machine Sazi Tabriz"
    }
  },
  {
    "id": "ghaltaksazan-sepahan",
    "name": {
      "fa": "شرکت غلتک‌سازان سپاهان",
      "en": "Ghaltaksazan Sepahan"
    }
  },
  {
    "id": "mazandaran-steel",
    "name": {
      "fa": "کارخانه فولاد مازندران",
      "en": "Mazandaran Steel"
    }
  },
  {
    "id": "kavir-damghan",
    "name": {
      "fa": "شرکت فولاد کویر دامغان",
      "en": "Kavir Damghan Steel"
    }
  },
  {
    "id": "peyman-profile-asia",
    "name": {
      "fa": "شرکت پیمان پروفیل آسیا",
      "en": "Peyman Profile Asia"
    }
  },
  {
    "id": "mahan-alloy-pars",
    "name": {
      "fa": "شرکت ماهان آلیاژ پارس",
      "en": "Mahan Alloy Pars"
    }
  },
  {
    "id": "qazvin-kelach",
    "name": {
      "fa": "شرکت کلاچ قزوین",
      "en": "Qazvin Clutch"
    }
  },
  {
    "id": "tabarestan-steel-foundry",
    "name": {
      "fa": "شرکت صنایع ریخته‌گری فولاد طبرستان",
      "en": "Tabarestan Steel Foundry Industries"
    }
  }
];
