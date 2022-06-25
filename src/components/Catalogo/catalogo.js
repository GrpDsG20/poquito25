
import React from 'react'
import { FondoBook } from '../Pages/Book/bookFondo'
import '../Catalogo/catalogo.css'

export const Catalogo = () => {
  return (
    <>
    <FondoBook />
    <div className='container-products'>

    <div className='cabezera'>
      <h2>Catalogo de Productos</h2>

    <div className='filtros-cabeza'>
      <select name="ordenar" id="">
      <option value="volvo">Nombre: Ordenar de A a Z</option>
    </select>
      <input type="search" className='buscar' placeholder='Buscar Producto'/>
      </div>
      
      </div> 
    
    <div className='filtros'>
    <div className='categoria'>
        <h3>Categorias</h3>
        <select name="order" id="categoria">
       <option value="">Todas los Productos</option>
       <option value="marca1">marca1</option>
        <option value="marca2">marca2</option>
        <option value="marca3">marca3</option>
        <option value="marca4">marca4</option>
        </select>
    </div>
    
    <div className='Marcas'>
    <h3>Marcas</h3>
      <select name="order" id="categoria">
       <option value="">Todas las Marcas</option>
       <option value="marca1">marca1</option>
        <option value="marca2">marca2</option>
        <option value="marca3">marca3</option>
        <option value="marca4">marca4</option>
        </select>
    </div>
    </div>

    <div className='catalogo'>

    <div className='contenedor-productos'>

        <div className='prod'></div>
        <div className='prod'></div>
        <div className='prod'></div>

    </div>
    </div>
    
    </div>
 
    </>
  )
}
