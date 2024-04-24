import { api } from '../api'

export const getAllGames = async (count: number) => {
  return api.get('/games').then((response) => {
    const shuffledGames = response.data.sort(() => 0.5 - Math.random())
    return shuffledGames.slice(0, count)
  })
}

export const getGame = async (id: number) => {
  return await api.get('/game?id=' + id).then((response) => {
    return response.data
  })
}

export const getCatPlat = async (genre: string, plat: string) => {
  return await api.get('/games?category=' + genre + '&platform=' + plat).then((response) => {
    return response.data
  })
}
