

import { IInvoiceRepo } from "../Interfaces/IInvoiceRepo";
import { Invoice } from "../Models/invoice";
import { Service } from "typedi";


@Service()
class InvoiceRepoMemory implements IInvoiceRepo {
    #invoices: Invoice[];
    constructor() {
        this.#invoices = [];
    }

    Upsert(data: Invoice): boolean {


        //check to see if the if is already there.. 
        const index = this.#invoices.findIndex(i => i.id === data.id);

        if (index === -1) {
            this.#invoices.push(data);
        }
        else {
            this.#invoices[index] = data;
        }
        return true;
    };
    ///Return the invoice or an empty one
    Get(id: string): Invoice {
        return this.#invoices.find(i => i.id === id) ?? new Invoice();
    };
    ///Find all invoices for a give status
    GetByStatus(status: string): Invoice[] {
        return this.#invoices.filter(i => i.status === status);;
    };

};

export default InvoiceRepoMemory;




