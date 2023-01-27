import styles from './project.module.css';
function Project() {
    return (
        <section className={styles.tompro}>
            <div className={styles.pro}>project</div>
            <div style={{width:511, height:1, backgroundColor:"#C778DD", marginTop:20, marginLeft:10,}}></div>
            <div style={{marginTop:10, marginLeft:200, color:"#FFFFFF"}}>View all</div>
        </section>
    );
}
export default Project;