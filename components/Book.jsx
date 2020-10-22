import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Card,
	Tag,
	Rate,
	Form,
	Button,
	Input,
	Row,
	Col,
	Space,
	Image,
} from "antd";
import { TagsOutlined, BookOutlined } from "@ant-design/icons";

const Book = () => {
	const [book, setBook] = useState();
	const [isbn, setISBN] = useState("0747532699");
	const [loading, setLoading] = useState(true);
	const { Meta } = Card;

	useEffect(() => {
		axios
			.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
			.then((res) => {
				setBook(res.data.items[0]);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [isbn]);

	const onSubmit = (values) => {
		setISBN(values.isbn);
		values.isbn !== isbn ? setLoading(true) : null;
	};

	return (
		<main>
			<Row justify={"center"}>
				<Col span={24} md={{ span: 16 }}>
					<Form onFinish={onSubmit} size={"large"}>
						<Row gutter={16}>
							<Col span={24} md={12}>
								<Form.Item label="ISBN" name="isbn">
									<Input size="large" value={isbn} />
								</Form.Item>
							</Col>
							<Col span={24} md={12}>
								<Form.Item>
									<Button
										type="primary"
										htmlType="submit"
										size="large"
									>
										Enter
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Form>
					<br />

					{!loading && (
						<Card title={book.volumeInfo.title} bordered={true}>
							<Row gutter={[16, 16]} align={"middle"}>
								<Col
									span={24}
									md={8}
									style={{ textAlign: "center" }}
								>
									<Image
										src={
											book.volumeInfo.imageLinks.thumbnail
										}
									/>
								</Col>
								<Col span={24} md={16}>
									<p>
										<Space>
											<BookOutlined />
											{book.volumeInfo.authors.map(
												(author) => author
											)}
										</Space>
									</p>
									<p>
										<Space>
											<TagsOutlined />
											{book.volumeInfo.categories.map(
												(cat, index) => (
													<Tag key={index}>{cat}</Tag>
												)
											)}
										</Space>
									</p>

									<Rate
										disabled
										allowHalf
										defaultValue={
											book.volumeInfo.averageRating
										}
										style={{ marginBottom: "1em" }}
									/>
									<p>{book.volumeInfo.description}</p>

									<Button> </Button>
								</Col>
							</Row>
						</Card>
					)}
				</Col>
			</Row>
		</main>
	);
};

export default Book;
