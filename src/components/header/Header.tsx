import Image from "next/image";
import styles from "./Header.module.scss";
import { useContext, useEffect } from "react";
import { AuthUserContext } from "@/hooks/context/useAuthUserContext";
import { removeEmailDomain } from "@/utils/removeEmailDomain";
import getFetcher from "@/utils/getFetcher";
import { GET_MOVIES_FROM_DISCOVER } from "@/utils/const";

export default function Header({ changeShowList }: { changeShowList: (list: []) => void }) {
  const authUser = useContext(AuthUserContext);
  const username = removeEmailDomain((authUser.authUser !== null) ? authUser.authUser.email : '');

  const fetchDiscoverMovies = async () => {
    const res = await getFetcher(`${GET_MOVIES_FROM_DISCOVER}`);
    changeShowList(res.results);
  }

  useEffect(() => {
    fetchDiscoverMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className={styles.header}>
      <h1>MovieApp</h1>
      <nav className="menu-list">
        <ul>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><button onClick={fetchDiscoverMovies}>Discover</button></li>
        </ul>
      </nav>
      <div className="menu-profile">
        <figure>
          <Image src={`https://api.multiavatar.com/${username}.svg`} alt="Trulli" width={64} height={64} />
          <figcaption>{username}</figcaption>
        </figure>
        <div>
          <button onClick={authUser.logOut}>Cerrar sesión</button>
        </div>
      </div>
    </header>
  );
}
