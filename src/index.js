import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import Browse from "./components/Browse";
import Body from "./components/Body";
import { store } from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import GPTSearch from "./components/GPTSearch";
import ContentPage from "./components/ContentPage"


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/content/:id",
        element:<ContentPage/>
      },
      {
        path: "/GPTSearch",
        element: <GPTSearch />
      },

    ]
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <RouterProvider router={appRouter} />
);

