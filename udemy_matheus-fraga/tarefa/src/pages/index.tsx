import Head from "next/head";
import styles from "../styles/home.module.css";
import Image from "next/image";
import heroImg from "../../public/assets/hero.png";
import { GetStaticProps } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConection";
import { TABLE_COMMNENT, TABLE_TASK } from "@/constants/tables";

interface HomeProps {
	posts: number;
	comments: number;
}

export default function Home({ posts, comments }: HomeProps) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Tarefas+ | Organize suas tarefas de forma fácil</title>
			</Head>
			<main className={styles.main}>
				<div className={styles.logoContent}>
					<Image
						className={styles.hero}
						src={heroImg}
						alt={"Logo Tarefa"}
						priority
					/>
				</div>
				<h1 className={styles.title}>
					Sistema feito para você organizar
					<br /> seus estudos e tarefas
				</h1>

				<div className={styles.infoContent}>
					<section className={styles.box}>
						<span>+{posts} post</span>
					</section>
					<section className={styles.box}>
						<span>+{comments} comentários</span>
					</section>
				</div>
			</main>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const commentRef = collection(db, TABLE_COMMNENT);
	const postRed = collection(db, TABLE_TASK);

	const commentSnapShot = await getDocs(commentRef);
	const postSnapShot = await getDocs(postRed);
	return {
		props: {
			posts: postSnapShot.size || 0,
			commnets: commentSnapShot.size || 0,
		},
		revalidate: 60,
	};
};
