import Head from "next/head";
import styles from "../styles/Home.module.css";
import Invoice from "../components/Invoice";

export default function InvoicePage() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Invoice />
		</div>
	);
}
