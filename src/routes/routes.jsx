import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.jsx";
import Main from "../Layouts/Main.jsx";
import Home from "../pages/Home/Home.jsx";
import ManagementLayout from "../Layouts/ManagementLayout.jsx";
import SP_Manage from "../pages/Management/Specialty/SP_Manage/SP_Manage.jsx";
import SP_Create from "../pages/Management/Specialty/SP_Create/SP_Create.jsx";
import SP_Update from "../pages/Management/Specialty/SP_Update/SP_Update.jsx";
import EX_Create from "../pages/Management/Exam/EX_Create/EX_Create.jsx";
import EX_Manage from "../pages/Management/Exam/EX_Manage/EX_Manage.jsx";
import EX_Update from "../pages/Management/Exam/EX_Update/EX_Update.jsx";
import Login from "../pages/Login/Login.jsx";
import Registration from "../pages/Registration/Registration.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoutes><Main /></PrivateRoutes>,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/manage',
          element: <ManagementLayout />,
          children: [
            {
              path: '/manage/sp-manage/manage',
              element: <SP_Manage />,
            },
            {
              path: '/manage/sp-manage/create',
              element: <SP_Create />,
            },
            {
              path: '/manage/sp-manage/update',
              element: <SP_Update />,
            },
            {
              path: '/manage/ex-manage/create',
              element: <EX_Create />,
            },
            {
              path: '/manage/ex-manage/manage',
              element: <EX_Manage />,
            },
            {
              path: '/manage/ex-manage/update',
              element: <EX_Update />,
            },
          ],
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
  
  ]);