import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import AppRouter from "./routs/AppRouter.tsx";
import { Provider } from "react-redux";
import { store } from "@store/store.ts";
import { SidebarProvider } from "./components/ui/sidebar.tsx";



createRoot(document.getElementById("root")!).render(
<<<<<<< Updated upstream
  <Provider store={store}>
    <SidebarProvider>
      
      <AppRouter />
    </SidebarProvider>



  </Provider>
=======
  <StrictMode>
    <Provider store={store}>
      <SidebarProvider>
        <AppRouter />
      </SidebarProvider>
    </Provider>
  </StrictMode>
>>>>>>> Stashed changes
);
