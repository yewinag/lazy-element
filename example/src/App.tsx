import React from 'react'

import { Button } from 'lazy-ui'
import 'lazy-ui/dist/index.css'

const App = () => {
  return (
    <div>
      <Button type='primary'>{'Click on 🫥'}</Button>
      <Button type='success'>{'Success 🍀'}</Button>
      <Button type='error'>{'Wrong 🍄'}</Button>
      <Button type='link'>{'Link 👇'}</Button>
    </div>
  )
}

export default App
