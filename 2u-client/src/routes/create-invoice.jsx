import {
    Form,
    Input,
    Button,
    DatePicker,
    InputNumber,
    TreeSelect,

} from 'antd';
import axios, { AxiosResponse } from 'axios'



//This should come from the server 
const currencyMap = ["USD", "EUR", "GBP", "PEN"]





function CreateInvoice() {


    const [form] = Form.useForm();

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();

            //There has to be a way to create a "core" package to share DTO's
            //for this I'll just use the name parameters from the Form.Item(s)

            await axios.post('http://localhost:4001/invoice', values
            ).catch((err) => {
                console.log(err.message);
            }).then((res) => {


                /*
                    I don't understand how to get the type saftey on the response. 
                    I tried typing it to AxiosResponse<any> -> which is an interface
                    and other things.. 

                    converted from tsx to jsx to get past the type safety..
                */
                //TODO: update the UI / card notification for better solution. 
                alert(res.data.message);
                form.resetFields();

                console.log(JSON.stringify(res));
            });
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <>
            <h2>Create Invoice</h2>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                form={form}
            >
                <Form.Item
                    label="Invoice Number:"
                    name="invoice_number"
                    rules={[{ required: true, message: 'Please enter Invoice Number' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Total"
                    name="total"
                    rules={[{ required: true, message: 'Please enter an invoice amount.' }]}
                //rtodo: add some percision for decimal and other validation
                >
                    <InputNumber defaultValue={0} />
                </Form.Item>
                <Form.Item
                    label="Currency"
                    name="currency"
                    rules={[{ required: true, message: 'Please select the currency' }]}
                >
                    <TreeSelect
                        treeData={currencyMap.map(cur => ({
                            title: cur,
                            value: cur
                        }))}
                    />
                </Form.Item>
                <Form.Item
                    label="Invoice Date"
                    name="invoice_date"
                    rules={[{ required: true, message: 'Please select an invoice date' }]}
                >

                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Due Date"
                    name="due_date"
                    rules={[{ required: true, message: 'Please select a due date' }]}                    >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Vendor Name"
                    name="vendor_name"
                    rules={[{ required: true, message: 'Please select a vendor' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Remittance Address"
                    name="remittance_address"
                    rules={[{ required: true, message: 'Please enter an address' }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={handleSubmit}>Submit</Button>
                </Form.Item>

            </Form>




        </>
    );
}
export default CreateInvoice;