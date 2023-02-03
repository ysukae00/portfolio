import Image from 'next/image';
import styles from './contact.module.css';
function Contact() {
    return (
        <section>
             <section className={styles.Contact}>
                <Image width={20} height={42} src="/sharf.svg"/>
                <div className={styles.pro}>contacts</div>
                <div style={{width:130, height:1, backgroundColor:"#C778DD", marginTop:20, marginLeft:10,}}></div>
             </section>
             <section className={styles.tom}>
                <h3 className={styles.text}>I’m interested in freelance opportunities. However,
                     if you have other request or question, don’t 
                     hesitate to contact me</h3>
                <div className={styles.border}>
                    <h3 className={styles.text2}>Message me here</h3>
                    <div className={styles.img}>
                        <Image width={23} height={17} src="/discord.svg"/>
                        <Image style={{marginTop:14}}width={23} height={17} src="/mail.svg"/>
                    </div>
                    <div>
                        <h5 className={styles.text3}>!Elias#3519</h5>
                        <h5 className={styles.text4}>elias@elias.me</h5>
                    </div>
                </div>
             </section>
        </section>
    );
}

export default Contact;