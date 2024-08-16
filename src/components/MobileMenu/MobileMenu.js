"use client";
import React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import VisuallyHidden from "../VisuallyHidden";
import { FiMenu as Menu, FiX as X } from "react-icons/fi";

import styles from "./MobileMenu.module.css";

function MobileMenu({ isOpen, setOpen, onDismiss }) {
	return (
		<Dialog.Root open={isOpen} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<div className={styles.menuBtn} role="button" aria-label="menu">
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
									<VisuallyHidden>
										Dismiss menu
									</VisuallyHidden>
								</div>
							</Dialog.Close>

							<nav className={styles.nav}>
								<ul className={styles.navList}>
									<li
										className={styles.listItem}
										onClick={onDismiss}
									>
										<Link
											className={styles.navLink}
											href="/about"
											aria-label="about"
										>
											<div>ABOUT</div>
										</Link>
									</li>
									<li
										className={styles.listItem}
										onClick={onDismiss}
									>
										<Link
											className={styles.navLink}
											href="/projects"
											aria-label="projects"
										>
											<div>PROJECTS</div>
										</Link>
									</li>
									<li
										className={styles.listItem}
										onClick={onDismiss}
									>
										<Link
											className={styles.navLink}
											href="/contact"
											aria-label="contact"
										>
											<div>CONTACT</div>
										</Link>
									</li>
									<li
										className={styles.listItem}
										onClick={onDismiss}
									>
										<Link
											className={styles.navLink}
											href="https://www.linkedin.com/in/jack-gable/"
											target="_blank"
											rel="noreferrer"
										>
											<div>LINKEDIN</div>
										</Link>
									</li>
									<li
										className={styles.listItem}
										onClick={onDismiss}
									>
										<Link
											className={styles.navLink}
											href="https://github.com/jack-gable"
											target="_blank"
											rel="noreferrer"
										>
											<div>GITHUB</div>
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
