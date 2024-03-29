
import { Swiper, SwiperSlide} from 'swiper/react'
import { Link } from "react-router-dom";
// import styleHome from './Home.module.css'
import './Home.module.css'
import imageHomeDia1 from "../../assets/Dia1.gif"
import imageHomeDia2 from "../../assets/Dia2.gif"
import imageHomeDia3 from "../../assets/Dia3.gif"
import imageHomeDia4 from "../../assets/Dia4.gif"
import imageHomeDia5 from "../../assets/Dia5.gif"
import imageHomeDia6 from "../../assets/Dia6.gif"
import imageHomeDia7 from "../../assets/Dia7.gif"
import imageHomeDia8 from "../../assets/Dia8.gif"
import imageHomeDia9 from "../../assets/Dia9.gif"
import imageHomeDia10 from "../../assets/Dia10.gif"
import imageHomeDia11 from "../../assets/Dia11.gif"
import imageHomeDia12 from "../../assets/Dia12.gif"
import imageHomeDia13 from "../../assets/Dia13.gif"
import imageHomeDia14 from "../../assets/Dia14.gif"
import imageHomeDia15 from "../../assets/Dia15.gif"
import imageHomeDia16 from "../../assets/Dia16.gif"
import imageHomeDia17 from "../../assets/Dia17.gif"
import imageHomeDia18 from "../../assets/Dia18.gif"
import imageHomeDia19 from "../../assets/Dia19.gif"
import imageHomeDia20 from "../../assets/Dia20.gif"
import imageHomeDia21 from "../../assets/Dia21.gif"
import imageHomeDia22 from "../../assets/Dia22.gif"
import imageHomeDia23 from "../../assets/Dia23.gif"
import imageHomeDia24 from "../../assets/Dia24.gif"
import imageHomeDia25 from "../../assets/Dia25.gif"
import imageHomeDia26 from "../../assets/Dia26.gif"
import imageHomeDia27 from "../../assets/Dia27.gif"
import imageHomeDia28 from "../../assets/Dia28.gif"
import imageHomeDia29 from "../../assets/Dia29.gif"
import imageHomeDia30 from "../../assets/Dia30.gif"
// import { useState } from "react";


function Home() {
  const images = [imageHomeDia1, imageHomeDia2, imageHomeDia3, imageHomeDia4, imageHomeDia5, imageHomeDia6, imageHomeDia7, imageHomeDia8, imageHomeDia9, imageHomeDia10, imageHomeDia11, imageHomeDia12, imageHomeDia13, imageHomeDia14, imageHomeDia15, imageHomeDia16, imageHomeDia17, imageHomeDia18, imageHomeDia19, imageHomeDia20, imageHomeDia21, imageHomeDia22, imageHomeDia23, imageHomeDia24, imageHomeDia25, imageHomeDia26, imageHomeDia27, imageHomeDia28, imageHomeDia29, imageHomeDia30]

  // const [activ, setActiv] = useState("");
  // // const [activRight, setActivRight] = useState("");

  
  // const clickSlideEsquerda = (activ) => {


  //   setActiv("imgSlideEsquerda")

  //   return activ
  // }
  // const clickSlideDireita = (activ) => {

  //   setActiv("imgMovingDireita")
    
  //   return activ
  // }

  // const onclickLeft = () => { clickSlideEsquerda(activ) }
  // const onclickRight = () => { clickSlideDireita(activ) }



  return (

    <header className="App-header">
      <h1>30 dias de CSS</h1>



      <section className="sectionSlade">


        <div className="carousel">


          <Swiper 
          slidesPerView={1}
          pagination={{clickable:true }}
          navigation
          className="slides">
          

            {images.map((image, i) => (
              <Link to={'/dia' + (i + 1)} target="_blank" key={images.i}>
                <SwiperSlide className="imgSlide" id={'s' + (i + 1)} >
                  <img
                    className='slide-item'
                    src={image}
                    alt="Gif dos projetos do desafio"></img>
                </SwiperSlide> </Link>
            ))}

          </Swiper>
        </div>
        {/* <div >
          <button className="btnL" onClick={onclickLeft}>{"<"}</button>
          <button className="btnR" onClick={onclickRight}>{">"}</button>

        </div> */}
      </section>

    </header >

  );

}

export default Home;