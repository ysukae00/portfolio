import Image from 'next/image';
import styles from './skills.module.css';
function Skills() {
    return (
        <section className={styles.tompro}>
            <Image width={20} height={42} src="/sharf.svg"/>
            <div className={styles.pro}>skills</div>
            <div style={{width:250, height:1, backgroundColor:"#C778DD", marginTop:20, marginLeft:10,}}></div>
            <section>
                <div className={styles.img1}>
                    <Image width={80} height={80} src="/Skills1.svg"/>
                </div>
                <div className={styles.img2}>
                    <Image width={63} height={63} src="/Frame skills2.svg"/>
                </div>
                <div className={styles.img3}>
                    <Image width={113} height={113} src="/logo skills3.svg"/>
                </div>
                <div className={styles.img4}>
                    <Image width={68} height={68} src="/frame skills2.svg"/>
                </div>
                <div className={styles.img5}>
                    <Image width={52} height={52} src="/Skills1.svg"/>
                </div>
            </section>
            <section className={styles.Language}>
                <h3 className={styles.lan}>Language</h3>
                <hr/>
                <h3 className={styles.lan2}>TypeScript Lua Python JavaScript</h3>
            </section>
        </section>
    );
}

export default Skills;