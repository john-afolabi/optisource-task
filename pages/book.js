import Head from "next/head";
import styles from "../styles/Home.module.css";
import Book from "../components/Book";

export default function BookPage() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Book />
		</div>
	);
}
