# lazy-ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/lazy-ui.svg)](https://www.npmjs.com/package/lazy-element) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lazy-element
```

## Usage

```tsx
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
```

## License

MIT © [yewin](https://github.com/yewin)
