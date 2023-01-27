import styles from './porject1.module.css';
import Image from 'next/image';
import {useRouter} from 'next/router';
function Porject1(props) {
    const router = useRouter();
    return (
        <section  onClick={props.onClick} className={styles.porjectTom}>
            <section>
            <Image width={331} height={200} src="/Rectangle 1.svg"/>               
            </section>
            <section>
                <h3 className={styles.HTML}>HTML SCSS Python Flask</h3>
                <hr/>
            </section>
            <section>
                <h3 className={styles.HHH}>ChertNodes</h3>
            </section>
            <section>
                <h3 className={styles.HHH2}>Minecraft servers hosting </h3>
            </section>
            <section>
                <button className={styles.button1} onClick={() => router.push('/contact')}>live ~~</button>
                <button className={styles.button2} onClick={() => router.push('/contact')}>Catch~~</button>
            </section>
        </section>
    );
}

export default Porject1;