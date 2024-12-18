// import { create } from 'zustand'
// import { persist, createJSONStorage } from 'zustand/middleware'

// export const useMovieStore = create(
//   persist(
//     (set, get) => ({
//       movie: 0,
//       addAMovie: () => set({ movie: get().movie + 1 }),
//     }),
//     {
//       name: 'movies-storage', // name of the item in the storage (must be unique)
//       storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
//     },
//   ),
// )