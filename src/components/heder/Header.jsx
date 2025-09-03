import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
      <div className={styles.logo}>
        <img src="../../../public/img/s-logo.png" alt="Smart logo" />
        <span>mart</span>
      </div>

      <div className={styles.nav}>
        <div className={styles.menu}>
          <ul>
            <li>
              <a href="">All Course</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Start Learning</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      
        <div className={styles.sign}>
          <button>Sign in</button>
        </div>
      </div>
      </div>
     
    </header>
  );
};

export default Header;
