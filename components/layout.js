import Container from './container';
import Header from './header';
import Image from 'next/image';
import Footer from './footer';
import styles from './footer.module.css'
import Line from './line';
function Layout(props) {
  const { children } = props;
  return (
    <section
      style={{
        display: 'flex',
        width: 1366,
        margin: 'auto',
      }}
    >
      <section className={styles.img}style={{ margin: 17, width: 170 }}>
      <Image width={16} height={16} src="/Img/BrandIcon.svg"/>
        <Line />
      </section>
      <section>
        <Container>
          <Header />
          <main>{children}</main>
        </Container>
        <hr className = {styles.Hr}/>
        <Container>
          <Footer />
        </Container>
        {/* Footer */}
      </section>
    </section>
  );
}

export default Layout;
