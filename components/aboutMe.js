import Image from 'next/image';
import styles from './aboutMe.module.css';

function AboutMe() {
    return (
       <section className={styles.aboutContainer}>
         <section className={styles.About}>
            <Image width={20} height={42} src="/sharf.svg"/>
            <div className={styles.pro}>about-me</div>
            <div style={{width:326, height:1, backgroundColor:"#C778DD", marginTop:20, marginLeft:10,}}></div>
         </section>
         <div className={styles.img}>
            <Image width={339} height={507} src="/Avatar2.svg"/>
         </div>
         <section className={styles.text}>
               <h3>Hello, i’m Elias!</h3>
                <h3>I’m a self-taught front-end developer based in Kyiv, 
                    Ukraine.I can develop responsive websites from 
                    scratch and raise them into modern user-friendly web experiences.</h3>
                <h3>Transforming my creativity and knowledge into a websites has been my passion for over a year. 
                    I have been helping various clients to establish their presence online. 
                    I always strive to learn about the newest technologies and frameworks.</h3>
         </section>
       </section>
    );
}

export default AboutMe;