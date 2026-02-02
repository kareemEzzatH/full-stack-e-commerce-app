import { Header, Footer } from "@components/index";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (<>  <div className=" flex  h-screen w-screen flex-col  bg-background text-foreground">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>


    <Footer />
  </div>


  </>

  );
};

export default MainLayout;
