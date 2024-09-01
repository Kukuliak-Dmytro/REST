import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Browse } from './pages/Browse/Browse.tsx';
import { Create } from './pages/Create.tsx';
import { Delete } from './pages/Delete.tsx';
import { Update } from './pages/Update.tsx';
import { Read } from './pages/Read.tsx';
const router = createBrowserRouter([
  {
    path: "/REST/",
    element: <App />,
    children: [
      {
        path: "/REST/",
        element: <Browse />,
      },
      {
        path: "/REST/Create",
        element: <Create />,
      },
      {
        path: "/REST/Read",
        element: <Read />,
      },
      {
        path: "/REST/Update",
        element: <Update />,
      },
      {
        path: "/REST/Delete",
        element: <Delete />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);