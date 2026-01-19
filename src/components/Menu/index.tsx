import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {

  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme(prevTheme =>{
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#"
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#"
        aria-label='Ver Histórico'
        title='Ver Histórico'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#"
        aria-label='Configurações'
        title='Configurações'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href="#"
        aria-label='Trocar Tema'
        title='Trocar Tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}