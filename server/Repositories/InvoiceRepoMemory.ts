
import { InvoiceStatus } from "../Interfaces/IInvoice";
import { IInvoiceRepo } from "../Interfaces/IInvoiceRepo";
import { Invoice } from "../Models/invoice";
import { Service } from "typedi";


@Service()
class InvoiceRepoMemory implements IInvoiceRepo {
    #invoices: Invoice[];
    constructor() {
        this.#invoices = [];
    }

    Save(data: Invoice): boolean {

        //since this is just an inMemory store, we'll just push it on the array and return true. 
        this.#invoices.push(data);
        console.log("Saving Invoice");
        return true;
    };
    ///Return the invoice or an empty one
    Get(id: string): Invoice {


        return this.#invoices.find(i => i.id === id) ?? new Invoice();

    };
    ///Find all invoices for a give status
    GetByStatus(status: InvoiceStatus): Invoice[] {

        return this.#invoices.filter(i => i.status === status);

    };

};

export default InvoiceRepoMemory;