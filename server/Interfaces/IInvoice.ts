
interface IInvoice {
    id: string,
    invoice_number: string;
    total: number;
    currency: CurrencyType;
    invoice_date: Date;
    due_date: Date;
    vendor_name: string;
    remittance_address: string;
    status: InvoiceStatus;
}

enum CurrencyType {
    unknown,
    USD, EUR, GBP, PEN
}

enum InvoiceStatus {
    unknown,
    pending,
    approved,
    rejected
}

export {
    CurrencyType, InvoiceStatus
};
export type { IInvoice };
