import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>Apixonado por tecnologia - Sujeito Programado</title>
			</Head>
			<main className={styles.container}>
				<div className={styles.containerHeader}>
					<section className={styles.ctaText}>
						<h1>Levando vc ao proximo nivel</h1>
						<span>
							Uma plataforma com cursos que vão dp zero até o profissional na
							pratica, direto ao ponto aplicando o que usamos no mercado de
							trabalho.
						</span>
						<br />
						<a>
							<button>Start Now</button>
						</a>
					</section>

					<img
						src="/images/banner-conteudos.png"
						alt="Conteúdo Sujeito Programador"
					/>
				</div>
			</main>
		</>
	);
}
