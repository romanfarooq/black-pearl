import Header from "@/components/header";
import Footer from "@/components/footer";
import useLocalizeDocumentAttributes from "@/i18n/useLocalizeDocumentAttributes";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  useLocalizeDocumentAttributes();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
