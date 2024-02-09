import { useState } from 'react'

const PokeSearch = () => {
  console.log('Pokemonを探します')
}
export const Search = () => {
  return (
    <>
      <input type="text" placeholder="Pokemonを探す" />
      <button onClick={PokeSearch}>検索</button>
    </>
  )
}
