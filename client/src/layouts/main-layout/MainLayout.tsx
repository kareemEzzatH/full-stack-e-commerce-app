import { Header, Footer } from "@components/index";
import { Outlet } from "react-router-dom";
import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar";
import { CategoriesSideBar } from "@/features";

const MainLayout = () => {
  return (
<<<<<<< Updated upstream
    <div className="dark h-screen w-screen bg-background text-foreground">
      <Header />

        <Outlet />
=======
    <div className=" h-screen w-screen bg-background text-foreground">
      <Header />
 <SidebarProvider>
      <CategoriesSideBar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>

>>>>>>> Stashed changes

      <Footer />
    </div>
  );
};

export default MainLayout;
