// import { create } from 'zustand'

// const useStore = create((set) => ({
//   movies: 0,
//   increasePopulation: () => set((state) => ({ movies: state.movies + 1 })),
//   removeAllLikes: () => set({ likes: 0 }),
//   updateLikes: (newMovies) => set({ likes: newMovies }),
// }))

// function MoviesCounter() {
//   const likes = useStore((state) => movies.likes)
//   return <h1>{likes} around here...</h1>
// }

// function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation)
//   return <button onClick={increasePopulation}>one up</button>
// }