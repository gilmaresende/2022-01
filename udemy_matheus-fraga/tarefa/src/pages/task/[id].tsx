import Head from "next/head";
import styles from "./styles.module.css";
import { GetServerSideProps } from "next";
import { db } from "../../services/firebaseConection";
import { doc, collection, query, getDoc } from "firebase/firestore";
import { redirect } from "next/dist/server/api-utils";
import { Textarea } from "@/components/textarea";

interface TaksProps {
	item: {
		tarefa: string;
		public: boolean;
		created: string;
		user: string;
		taskId: string;
	};
}

export default function Task({ item }: TaksProps) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Tarefa - Detalhes da Tarefa</title>
			</Head>
			<main className={styles.main}>
				<h1>Tarefa</h1>
				<article className={styles.task}>
					<p>{item.tarefa}</p>
				</article>
			</main>
			<section className={styles.commentsContainer}>
				<h2>Deixe seu Comentário</h2>
				<form action="">
					<Textarea placeholder="Digite seu comentario"></Textarea>
					<button className={styles.button}>Enviar Comentário</button>
				</form>
			</section>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const id = params?.id as string;

	const docRef = doc(db, "tarefas", id);

	const snapshot = await getDoc(docRef);
	if (snapshot.data() === undefined || !snapshot.data()?.public) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	const miliseconds = snapshot.data()?.created?.seconds * 1000;

	const task = {
		tarefa: snapshot.data()?.tarefa,
		public: snapshot.data()?.public,
		created: new Date(miliseconds).toLocaleDateString(),
		user: snapshot.data()?.user,
		taskId: id,
	};

	console.log(task);

	return {
		props: { item: task },
	};
};
