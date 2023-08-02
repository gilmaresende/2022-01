import Head from "next/head";
import styles from "./styles.module.css";
import { GetServerSideProps } from "next";
import { db } from "../../services/firebaseConection";
import {
	doc,
	collection,
	query,
	getDoc,
	addDoc,
	where,
	getDocs,
} from "firebase/firestore";
import { redirect } from "next/dist/server/api-utils";
import { Textarea } from "@/components/textarea";
import { useSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

interface TaksProps {
	item: {
		tarefa: string;
		public: boolean;
		created: string;
		user: string;
		taskId: string;
	};
	allComments: CommentProps[];
}

interface CommentProps {
	id: string;
	comment: string;
	taskId: string;
	user: string;
	name: string;
}

export default function Task({ item, allComments }: TaksProps) {
	const { data: session } = useSession();
	const [input, setInput] = useState("");
	const [comments, setComments] = useState<CommentProps[]>(allComments || []);

	async function handleComment(event: FormEvent) {
		event.preventDefault();
		if (input === "") {
			alert("comentário vazio");
			return;
		}

		if (!session?.user?.email || !session?.user?.name) {
			alert("usuario não definido");
			return;
		}

		try {
			await addDoc(collection(db, "comments"), {
				comment: input,
				created: new Date(),
				user: session?.user?.email,
				name: session?.user?.name,
				taskId: item?.taskId,
			});

			setInput("");
		} catch (err) {
			console.log(err);
		}
	}

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
				<form onSubmit={handleComment}>
					<Textarea
						value={input}
						onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
							setInput(event.target.value)
						}
						placeholder="Digite seu comentario"
					></Textarea>
					<button disabled={!session?.user} className={styles.button}>
						Enviar Comentário
					</button>
				</form>
			</section>
			<section className={styles.commentsContainer}>
				<h2>Todos comentários</h2>
				{comments.length === 0 && (
					<span>Nenhum comentário foi encontrado...</span>
				)}
				{comments.map((m) => (
					<article key={m.id} className={styles.comment}>
						<p>{m.comment}</p>
					</article>
				))}
			</section>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const id = params?.id as string;

	const docRef = doc(db, "tarefas", id);

	const q = query(collection(db, "comments"), where("taskId", "==", id));
	const snapshotComments = await getDocs(q);
	let allComents: CommentProps[] = [];
	snapshotComments.forEach((doc) => {
		allComents.push({
			id: doc.id,
			comment: doc.data().comment,
			user: doc.data().user,
			name: doc.data().name,
			taskId: doc.data().taskId,
		});
	});

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

	const res: TaksProps = {
		item: task,
		allComments: allComents,
	};

	console.log(res);

	return {
		props: res,
	};
};
