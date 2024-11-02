import Header from "@/components/header";
import Footer from "@/components/footer";
import useLocalizeDocumentAttributes from "@/i18n/useLocalizeDocumentAttributes";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  useLocalizeDocumentAttributes();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="lg:container lg:mx-auto flex-1 px-4 pt-24 md:pt-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
