import React from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';

type TypeSwitchPage = { key: string; keyPath?: Array<string>; item?: any; domEvent?: Event };

export default function Header() {
  const history = useHistory();
  const switchPage = ({ key }: TypeSwitchPage) => {
    history.push(`/${key}`);
  };

  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.headerLogo}>Messenger</h2>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} onClick={switchPage}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="chats">Chats</Menu.Item>
        <Menu.Item key="profile">Profile</Menu.Item>
      </Menu>
    </div>
  );
}
