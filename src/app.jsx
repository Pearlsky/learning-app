import { Outlet } from "react-router-dom";
import AppLayout from "@/layouts/app-layout";

const App = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
);

export default App;
