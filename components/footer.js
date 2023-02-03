import Image from 'next/image';
import styles from './footer.module.css'
function Footer() {
    return (
        <section>
            <section className={styles.textContainer}>
            <Image style={{marginTop:30,}}width={16} height={16} src="/Img/BrandIcon.svg"/>
            <h3 className={styles.text1}>Elias</h3>
            <h3 className={styles.text2}>elias@elias.ml</h3>
            <section>
                <h3 className={styles.text4}>Media</h3>
                <div className={styles.img}>
                    <Image width={24} height={24} src="/Github.svg"/>
                    <Image style={{marginLeft:10}}  width={24} height={24} src="/figma.svg"/>
                    <Image style={{marginLeft:10}} width={22} height={22} src="/discord.svg"/>
                </div>
            </section>
            </section>
            <div>
                <h3 className={styles.text3}>Web designer and front-end developer based in Ukraine</h3>
            </div>
            <footer className={styles.footer}>© Copyright 2022. Made by Next-Monkhoo</footer>
        </section>
    );
}

export default Footer;