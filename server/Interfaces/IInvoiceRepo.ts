import { IInvoice } from "./IInvoice";

export interface IInvoiceRepo {
    Save(data: IInvoice): boolean;
    Get(id: string): IInvoice;
    GetByStatus(status: string): IInvoice[];

}