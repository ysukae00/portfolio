import Image from 'next/image';
import styles from './skills.module.css';
function Skills() {
    return (
        <section className={styles.tompro}>
            <div className={styles.pro}>skills</div>
            <div style={{width:239, height:1, backgroundColor:"#C778DD", marginTop:20, marginLeft:10,}}></div>
            <section>
                <div className={styles.img1}>
                <Image width={80} height={80} src="/Rectangle skills1.svg"/>
                </div>
                <div className={styles.img2}>
                <Image width={68} height={68} src="/Frame skills2.svg"/>
                </div>
            </section>
        </section>
    );
}

export default Skills;