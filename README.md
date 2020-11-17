# useContructor [![NPM version](https://badge.fury.io/js/use-constructor-hook.svg)](https://badge.fury.io/js/use-constructor-hook) [![npm](https://img.shields.io/npm/dt/use-constructor-hook.svg?style=flat-square)](https://www.npmjs.com/package/use-constructor-hook) [![GitHub stars](https://img.shields.io/github/stars/elvisgastelum/useConstructor.svg?style=social&label=Stars)](https://github.com/elvisgastelum/useConstructor)
[![NPM](https://nodei.co/npm/use-constructor-hook.png?mini=true)](https://npmjs.org/package/use-constructor-hook)

useConstructor is a custom hook for do something
before the first component render

## Installation

```bash
npm install --save use-constructor-hook
```

## Example:
```js
import React, { useState } from 'react'
import { useConstructor } from 'use-constructor-hook'

import { fetchDataFromApi } from './api.js'

const App = () => {
  const [dataFetched, setDataFetched] = useState(undefined)
  useConstructor(async () => {
    const response = await fetchDataFromApi()
  })

  return (
    <div>{dataFetched || 'Loading data...'}<div>
  )
}
```

## Support

Submit an [issue](https://github.com/elvisgastelum/useConstructor/issues/new)

## Credits

- [🐦 Elvis Gastelum](https://twitter.com/ElvisGastelum) - Author
