import { GetServerSideProps } from "next";
import styles from "./styles.module.css";
import Head from "next/head";
import { getSession } from "next-auth/react";
import { Textarea } from "@/components/textarea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { db } from "../../services/firebaseConection";
import {
	addDoc,
	collection,
	query,
	orderBy,
	where,
	onSnapshot,
	TaskState,
	doc,
	deleteDoc,
} from "firebase/firestore";
import Link from "next/link";

interface HomeProps {
	user: {
		email: string;
	};
}

interface TaskProps {
	id: string;
	created: Date;
	public: boolean;
	tarefa: string;
	user: string;
}
export default function DashBoard({ user }: HomeProps) {
	const [input, setInput] = useState("");
	const [publicTask, setPublicTask] = useState(false);
	const [tasks, setTasks] = useState<TaskProps[]>([]);

	useEffect(() => {
		async function loadTarefas() {
			const tarefasRef = collection(db, "tarefas");
			const q = query(
				tarefasRef,
				orderBy("created", "desc"),
				where("user", "==", user?.email)
			);

			onSnapshot(q, (snapshot) => {
				let list = [] as TaskProps[];
				snapshot.forEach((doc) => {
					return list.push({
						id: doc.id,
						tarefa: doc.data().tarefa,
						created: doc.data().created,
						user: doc.data().user,
						public: doc.data().public,
					});
				});
				setTasks(list);
			});
		}
		loadTarefas();
	}, [user?.email]);

	async function handleRegisterTask(event: FormEvent<HTMLElement>) {
		event.preventDefault();
		if (input === "") {
			alert("Informe qual a tarefa");
			return;
		}

		try {
			await addDoc(collection(db, "tarefas"), {
				tarefa: input,
				created: new Date(),
				user: user.email,
				public: publicTask,
			});

			setInput("");
			setPublicTask(false);
		} catch (err) {
			console.log(err);
		}
	}

	async function handleShare(id: string) {
		await navigator.clipboard.writeText(
			`${process.env.NEXT_PUBLIC_URL}/task/${id}`
		);

		alert("url copy");
	}

	async function handleDelete(id: string) {
		const docRef = doc(db, "tarefas", id);
		await deleteDoc(docRef);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Painel de Tarefas</title>
			</Head>
			<main className={styles.main}>
				<section className={styles.content}>
					<div className={styles.contentForm}>
						<h1 className={styles.title}>Qual sua Tarefa</h1>
						<form onSubmit={handleRegisterTask}>
							<Textarea
								placeholder="Digite sua Tarefa..."
								value={input}
								onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
									setInput(event.target.value)
								}
							/>
							<div className={styles.checkboxArea}>
								<input
									type="checkbox"
									className={styles.checkbox}
									checked={publicTask}
									onChange={() => setPublicTask(!publicTask)}
								/>
								<label>Deixar tarefa publica?</label>
							</div>
							<button className={styles.button} type="submit">
								Registrar
							</button>
						</form>
					</div>
				</section>
				<section className={styles.taskContainer}>
					<h1>Minhas Tarefas</h1>
					{tasks.map((item) => (
						<article key={item.id} className={styles.task}>
							{item.public && (
								<div className={styles.tagContainer}>
									<label className={styles.tag}>PUBLICO</label>
									<button className={styles.shareButton}>
										<FiShare2
											color="#3183ff"
											size={22}
											onClick={() => handleShare(item.id)}
										/>
									</button>
								</div>
							)}
							<div className={styles.taskContent}>
								{item.public ? (
									<Link href={`/task/${item.id}`}>
										<p>{item.tarefa}</p>
									</Link>
								) : (
									<p>{item.tarefa}</p>
								)}
								<button className={styles.trashButton}>
									<FaTrash
										color="#ea3140"
										onClick={() => handleDelete(item.id)}
										size={24}
									/>
								</button>
							</div>
						</article>
					))}
				</section>
			</main>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const session = await getSession({ req });

	if (!session?.user) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return {
		props: {
			user: {
				email: session?.user?.email,
			},
		},
	};
};
