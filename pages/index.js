import Main from '../components/main';
import DoodHuree from '../components/doodHuree';
import Project from '../components/project';
import Porject1 from '../components/porject1';
import Skills from '../components/skills';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import AboutMe from '../components/aboutMe';
import Contact from '../components/contact';
function Home() {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/projects/${id}`);
  };
  return (
    <section>
      <Main/>
      <DoodHuree/>
      <Project/>
      <Swiper
      spaceBetween={20}
      slidesPerView={3}
      pagination={true} modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop
    >
      <SwiperSlide><Porject1  src="/Rectangle 1.svg" onClick={() => onClick(1)} 
      tags={["HTML","SCSS", "Python", "Flask"]} title="ChertNodes" title2="Minecraft servers hosting "/></SwiperSlide>
      <SwiperSlide> <Porject1  src="/Rectangle 2.svg" onClick={() => onClick(2)} 
      tags={["React","Express", "Diskord.js", "Node.js","HTML","CSS", "Python"]} title="ProtectX" title2="Discord anti-crash bot"/></SwiperSlide>
      <SwiperSlide><Porject1  src="/Rectangle3.svg" onClick={() => onClick(3)} 
      tags={["CSS", "Express","Node.js"]} title="Kahoot Answers Viewer" title2="Get answers to your kahoot quiz"/></SwiperSlide>
      <SwiperSlide><Porject1 src="/Rectangle3.svg" onClick={() => onClick(3)} 
      tags={["HTML","CSS", "Python"]}/></SwiperSlide>

    </Swiper>
      {/* <section style={{ display:'flex', justifyContent: "space-between"}}>
        <Porject1   onClick={() => onClick(1)}/>
        <Porject1  onClick={() => onClick(2)}/>
        <Porject1  onClick={() => onClick(3)}/>
        <Porject1  onClick={() => onClick(3)}/>
      </section> */}
      <Skills/>
      <AboutMe/>
      <Contact/>
    </section>
  );
}

export default Home;