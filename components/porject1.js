import styles from './porject1.module.css';
import Image from 'next/image';
import {useRouter} from 'next/router';
const tags= ["HTML","CSS", "Python"];
function Porject1(props) {
    const router = useRouter();
    return (
        <section  onClick={props.onClick} className={styles.porjectTom}>
            <section>
            <Image src={props.src} width={320} height={200} style={{ width: '100%' }}/>               
            </section>
            <section style={{display: "flex", flexWrap:"wrap", paddingLeft: 5, paddingBottom:5,}}>
                {props.tags.map(t => <h3 className={styles.HTML}>{t}</h3>)}
            </section>
            <hr/>
            <section>
                <h3 className={styles.HHH}>{props.title}</h3>
            </section>
            <section>
                <h3 className={styles.HHH2}>{props.title2} </h3>
            </section>
            <section>
                <button className={styles.button1} onClick={() => router.push('/contact')}>live ~~</button>
                <button className={styles.button2} onClick={() => router.push('/contact')}>Catch~~</button>
            </section>
        </section>
    );
}

export default Porject1;