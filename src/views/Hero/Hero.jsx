import { useState } from "react";
import { Container } from "../Container/Container";
import s from "./Hero.module.scss";
import { useLottie } from "lottie-react";
import hero from "../../lotties/hero.json";
import cookie from "/images/cookies.png";
import cookieOpen from "/images/cookies-open.png";


function Hero() {
  const [imageSrc, setImageSrc] = useState(cookie);
  const [randomPhrase, setRandomPhrase] = useState("");
  const [isLoaded, setIsLoaded] = useState(true); 
  const [firstClick, setFirstClick] = useState(false);

  const optionsHero = {
    autoplay: true,
    animationData: hero,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { View } = useLottie(optionsHero);

  function changeImage() {
    if (!firstClick) {
      setFirstClick(true);

      fetch("/phrases.json?url")
        .then(response => response.json())
        .then(data => {
          const phrases = data.phrases;
          const randomIndex = Math.floor(Math.random() * phrases.length);
          const randomPhrase = phrases[randomIndex];
          setRandomPhrase(randomPhrase);
          setImageSrc(cookieOpen);
          setIsLoaded(true); // Установим флаг загрузки в true после загрузки нового контента
        })
        .catch(error => console.error("Ошибка при загрузке JSON файла:", error));

      setIsLoaded(false); // Установим флаг загрузки в false перед загрузкой нового контента
    }
  }

  return (
    <section className={`${s.hero} fade-in`}>
      <Container className={s.container}>
        <div className={s.animation}>
          <>{View}</>
        </div>
        <div className={s.content}>
          <h1 className={"visually-hidden"}>Печеньки с предсказанием</h1>

          <button className={s.btn} onClick={changeImage} disabled={firstClick}>
            <div className={`${s.imgWrapper} ${isLoaded ? s.loaded : ""}`}>
              <img className={`${s.img} ${isLoaded ? s.loaded : ""}`} src={imageSrc} alt="Cookie image" onLoad={() => setIsLoaded(true)} />
            </div>
            <div className={`${s["text-block"]} ${isLoaded && firstClick ? s.loaded : ""}`}>
              <p className={s.text} id="randomText">{randomPhrase}</p>
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
}


export default Hero;
