import { CurrencyType, IInvoice, InvoiceStatus } from "../Interfaces/IInvoice";
const { randomBytes } = require("crypto");

export class Invoice implements IInvoice {
    constructor(data?: IInvoice) {
        this.id = randomBytes(4).toString('hex');
        this.invoice_number = data?.invoice_number ?? ''
        this.total = data?.total ?? 0.00;
        this.currency = data?.currency ?? CurrencyType.unknown;
        this.invoice_date = data?.invoice_date ?? new Date();
        this.due_date = data?.due_date ?? new Date();
        this.vendor_name = data?.vendor_name ?? ''
        this.remittance_address = data?.remittance_address ?? ''
        this.status = data?.status ?? InvoiceStatus.unknown;
    }

    log(): void {

        console.log(JSON.stringify(`{
            invoice_number:${this.invoice_number}, 
            total:${this.total}, 
            currency:${this.currency}, 
            invoice_date:${this.invoice_date}, 
            due_date:${this.due_date}, 
            vendor_name:${this.vendor_name}, 
            remittance_address:${this.remittance_address}, 
            status:${this.status}, 
        }`));
    }
    //properties
    readonly id: string;
    invoice_number: string;
    total: number;
    currency: CurrencyType;
    invoice_date: Date;
    due_date: Date;
    vendor_name: string;
    remittance_address: string;
    status: InvoiceStatus


}

