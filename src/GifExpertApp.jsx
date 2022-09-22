import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball']);

    const onAddCategory = ( newCategory ) => {

        //analiza si la categoria insertada ya se incluye en el array
        if ( categories.includes(newCategory )) return ;

        // Operador spret .... (Copia todo lo demas del array de categories)
       //setCategories( [ ...categories, 'Valorant' ] );  //Forma 1
       setCategories( [ newCategory , ...categories] )       //Forma 2  
    }

  return (
    <>
        <h1> GifExpertApp </h1>

        <AddCategory onNewCategory = { (value) => onAddCategory(value) } />

        { 
            categories.map( (category) => 
                ( <GifGrid 
                    key={ category } 
                    category={ category } /> 
                )) 
        }

    </>
  )

}