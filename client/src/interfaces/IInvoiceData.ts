
interface IInvoiceData {
    invoice_number: string;
    total: number;
    currency: CurrencyType;
    invoice_date: Date;
    due_date: Date;
    vendor_name: string;
    remittance_address: string;
}

enum CurrencyType {
    USD, EUR, GBP
}

export {
    CurrencyType
};
export type { IInvoiceData };
