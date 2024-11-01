import LocaleSwitcher from "@/i18n/locale-switcher";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="ms-10 flex flex-grow flex-col justify-center gap-1">
      <h1>{t("app_title")}</h1>
      <p>{t("hello_world")}</p>
      <LocaleSwitcher />
    </main>
  );
}
