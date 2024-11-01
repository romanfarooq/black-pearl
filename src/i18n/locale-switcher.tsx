import { useTranslation } from "react-i18next";
import { supportedLngs } from "@/i18n/config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Select
      value={i18n.resolvedLanguage}
      onValueChange={(value) => i18n.changeLanguage(value)}
    >
      <SelectTrigger className="w-40">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(supportedLngs).map(([code, name]) => (
          <SelectItem key={code} value={code}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
