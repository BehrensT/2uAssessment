import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import Invoice, { loader as contactLoader } from "./routes/invoice";
import CreateInvoice from "./routes/create";
import ErrorPage from "./Pages/error-page";

import './index.css';

import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        path: "invoice",
        element: <Invoice />,
        loader: contactLoader,
      },
      {
        errorElement: <ErrorPage />,
        path: "invoice/create",
        element: <CreateInvoice />,
        loader: contactLoader,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
