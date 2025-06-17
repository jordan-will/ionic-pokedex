/**
 * ESSA FUNÇÃO EXTRAI O ID DE CADA POKEMON, COM O OBJETIVO
 * DE BUSCAR O SPRIT DO POKEMON
 * PARA UMA MELHOR EXPERIÊNCIA DO USUÁRIO
 * AO MOSTRAR O POKEMON JUNTO COM SUA IMAGEM
*/

export const getPokemonId = (url: string): number => {
  const regex = /\/(\d+)(?:\/)?$/; 
  const match = url.match(regex);
  return match ? parseInt(match[1], 10) : -1;
}