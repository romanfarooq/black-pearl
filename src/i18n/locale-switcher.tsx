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
      className="flex space-x-2 rounded-lg border border-gray-700 bg-[#1a1a2e] p-1"
    >
      {Object.entries(supportedLngs).map(([code, name]) => (
        <ToggleGroupItem
          className="flex-1 rounded-lg h-full w-full px-2 bg-[#2a2d43] text-white transition-colors duration-200 hover:bg-gray-700 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          key={code}
          value={code}
        >
          {name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
