import Image from 'next/image';
import styles from './main.module.css'
function Line() {
    return (
        <section>
            <div style={{width:1, height:191, backgroundColor:"grey",}}></div>
            <div className={styles.img}>
                <Image width={32} height={32} src="Github.svg"/>
                <Image width={32} height={32} src="Dribble.svg"/>
                <Image width={32} height={32} src="Figma.svg"/>
            </div>
        </section>
    );
}
export default Line;