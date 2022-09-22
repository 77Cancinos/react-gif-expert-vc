import React, { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {

          //Inicializamos el inputValue
  const [inputValue = '', setInputValue] = useState();

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);

  }

  const onSubmit = (event) => {
    //preventDefault ayuda a que se mantenga los datos del form
    event.preventDefault();

    //Verificamos que no se manden espacios vacios
    if (inputValue.trim().length <= 1) return;

    console.log(inputValue);
    //setCategories( categories =>  [ inputValue, ...categories] ); //Insertamos una nueva categoria, pero conservamos el resto
    setInputValue(''); //Limpiamos el input
    onNewCategory(inputValue.trim());
  }

  return (
    <>
      <form onSubmit= { onSubmit } >

        <input
          type='text'
          placeholder='buscar gifs ...'
          value={inputValue}
          onChange={onInputChange}>
        </input>

      </form>
    </>
  )

}