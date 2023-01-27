import Main from '../components/main';
import DoodHuree from '../components/doodHuree';
import Project from '../components/project';
import Porject1 from '../components/porject1';
import Skills from '../components/skills';
import { useRouter } from 'next/router';
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
      <section style={{ display:'flex', justifyContent: "space-between"}}>
        <Porject1   onClick={() => onClick(1)}/>
        <Porject1  onClick={() => onClick(2)}/>
        <Porject1  onClick={() => onClick(3)}/>
      </section>
      <Skills/>
    </section>
  );
}

export default Home;