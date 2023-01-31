import React, { useEffect, useState } from 'react';

import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

//TODO: pull from a core package for Dto
interface InvoiceDto {
    id: string,
    invoice_number: string;
    total: number;
    currency: "USD" | "EUR" | "GBP" | "PEN";
    invoice_date: Date;
    due_date: Date;
    vendor_name: string;
    remittance_address: string;
    status: "pending" | "approved" | "rejected";
}

const Accounting = () => {

    const columns: ColumnsType<InvoiceDto> = [
        {
            title: 'Invoice Number',
            dataIndex: 'invoice_number',
            key: 'invoice_number',

        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
        },

        {
            title: 'Invoice Date',
            dataIndex: 'invoice_date',
            key: 'invoice_date',
            render: (invoice_date: string) => new Date(invoice_date).toLocaleDateString()
        },
        {
            title: 'Due Date',
            dataIndex: 'due_date',
            key: 'due_date',
            render: (due_data: string) => new Date(due_data).toLocaleDateString()

        },
        {
            title: 'Vendor Name',
            dataIndex: 'vendor_name',
            key: 'vendor_name',
        },
        {
            title: 'Remittance Address',
            dataIndex: 'remittance_address',
            key: 'remittance_address',
        },
        {
            title: 'Action',
            key: 'status',
            filters: [{
                text: 'approved',
                value: 'approved'
            }, {
                text: 'pending',
                value: 'pending',


            }, {
                text: 'rejected',
                value: 'rejected'
            }],
            dataIndex: 'status',
            defaultFilteredValue: ['pending'],
            onFilter: (value, record) => { return record.status === value },
            filterMultiple: false,
            render: (status, record) => (
                <>
                    {
                        //if Pending -> Show approve/Reject
                        //If != Pending -> Show status. 
                        (status === "pending") ? (
                            <>
                                <Button onClick={() => setInvoiceStatus(record, "approved")}>Approve</Button>
                                <Button onClick={() => setInvoiceStatus(record, "rejected")}>Reject</Button>
                            </>
                        ) : (<div>{(status)}</div>)
                    }
                </>
            ),
        }
    ];
    const setInvoiceStatus = async (invoice: InvoiceDto, status: "pending" | "rejected" | "approved") => {
        invoice.status = status;
        const res = await axios.put(`http://localhost:4001/invoice/${invoice.id}`, { invoice })
        if (res.status === 200) {
            //update it in the data. 


        }
        else {
            //throw an error to the UI notification service
            alert(JSON.stringify(res.data))
        }
    };

    const [data, setPosts] = useState<InvoiceDto[]>([]);
    const fetchInvoices = async (status: "pending" | "rejected" | "approved") => {
        const res = await axios.get(`http://localhost:4001/invoice/status/${status}`);
        if (res.status === 200) {
            setPosts(res.data.invoices);
        }

    };

    useEffect(() => {
        fetchInvoices("pending");

    }, []);


    return (
        <>
            <h2>Accounting</h2>
            <Table columns={columns} dataSource={data} />
        </>
    );

}
export default Accounting;