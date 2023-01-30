import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import reportWebVitals from './reportWebVitals';
import CreateInvoice from "./routes/create-invoice";
import Accounting from './routes/accounting';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "create-invoice",
        element: <CreateInvoice />,
      },
      {
        path: "accounting",
        element: <Accounting />,
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
