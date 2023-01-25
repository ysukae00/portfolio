import Image from 'next/image';
import styles from './Header.module.css'
import Link from 'next/link';
import {useRouter} from 'next/router';

const headerList= [
    {
        name:'Home',
        path:'/',
    },
    {
        name:'work',
        path:'/work',
    },
    {
        name:'about-me',
        path:'/about-me',
    },
    {
        name:'contact',
        path:'/contact',
    },
]

function Header() {
    const router =useRouter();
    console.log(router.asPath)
    return (
        <section className={styles.container}>
            <section className={styles.logo}>
                <Image width={16} height={16} src="/Img/BrandIcon.svg"/>
                <h3>Elias</h3>
            </section>
           <ul className={styles.list}>
           {headerList.map((list) => (
           <li className={router.asPath === list.path && styles.listActive}>
            <Link href={list.path}>{list.name}</Link>
           </li>
        ))}
            {/* <li><Link href="/">Home</Link></li>
            <li><Link href="/work">work</Link></li>
            <li><Link href="/about">about-me</Link></li>
            <li><Link href="/contact">contact</Link></li>
            <li>EN</li> */}
           </ul>
        </section>
    );
}

export default Header;