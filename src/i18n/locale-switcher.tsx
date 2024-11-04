import { useTranslation } from "react-i18next";
import { supportedLngs } from "@/i18n/config";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
    <ToggleGroup
      type="single"
      value={i18n.resolvedLanguage}
      onValueChange={(value) => i18n.changeLanguage(value)}
      className="gap-3 rounded-lg border border-gray-700 bg-[#1a1a2e] p-1"
    >
      {Object.entries(supportedLngs).map(([code, name]) => (
        <ToggleGroupItem
          key={code}
          value={code}
          className="h-full w-8 rounded-lg bg-[#2a2d43] px-1 text-white transition-colors duration-200 hover:bg-gray-700 data-[state=on]:bg-blue-600 data-[state=on]:text-white md:text-xs lg:px-2 lg:text-sm"
        >
          {name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
