
import { useState } from 'react';
import './App.css';
import TransactionPage from "./TransactionPage";
import Sidebar from "./Sidebar";
import { CurrencyType, IInvoiceData } from './interfaces/IInvoiceData';








let invoice: IInvoiceData[];





function Page({ children }: any) {
  return <main className="Page">{children}</main>;
}

function TransactionSidebarEntry(data: IInvoiceData) {


  return (
    <div className={`TransactionSidebarEntry active`}>
      <strong>{`${data.vendor_name}`}</strong>
      <em>{data.invoice_number}</em>
    </div>
  );

}


function App() {
  invoice = [];

  invoice.push({

    invoice_number: "12345",
    total: 199.99,
    currency: CurrencyType.USD,
    invoice_date: new Date(2019, 8, 17),
    due_date: new Date(2019, 9, 17),
    vendor_name: "Acme Cleaners Inc.",
    remittance_address: "123 ABC St. Charlotte, NC 28209"

  });

  const [activeItem, setActive] = useState(invoice);


  console.log(invoice[0]);

  return (
    <div className="App" >
      <Sidebar
        header="Completed"
        items={invoice}
        isItemActive={(item: any) => item === activeItem}
        renderItem={TransactionSidebarEntry}
        onItemClick={setActive}
      />
      <Page>
        <TransactionPage {...invoice[0]} />
      </Page>
    </div >
  );
}

export default App;
