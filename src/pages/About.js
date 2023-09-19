import {useState} from "react";
import banner from "../img/banner.jpg";
import  Modal  from "../components/Modal";
import "./About.css"
function About() {
  const [openModal, setOpenModal] = useState(false);
  return (

    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${banner})` }} 
        >

      </div>
      
      <div className="aboutBottom">
        <h3>"Slatko carstvo"</h3>
        <p>
        Trudimo se da držimo korak s vremenom. Neprestano ulažemo u kvalitet naših proizvoda, kako bi porodičnu tradiciju staru preko decenije učinili još boljom nego što je sada.
Prijatan ambijent, ljubazno osoblje i izvrsne poslastice dovoljan su razlog da nas posetite!U zanatskim poslovima važno je koristiti najkvalitetnije sastojke, pa je tako i u poslastičarstvu. 
Bez dobrog brašna i jaja nema fine piškote! Zato se mi trudimo da torte i kolače pravimo samo od vrhunskih sirovina koje postoje na tržištu. Tražite nam recept nekog slatkiša? nije problem ispisaćemo Vam, ali sigurno nećete dobiti ukus kao naš – upravo zbog korišćenih pomenutih sirovina.
          
        </p>
        
        <div>
            <button 
            onClick={() => setOpenModal(true)} 
            className='modalButton'>
              PRITISNI
            </button>
            <Modal 
            open={openModal} 
            onClose={() => setOpenModal(false)} />
          </div>
      </div>
    </div>
  );
}

export default About;
