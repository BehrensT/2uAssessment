const bodyParser = require("body-parser");
import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import Container from 'typedi';
import InvoiceController from './Controller/InvoiceController';


const main = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    const _invoiceController = Container.get(InvoiceController);


    app.post('/invoice', (req, res) => _invoiceController.SaveInvoice(req, res));

    app.get('/invoice', (req, res) => _invoiceController.GetAllInvoices(req, res));

    app.get('/invoice/:id', (req, res) => _invoiceController.GetInvoiceById(req, res));

    app.get('/invoice/status/:status', (req, res) => _invoiceController.GetInvoicesByStatus(req, res));

    app.put('/invoice/:id', (req, res) => _invoiceController.UpdateInvoice(req, res));

    app.patch('/invoice/:id', (req, res) => _invoiceController.PatchInvoice(req, res));

    app.listen(4001, () => {
        console.log("Listening on 4001");
    });

}

main().catch(err => {
    console.error(err);
});