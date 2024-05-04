import { useState } from "react";
import { Container } from "../Container/Container";
import s from "./Hero.module.scss";
import { useLottie } from "lottie-react";
import hero from "../../lotties/hero.json";
import cookie from "/images/cookies.png";
import cookieOpen from "/images/cookies-open.png";
import clickSound from "/audio/click-sound.mp3";


function Hero() {
  const [imageSrc, setImageSrc] = useState(cookie);
  const [randomPhrase, setRandomPhrase] = useState("");
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
          console.log("Data loaded successfully:", data);
          const phrases = data.phrases;
          const randomIndex = Math.floor(Math.random() * phrases.length);
          const randomPhrase = phrases[randomIndex];
          setRandomPhrase(randomPhrase);
          setImageSrc(cookieOpen);
        })
        .catch(error => console.error("Ошибка при загрузке JSON файла:", error));
    }
  }

  function playAudio() {
    const audio = new Audio(clickSound);
    audio.play();
  }

  return (
    <section className={`${s.hero} fade-in`}>
      <div className={s.animation}>
        {View}
      </div>
      <Container className={s.container}>
        <div className={s.content}>
          <h1 className={"visually-hidden"}>Печеньки с предсказанием</h1>

          <button className={s.btn} onClick={() => {
            changeImage(); playAudio();
          }} disabled={firstClick}>
            <div className={s.imgWrapper}>
              <img className={`${s.img}`} src={imageSrc} alt="Cookie image" />
              {firstClick && (
                <div className={`${s["text-block"]}`}>
                  <p className={s.text}>{randomPhrase}</p>
                </div>
              )}
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;


