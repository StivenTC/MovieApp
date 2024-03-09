import Image from "next/image";
import styles from "./Header.module.scss";
import { useContext } from "react";
import { AuthUserContext } from "@/hooks/context/useAuthUserContext";
import { removeEmailDomain } from "@/utils/removeEmailDomain";

export default function Header() {
  const authUser = useContext(AuthUserContext);
  const username = removeEmailDomain((authUser.authUser !== null) ? authUser.authUser.email : '');
  return (
    <header className={styles.header}>
      <h1>MovieApp</h1>
      <nav className="menu-list">
        <ul>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Discover</a></li>
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
