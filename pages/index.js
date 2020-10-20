import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome</h1>

				<div className={styles.grid}>
					<a href="/invoice" className={styles.card}>
						<h3>Invoice &rarr;</h3>
						<p>
							Simple invoice form with Modal built with Next,
							Ant-Design
						</p>
					</a>

					<a href="/book" className={styles.card}>
						<h3>Google Book API &rarr;</h3>
						<p>
							Displaying data from Google Book API with search by
							book id
						</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img
						src="/vercel.svg"
						alt="Vercel Logo"
						className={styles.logo}
					/>
				</a>
			</footer>
		</div>
	);
}
