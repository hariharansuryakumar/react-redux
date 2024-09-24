import React from 'react'
import {  Provider } from 'react-redux'
import Cart from './Cart'
import store from './redux/store'

function App() {
  

  return (
 <Provider store={store}> 
  <Cart/>
 </Provider>
  )
}

export default App