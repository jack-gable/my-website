"use client";
import React from "react";
import * as Separator from "@radix-ui/react-separator";

import styles from "./Divider.module.css";

function Divider() {
	return (
		<>
			<Separator.Root
				className={`SeparatorRoot ${styles.dividerLine}`}
				decorative={true}
			/>
		</>
	);
}

export default Divider;
