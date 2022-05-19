import { createSlice } from "@reduxjs/toolkit"

const posts = [
  {id: 1, img: 'https://images.unsplash.com/photo-1615798763618-183906cd14b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631', title: 'Lizard 1', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000', date: new Date().toLocaleDateString()},
  {id: 2, img: 'https://images.unsplash.com/photo-1601062087032-5f07e3304320?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632', title: 'Lizard 2', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000', date: new Date().toLocaleDateString()},
  {id: 3, img: 'https://images.unsplash.com/photo-1597245623587-82578a8b0c90?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171', title: 'Lizard 3', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000', date: new Date().toLocaleDateString()},
  {id: 4, img: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170', title: 'Lizard 4', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000', date: new Date().toLocaleDateString()},
]

const slice = createSlice({
  name: "posts",
  initialState: posts,
  reducers: {
    createPost: (state, action) => {
      state.push(action.payload)
    },
  }
})

export const {createPost} = slice.actions

export const getById = id => state => state.posts.find(item => item.id == id)

export default slice.reducer;