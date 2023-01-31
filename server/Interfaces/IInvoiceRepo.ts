import { IInvoice } from "./IInvoice";


export interface IInvoiceRepo {
    Upsert(data: IInvoice): boolean;
    GetAll(): IInvoice[];
    Get(id: string): IInvoice;
    GetByStatus(status: string): IInvoice[];

}