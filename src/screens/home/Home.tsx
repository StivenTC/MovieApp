'use client'
import Header from "@/components/header/Header";
import styles from "./Home.module.scss";
import { companiesList } from "@/utils/companiesList";
import Image from "next/image";
import { useState } from "react";
import getFetcher from "@/utils/getFetcher";
import { GET_MOVIES_FROM_COMPANY } from "@/utils/const";
import ContentCategory from "@/components/contentCategory/ContentCategory";
import { MovieType } from "@/utils/types";

export default function HomePage() {
  const [showList, setShowList] = useState<MovieType[]>();
  console.log(showList)

  const changeShowList = (movieList: []) => {
    setShowList(movieList);
  }

  const selectCompany = async (companyId: number) => {
    const res = await getFetcher(`${GET_MOVIES_FROM_COMPANY}${companyId}`)
    setShowList(res.results);
  }

  return (
    <main className={styles.main}>
      <Header changeShowList={changeShowList} />
      <section className={styles.companiesList}>
        {companiesList.map((company) =>
          <button onClick={() => selectCompany(company.id)} className={styles.companyCard} key={company.id}>
            <Image
              alt={`${company.name} logo`}
              layout='fill'
              objectFit='contain'
              src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} />
          </button>
        )}
      </section>

      {showList && <ContentCategory moviesList={showList} />}
    </main>
  );
}
