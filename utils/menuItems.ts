import IndicatorIcon from "@/assets/icons/IndicatorIcon";
import MySpaceIcon from "@/assets/icons/MySpaceIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import SoldeIcon from "@/assets/icons/SoldeIcon";
import ValidationIcon from "@/assets/icons/ValidationIcon";

export const elements = [
  {
    item: "Mon espace",
    icon: MySpaceIcon,
    subItems: [
      "Mes congés",
      "Mes absences",
      "Mes soldes",
      "Mes compteurs",
      "Mes indicateurs",
    ],
  },
  {
    item: "Validation",
    icon: ValidationIcon,
    subItems: [
      "Validation des congés",
      "Validation des absences",
      "Validation des soldes",
      "Validation des compteurs",
      "Validation des indicateurs",
    ],
  },
  {
    item: "Indicateurs",
    icon: IndicatorIcon,
    subItems: [
      "Indicateurs de gestion",
      "Indicateurs de suivi",
      "Indicateurs de pilotage",
    ],
  },
  {
    item: "Soldes",
    icon: SoldeIcon,
    subItems: [
      "Gestion des soldes",
      "Ajuster un solde",
      "Compteurs",
      "Historique",
    ],
  },
  {
    item: "Recherche",
    icon: SearchIcon,
    subItems: [],
  },
];
