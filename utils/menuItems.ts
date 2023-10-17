import IndicatorIcon from "@/assets/icons/IndicatorIcon";
import MySpaceIcon from "@/assets/icons/MySpaceIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import SoldeIcon from "@/assets/icons/SoldeIcon";
import ValidationIcon from "@/assets/icons/ValidationIcon";

export const elements = [
  {
    item: "Mon espace",
    icon: MySpaceIcon,
    subItems: [],
  },
  {
    item: "Validation",
    icon: ValidationIcon,
    subItems: [],
  },
  {
    item: "Indicateurs",
    icon: IndicatorIcon,
    subItems: [],
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
