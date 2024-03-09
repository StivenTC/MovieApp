import Image from "next/image";
import styles from "./Header.module.scss";
import { useContext } from "react";
import { AuthUserContext } from "@/hooks/context/useAuthUserContext";
import { removeEmailDomain } from "@/utils/removeEmailDomain";

export default function ContentCategory() {

  return (
    <section className={styles.header}>

    </section>
  );
}
