import { createBrowserRouter } from "react-router-dom";
import App from "@/app";
import Overview from "@/pages/overview";
import LearningProgress from "@/pages/learning-progress";
import Profile from "@/pages/profile";
import Settings from "@/pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "learning-progress",
        element: <LearningProgress />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
