
//TODO; there should be some tests but I have some configuration issue with jest. 

import Container from 'typedi';
import InvoiceController from '../Controller/InvoiceController';



describe('Invoice Controller - Tests', () => {
    var httpMocks = require('node-mocks-http');

    const _controller = Container.get(InvoiceController);

    beforeEach(() => {
        /** Response Mock */
        response = createResponse();
    });


    it('should be defined', () => {
        expect(_controller).toBeDefined();
    });

});