
import { Request, Response } from "express";

import { Service } from "typedi";
import InvoiceService from '../Services/InvoiceService';
import { Invoice } from "../Models/invoice";


@Service()
class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService) { }

    SaveInvoice(_req: Request, res: Response) {


        //TODO: Should be an InvoiceDto or atleast we should verify the type of object somehow. 
        // if (typeof (_req.body) !== typeof (Invoice)) {
        //     res.status(400).send({
        //         message: `Invoice must be type of ${typeof (Invoice)}`
        //     });
        //     return;
        // }


        const invoice = new Invoice(_req.body);

        //ENHANCE :- Run any Validation or scrubbing that needs to happen before we persist the data. 
        if (this.invoiceService.SaveInvoice(invoice)) {

            console.log("setting 200 response");

            res.status(200).send({
                "message": "invoice submitted successfully"
            });
            return res;
        }

        res.status(400).send({
            message: `Unable to save invoice`
        });

        return res;

    };
    ///Route: /invoice/:id
    GetInvoiceById(_req: Request, res: Response) {

        const invoiceId = _req.params.id || '';


        const invoice = this.invoiceService.GetInvoice(invoiceId);

        //invoice was found
        if (invoice.id === invoiceId) {
            res.status(200).send(invoice);
            return res;
        }

        res.status(404).send({
            message: `Invoice with id ${invoiceId} not found.`
        });
        return res;
    }
    //Route: /invoice/:status/status
    GetInvoicesByStatus(_req: Request, res: Response) {

        //Cast the status from the route to our Enums
        const status = _req.params.status;

        console.log(`status ${status}`);


        if (status) {

            const invoices = this.invoiceService.GetInvoicesByStatus(status);

            console.log(`Return Invoices: ${invoices}`);

            if (invoices.length > 0) {
                // found some invoices
                res.status(200).send({ invoices });
                return res;
            }
        }

        res.status(404).send({
            message: `Unable to find Invoices for status: ${status}`
        });

        return res;
    };
};

export default InvoiceController;