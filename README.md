# useContructor [![NPM version](https://badge.fury.io/js/use-constructor-hook.svg)](https://badge.fury.io/js/use-constructor-hook)
[![NPM](https://nodei.co/npm/use-constructor-hook.png?mini=true)](https://npmjs.org/package/use-constructor-hook)

useConstructor is a custom hook for do something
before the first component render

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