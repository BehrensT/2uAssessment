import "./TransactionPage.css";
import CommentsIcon from "./icons/Comments";
import IdCardIcon from "./icons/IdCard";
import BadgeDollarIcon from "./icons/BadgeDollar";
import { IInvoiceData } from './interfaces/IInvoiceData';


interface SectionProps {
  header: any, items: any, itemClassName: any
}


const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

function Section(props: SectionProps) {
  return (
    <div></div>
  );
}


export default function TransactionPage(data: IInvoiceData) {

  return (
    <div>
      <header>
        <strong>{`${data.vendor_name}`}</strong>
        <em>{data.invoice_number}</em>
      </header>
      <section>

        <Section
          header="Prescriptions"
          items={data}
          itemClassName="Item--Prescription"
        />

      </section>
      <footer className="TransactionPage--footer">
        <div>
          <span>Total Paid</span>
          <span className="DollaDolla">
            {money.format(data.total)}
          </span>
        </div>
      </footer>
    </div>
  );
}
