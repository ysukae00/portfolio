import Image from 'next/image';
import styles from './main.module.css'
import {useRouter} from 'next/router';
import DoodHuree from './doodHuree';
import Project from './project';
function Main() {
    const router = useRouter();
    return (
        <section className={styles.container}>
            <section
            className={styles.text1}>
                <h1 className={styles.text}>Elias is a <div className={styles.web}>web designer</div> and <div className={styles.front}>front-end developer</div></h1>
                <h3 className={styles.text2}>He crafts responsive websites where technologies meet creativity</h3>
                <div className={styles.contact}>
                    <button className={styles.button} onClick={() => router.push('/contact')}>Contact-me!!</button>
                </div>
            </section>
            <div className={styles.tomZ} >
                <Image width={457} height={386} src="/avatar.svg"/>
                <section className={styles.portR}>
                <Image className={styles.ongo} width={16} height={16} src="Rectangle 27.svg"/>
                    <div className={styles.port}>Currently working on <div className={styles.Portfolio}>Portfolio</div>
                    </div>
                </section>
                <section>
                <DoodHuree/>
                </section>
                <section>
                <Project/>
                </section>
            </div>
        </section>
    );
}
export default Main;