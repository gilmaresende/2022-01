import { GetServerSideProps } from "next";
import styles from "./styles.module.css";
import Head from "next/head";
import { getSession } from "next-auth/react";
import { Textarea } from "@/components/textarea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
export default function DashBoard() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Painel de Tarefas</title>
			</Head>
			<main className={styles.main}>
				<section className={styles.content}>
					<div className={styles.contentForm}>
						<h1 className={styles.title}>Qual sua Tarefa</h1>
						<form>
							<Textarea placeholder="Digite sua Tarefa..." />
							<div className={styles.checkboxArea}>
								<input type="checkbox" className={styles.checkbox} />
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
					<article className={styles.task}>
						<div className={styles.tagContainer}>
							<label className={styles.tag}>PUBLICO</label>
							<button className={styles.shareButton}>
								{" "}
								<FiShare2 color="#3183ff" size={22} />
							</button>
						</div>
						<div className={styles.taskContent}>
							<p>Minha primeira tarefa de exemplo show demais!</p>
							<button className={styles.trashButton}>
								<FaTrash color="#ea3140" size={24} />
							</button>
						</div>
					</article>
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
		props: {},
	};
};
