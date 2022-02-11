import { SingInButton } from '../SingInButton';
import Image from 'next/image';


import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
       <Image 
       src="/images/logo.svg" 
       alt="ig.news" 
       width='109px'
       height='30px'
       />  
        <nav>
          <a className={styles.active}>Home</a>
          <a className=''>Posts</a>
        </nav>

        <SingInButton />
      </div>
    </header>
  )
}