"use client";
import React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import VisuallyHidden from "../VisuallyHidden";
import { Menu, X } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faFilePdf,
	faLaptopFile,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./MobileMenu.module.css";

function MobileMenu({ isOpen, setOpen, onDismiss }) {
	return (
		<Dialog.Root open={isOpen} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<div className={styles.menuBtn}>
					<Menu size="1.5rem" />
					<VisuallyHidden>Open menu</VisuallyHidden>
				</div>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Content className={styles.wrapper}>
					<div className={styles.backdrop}></div>
					<div className={styles.content}>
						<div className={styles.innerWrapper}>
							<Dialog.Close asChild>
								<div className={styles.closeBtn}>
									<X size="2.2rem" />
									<VisuallyHidden>Dismiss menu</VisuallyHidden>
								</div>
							</Dialog.Close>

							<nav className={styles.nav}>
								<ul className={styles.navList}>
									<li className={styles.listItem} onClick={onDismiss}>
										<Link className={styles.navLink} href="/#about">
											<FontAwesomeIcon icon={faUser} size="lg" />
											<div>ABOUT</div>
										</Link>
									</li>
									<li className={styles.listItem} onClick={onDismiss}>
										<Link className={styles.navLink} href="/#projects">
											<FontAwesomeIcon icon={faLaptopFile} size="lg" />
											<div>PROJECTS</div>
										</Link>
									</li>
									<li className={styles.listItem} onClick={onDismiss}>
										<Link className={styles.navLink} href="/contact">
											<FontAwesomeIcon icon={faEnvelope} size="lg" />
											<div>CONTACT</div>
										</Link>
									</li>
									<li className={styles.listItem} onClick={onDismiss}>
										<Link
											className={styles.navLink}
											href="https://drive.google.com/file/d/1fcBcw-jvcinHyrM9lV2V1xd6layTcBrP/view?usp=sharing"
											target="_blank"
											type="application/pdf"
										>
											<FontAwesomeIcon icon={faFilePdf} size="lg" />
											<div>RESUME</div>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default MobileMenu;
