import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

//Los Hooks son funciones que retornan algo

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }

    //useEffect ejecuta efectos secundarios al realizar una acción
    useEffect( () => {
        getImages();
    }, [ ] );

    return {
        images,
        isLoading
    }
     
}