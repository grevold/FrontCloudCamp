import { Link } from "react-router-dom";
import { FolderIcon } from "../../../../icons/FolderIcon";

import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <img
          className={s.avatar}
          src={`${process.env.PUBLIC_URL}/Avatar.png`}
        />
        <div className={s.userInfo}>
          <h1 className={s.header}>Алексей Гревцов</h1>
          <ul className={s.listFolder}>
            <li className={s.listFolderItem}>
              <FolderIcon className={s.folderIcon} />
              <Link to={"https://t.me/Grevalold"} className={s.link}>
                Telegram
              </Link>
            </li>
            <li className={s.listFolderItem}>
              <FolderIcon className={s.folderIcon} />
              <Link to={"https://github.com/grevold"} className={s.link}>
                GitHub
              </Link>
            </li>
            <li className={s.listFolderItem}>
              <FolderIcon className={s.folderIcon} />
              <span className={s.link}>Resume</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className={s.hr} />
    </div>
  );
};
