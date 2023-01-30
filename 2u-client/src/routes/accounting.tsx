import React from 'react';

import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
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
const columns: ColumnsType<DataType> = [
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
        render: (invoice_date: Date) => invoice_date.toLocaleDateString()
    },
    {
        title: 'Due Date',
        dataIndex: 'due_date',
        key: 'due_date',
        render: (due_data: Date) => due_data.toLocaleDateString()

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
        dataIndex: 'status',
        render: (status) => (
            <Space size="middle">
                {
                    //if Pending -> Show approve/Reject
                    //If != Pending -> Show status. 
                    (status === "pending") ? (
                        <>
                            <Button>Approve</Button>
                            <Button>Reject</Button>
                        </>
                    ) : (<div>{(status)}</div>)
                }


            </Space>
        ),
    }

];
const data: DataType[] = [
    {
        id: "f8f1cbe7",
        invoice_number: "12345",
        total: 200,
        currency: "USD",
        invoice_date: new Date("2023-01-30T21:38:02.813Z"),
        due_date: new Date("2024-02-28T21:38:07.219Z"),
        vendor_name: "Tester",
        remittance_address: "123 Main St, Charlotte NC 28227",
        status: "pending"
    },
    {
        id: "be9b3462",
        invoice_number: "12345",
        total: 200,
        currency: "USD",
        invoice_date: new Date("2023-01-30T21:38:02.813Z"),
        due_date: new Date("2023-06-28T21:38:07.219Z"),
        vendor_name: "Yeah",
        remittance_address: "123 Main St, Charlotte NC 28227",
        status: "pending"
    },
    {
        id: "be9b3462",
        invoice_number: "12345",
        total: 200,
        currency: "USD",
        invoice_date: new Date("2023-01-30T21:38:02.813Z"),
        due_date: new Date("2023-06-28T21:38:07.219Z"),
        vendor_name: "Yeah",
        remittance_address: "123 Main St, Charlotte NC 28227",
        status: "rejected"
    }
]
function Accounting() {

    return (
        <>
            <h2>Accounting</h2>
            <Table columns={columns} dataSource={data} />


        </>
    );

}
export default Accounting;