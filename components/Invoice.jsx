import React, { useState } from "react";
import { Input, Form, Row, Col, DatePicker, Select, Button, Modal } from "antd";

const Invoice = () => {
	const [currency, setCurrency] = useState("₦");
	const { TextArea } = Input;

	const { Option } = Select;

	const onCurrencySelect = (value) => {
		setCurrency(value);
	};

	const onDateChange = (date, dateString) => {
		console.log(date, dateString);
	};

	const onSubmit = (values) => {
		console.log(values);
		Modal.success({
			title: "Invoice Saved",
			content: `Invoice with number ${values["invoice-number"]} has been saved successfully`,
		});
	};

	return (
		<main>
			<div></div>
			<Form
				layout="vertical"
				onFinish={onSubmit}
				initialValues={{
					currency: "₦",
					vat: "5%",
					client: "abc",
				}}
			>
				<Form.Item
					name="invoice-number"
					label="Invoice Number"
					rules={[
						{
							required: true,
							message: "Please input an Invoice Number",
						},
					]}
				>
					<Input size={"large"} type="number" />
				</Form.Item>
				<Form.Item
					name="description"
					label="Item Description"
					rules={[
						{
							required: true,
							message: "Please input a short Description",
						},
					]}
				>
					<TextArea showCount maxLength={150} />
				</Form.Item>
				<Row gutter={16}>
					<Col flex={1}>
						<Form.Item label="Currency" name="currency">
							<Select onChange={onCurrencySelect} size={"large"}>
								<Option value="₦">Naira</Option>
								<Option value="$">Dollar</Option>
							</Select>
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item
							name="amount"
							label="Amount"
							rules={[
								{
									required: true,
									message: "Please enter an Amount",
								},
							]}
						>
							<Input
								size={"large"}
								type="number"
								prefix={currency}
							/>
						</Form.Item>
					</Col>

					<Col flex={1}>
						<Form.Item name="vat" label="VAT">
							<Select size={"large"}>
								<Option value="5%">5%</Option>
								<Option value="7.5%">7.5%</Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col flex={1}>
						<Form.Item
							name="invoice-date"
							label="Invoice Date"
							rules={[
								{
									required: true,
									message: "Please select a date",
								},
							]}
						>
							<DatePicker
								onChange={onDateChange}
								size={"large"}
							/>
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item
							name="delivery-date"
							label="Delivery Date"
							rules={[
								{
									required: true,
									message: "Please select a date",
								},
							]}
						>
							<DatePicker
								onChange={onDateChange}
								size={"large"}
							/>
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item
							name="settle-date"
							label="Settle Date"
							rules={[
								{
									required: true,
									message: "Please select a date",
								},
							]}
						>
							<DatePicker
								onChange={onDateChange}
								size={"large"}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Form.Item name="client" label="Client">
					<Select size={"large"}>
						<Option value="abc">ABC Industries</Option>
						<Option value="xyz">XYZ Industries</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name="order-no"
					label="Order Number"
					rules={[
						{
							required: true,
							message: "Please input an Order Number",
						},
					]}
				>
					<Input size={"large"} type="number" />
				</Form.Item>

				<Form.Item
					name="sales-agent"
					label="Sales Agent"
					rules={[
						{
							required: true,
							message: "Please input a Sales Agent",
						},
					]}
				>
					<Input size={"large"} type="text" />
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="fw"
						size={"large"}
					>
						Save Invoice
					</Button>
				</Form.Item>
			</Form>
		</main>
	);
};

export default Invoice;
