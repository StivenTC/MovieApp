'use client'
import Header from "@/components/header/Header";
import styles from "./Home.module.scss";
import { companiesList } from "@/utils/companiesList";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.companiesList}>
        {companiesList.map((company) =>
          <div className={styles.companyCard} key={company.id}>
            <Image
              alt={`${company.name} logo`}
              layout='fill'
              objectFit='contain'
              src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} />
          </div>
        )}
      </section>
    </main>
  );
}
