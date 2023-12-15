import React, { useEffect, useState } from "react";
import { first,second,third,fourth,fifth,sixth } from './assets/images'

const App = () => {

  const images = [first,second,third,fourth,fifth,sixth]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Changez l'index de l'image dans le tableau toutes les 2 secondes
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Nettoyez l'intervalle lorsqu'on démonte le composant
    return () => clearInterval(intervalId);
  }, [images]);
  

  return (
    <main className="min-h-screen text-white flex flex-col" >
      <img src={images[currentImageIndex]} alt="" className="absolute w-screen bg-cover"/>
    </main>
  )
}

export default App