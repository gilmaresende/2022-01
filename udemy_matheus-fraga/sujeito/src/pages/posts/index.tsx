import Head from "next/head";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import thumb from "../../../public/images/thumb.png";

export default function Post() {
	return (
		<>
			<Head>
				<title>Blog | Sujeito Dev</title>
			</Head>
			<main className={styles.container}>
				<div className={styles.post}>
					<Link href="/">
						<div className={styles.link}>
							<Image
								src={thumb}
								alt={"Post Title 1"}
								width={720}
								height={410}
								quality={100}
							/>
							<strong>Criating my first app</strong>
							<time>14 Julho 2023</time>
							<p>
								Today we going created the control of show the password, an
								option for the our register form and login. But stop talk and
								let's go to code together, that the video is very good
							</p>
						</div>
					</Link>
					<Link href="/">
						<div className={styles.link}>
							<Image
								src={thumb}
								alt={"Post Title 1"}
								width={720}
								height={410}
								quality={100}
							/>
							<strong>Criating my first app</strong>
							<time>14 Julho 2023</time>
							<p>
								Today we going created the control of show the password, an
								option for the our register form and login. But stop talk and
								let's go to code together, that the video is very good
							</p>
						</div>
					</Link>
				</div>
			</main>
		</>
	);
}
