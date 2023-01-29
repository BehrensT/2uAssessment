
import { InvoiceStatus } from "../Interfaces/IInvoice";
import { Service } from "typedi";
import InvoiceRepoMemory from '../Repositories/InvoiceRepoMemory';
import { Invoice } from "../Models/invoice";


@Service()
class InvoiceService {
    constructor(private readonly invoiceRepo: InvoiceRepoMemory) { }

    SaveInvoice(data: Invoice): boolean {

        //ENHANCE :- Run any Validation or scrubbing that needs to happen before we persist the data. 
        return this.invoiceRepo.Save(data);

    }

    GetInvoice(id: string): Invoice {

        const invoice = this.invoiceRepo.Get(id);
        return invoice;
    };

    GetInvoicesByStatus(status: InvoiceStatus): Invoice[] {

        return this.GetInvoicesByStatus(status);

    };




};

export default InvoiceService;