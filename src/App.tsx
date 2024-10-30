import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import LocaleSwitcher from "./i18n/locale-switcher";
import { useTranslation } from "react-i18next";

function App() {
  useLocalizeDocumentAttributes();
  const { t } = useTranslation();

  return (
    <div className="container mx-auto flex h-screen flex-col justify-center px-4">
      <div>
        <LocaleSwitcher />
      </div>
      <h1 className="text-4xl font-bold">{t("hello_world")}</h1>
    </div>
  );
}

export default App;
