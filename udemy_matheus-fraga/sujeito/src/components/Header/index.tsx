import styles from "./styles.module.scss";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<a href="">
					<Image src={logo} alt="Sujeito Programador Logo"></Image>
				</a>
				<nav>
					<Link href="/" className={styles.a}>
						Home
					</Link>
					<Link href="/posts" className={styles.a}>
						Conteúdo
					</Link>
					<Link className={styles.a} href="/sobre">
						Quem somos?
					</Link>
				</nav>
				<a className={styles.readyButton} type="button" href="">
					Começar
				</a>
			</div>
		</header>
	);
}
