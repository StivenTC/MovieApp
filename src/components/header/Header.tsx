import Image from "next/image";
import styles from "./Header.module.scss";
import { useContext, useEffect } from "react";
import { AuthUserContext } from "@/hooks/context/useAuthUserContext";
import { removeEmailDomain } from "@/utils/removeEmailDomain";
import getFetcher from "@/utils/getFetcher";
import { GET_MOVIES_FROM_DISCOVER, GET_MOVIES_FROM_NOW_PLAYING, GET_MOVIES_FROM_POPULAR, GET_MOVIES_FROM_TOP_RATED } from "@/utils/const";
import logoApp from '@/assets/logo.png'
import { useRouter } from "next/navigation";

export default function Header({ changeShowList }: { changeShowList: (list: []) => void }) {
  const authUser = useContext(AuthUserContext);
  const username = removeEmailDomain((authUser.authUser !== null) ? authUser.authUser.email : '');
  const router = useRouter();

  const fetchListMovies = async (apiLink: string) => {
    const res = await getFetcher(`${apiLink}`);
    changeShowList(res.results);
  }

  const handleLogout = async () => {
    try {
      await authUser.logOut();
      router.push("/auth/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchListMovies(GET_MOVIES_FROM_DISCOVER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className={styles.header}>
      <section className={styles.headerWrapper}>
        <figure>
          <Image src={logoApp} alt="logo" width={48} height={48} />
          <h1>MovieApp</h1>
        </figure>
        <nav className={styles.menuList}>
          <ul>
            <li><button onClick={() => fetchListMovies(GET_MOVIES_FROM_DISCOVER)}>Discover</button></li>
            <li><button onClick={() => fetchListMovies(GET_MOVIES_FROM_NOW_PLAYING)}>Now Playing</button></li>
            <li><button onClick={() => fetchListMovies(GET_MOVIES_FROM_POPULAR)}>Popular</button></li>
            <li><button onClick={() => fetchListMovies(GET_MOVIES_FROM_TOP_RATED)}>Top Rated</button></li>
          </ul>
        </nav>
        <div className={styles.menuProfile}>
          <figure>
            <figcaption>{username}</figcaption>
            <Image src={`https://api.multiavatar.com/${username}.svg`} alt={`User ${username} picture`} width={48} height={48} />
          </figure>
          <div>
            <button onClick={handleLogout}>Log out</button>
          </div>
        </div>
      </section>
    </header>
  );
}
