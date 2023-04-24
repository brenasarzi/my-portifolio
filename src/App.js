import { useRef } from 'react';
import Banner from './componentes/Banner';
import Contact from './componentes/Contact';
import Presentation from './componentes/Presentation';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

// componente 
function App() {
  const ref1 = useRef(null);
  const doClick1 = () => ref1.current?.scrollIntoView({behavior: 'smooth'})


  const ref2 = useRef(null);
  const doClick2 = () => ref2.current?.scrollIntoView({behavior: 'smooth'})

  const ref3 = useRef(null);
  const doClick3 = () => ref3.current?.scrollIntoView({behavior: 'smooth'})

  return (
    <div ref={ref1} className="snap-y snap-mandatory relative">
      <div className="snap-center h-screen ">
        <Banner button={doClick2}/>
      </div>
      <div ref={ref2} className="snap-center h-screen  ">
        <Presentation button={doClick3}/>
      </div>
      <div ref={ref3} className="snap-center h-screen ">
        <Contact />
      </div>
      <div className='absolute bottom-5 right-10'>
          <button className='text-white' onClick={doClick1}><BsFillArrowUpCircleFill size={50}/></button>
        </div>
    </div>
  );
}

export default App;
