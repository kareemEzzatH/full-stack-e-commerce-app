import { createRoot } from "react-dom/client";

import "./index.css";
import AppRouter from "./routs/AppRouter.tsx";
import { Provider } from "react-redux";
import { store } from "@store/store.ts";
import { SidebarProvider } from "./components/ui/sidebar.tsx";



createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <SidebarProvider>

      <AppRouter />
    </SidebarProvider>



  </Provider>
);
