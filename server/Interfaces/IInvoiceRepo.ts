import { IInvoice } from "./IInvoice";

export interface IInvoiceRepo {
    Upsert(data: IInvoice): boolean;
    Get(id: string): IInvoice;
    GetByStatus(status: string): IInvoice[];

}