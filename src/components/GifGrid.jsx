
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ( { category } ) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h3> { category } </h3>
        
        {/* Mostramos mensaje de cargando por unos ms */}
        {
          isLoading && ( <h2>Cargando....</h2> )
        }

        <div className="card-grid">
           {
              images.map( ( image ) => ( 
                
                <GifGridItem key={ image.id } 
                            //  title= { image.title} 
                            //  url = { image.url }  o bien usar...
                              { ... image } //Trae todas las props de image
                             />
              ) )
           }

        </div>

    </>
  )

}