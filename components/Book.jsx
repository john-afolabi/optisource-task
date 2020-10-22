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
	Skeleton,
	notification,
	Typography,
	Divider,
} from "antd";
import { TagsOutlined, BookOutlined } from "@ant-design/icons";

const Book = () => {
	const [book, setBook] = useState({
		volumeInfo: { imageLinks: "", authors: [], categories: [] },
	});
	const [isbn, setISBN] = useState("0747532699");
	const [loading, setLoading] = useState(true);
	const { Title } = Typography;

	useEffect(() => {
		axios
			.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
			.then((res) => {
				res.data.totalItems
					? setBook(res.data.items[0])
					: notification.error({
							message: "Check ISBN",
							description:
								"The ISBN you entered is incorrect. Please check",
					  });

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
		<main style={{ width: "95%" }}>
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

					<Card>
						<Skeleton loading={loading} active>
							<Title level={4} style={{ textAlign: "center" }}>
								{book.volumeInfo.title}
							</Title>
							<Divider />
							<Row gutter={[16, 32]} align={"middle"}>
								<Col
									span={24}
									md={8}
									style={{ textAlign: "center" }}
								>
									<Image
										src={
											book.volumeInfo.imageLinks.thumbnail
										}
										width={"70%"}
									/>
								</Col>
								<Col span={24} md={16}>
									<div style={{ marginBottom: "1em" }}>
										<Space>
											<BookOutlined />
											{book.volumeInfo.authors.map(
												(author) => author
											)}
										</Space>
									</div>

									<div style={{ marginBottom: "1em" }}>
										<Space>
											<TagsOutlined />
											{book.volumeInfo.categories.map(
												(cat, index) => (
													<Tag key={index}>{cat}</Tag>
												)
											)}
										</Space>
									</div>

									<Rate
										disabled
										allowHalf
										defaultValue={
											book.volumeInfo.averageRating
										}
										style={{ marginBottom: "1em" }}
									/>
									<p>{book.volumeInfo.description}</p>
									<br />
									<Button
										href={book.volumeInfo.previewLink}
										target="_blank"
										type={"primary"}
										size={"large"}
									>
										View on Google Books
									</Button>
								</Col>
							</Row>
						</Skeleton>
					</Card>
				</Col>
			</Row>
		</main>
	);
};

export default Book;
