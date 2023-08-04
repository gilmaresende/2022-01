import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<a href="">
					<Image src={logo} alt="Sujeito Programador Logo"></Image>
				</a>
				<nav>
					<ActiveLink href="/" activeClassName={styles.active}>
						<div className={styles.a}>Home</div>
					</ActiveLink>
					<ActiveLink href="/posts" activeClassName={styles.active}>
						<div className={styles.a}>Conteúdo</div>
					</ActiveLink>
					<ActiveLink href="/sobre" activeClassName={styles.active}>
						<div className={styles.a}>Quem somos?</div>
					</ActiveLink>
				</nav>
				<a className={styles.readyButton} type="button" href="">
					Começar
				</a>
			</div>
		</header>
	);
}
