import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routs/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(<AppRouter />);
