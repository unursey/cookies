import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeImage } from "../../store/cookie/cookieSlice";
import { Container } from "../Container/Container";
import s from "./Hero.module.scss";
import { useLottie } from "lottie-react";
import hero from "../../lotties/hero.json";
import clickSound from "/audio/click-sound.mp3";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


function Hero() {
  const dispatch = useDispatch();
  const { imageSrc, randomPhrase, firstClick } = useSelector((state) => state.cookie);
  const [error, setError] = useState(null);

  const optionsHero = {
    autoplay: true,
    animationData: hero,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { View } = useLottie(optionsHero);

  function changeCookie() {
    if (!firstClick) {
      fetch("/phrases.json?url")
        .then(response => response.json())
        .then(data => {
          const phrases = data.phrases;
          const randomIndex = Math.floor(Math.random() * phrases.length);
          const randomPhrase = phrases[randomIndex];
          dispatch(changeImage({ randomPhrase }));
        })
        .catch(error => {
          console.error("Ошибка при загрузке JSON файла:", error);
          setError(error);
        });
    }
  }

  function playAudio() {
    const audio = new Audio(clickSound);
    audio.play();
  }

  if (error) {
    return <ErrorMessage message={error} />;
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
            changeCookie(); playAudio();
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


