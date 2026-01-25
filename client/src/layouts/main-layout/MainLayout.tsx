import { Header, Footer } from "@components/index";
import { Outlet } from "react-router-dom";
import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar";
import { CategoriesSideBar } from "@/features";

const MainLayout = () => {
  return (
    <div className="dark h-screen w-screen bg-background text-foreground">
      <Header />

        <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
