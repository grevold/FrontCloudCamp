import { FolderIcon } from "../../../../icons/FolderIcon";

import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.avatar}>АИ</div>
        <div className={s.userInfo}>
          <h1 className={s.header}>Иван Иванов</h1>
          <ul className={s.listFolder}>
            <li className={s.listFolderItem}>
              <FolderIcon className={s.folderIcon} />
              <span>Telegram</span>
            </li>
            <li className={s.listFolderItem}>
              <FolderIcon className={s.folderIcon} />
              <span>GitHub</span>
            </li>
            <li className={s.listFolderItem}>
              <FolderIcon className={s.folderIcon} />
              <span>Resume</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className={s.hr} />
    </div>
  );
};
