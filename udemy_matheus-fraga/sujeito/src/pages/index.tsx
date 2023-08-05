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
				<hr className={styles.divisor} />
				<div className={styles.sectionContent}>
					<section>
						<h2>Aprenda criar aplicativos para Android e IOS</h2>
						<span>
							Você vai descobrir o jeito mais moderno de desenvolver apps
							nativos para iOS e Android, construindo do zero até aplicativos.
						</span>
					</section>
					<img
						src="/images/financasApp.png"
						alt="Conteúdos mobile, desenvolvimento de apps"
					/>
				</div>
				<hr className={styles.divisor} />
				<div className={styles.sectionContent}>
					<img
						src="/images/webDev.png"
						alt="Conteúdos mobile, desenvolvimento de aplicações web"
					/>
					<section>
						<h2>Aprenda criar sistemas Web</h2>
						<span>
							Criar sistemas web, sites usando as tecnologias mais modernas e
							requisitadas pelo mercado...
						</span>
					</section>
				</div>
			</main>
		</>
	);
}
