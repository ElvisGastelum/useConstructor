import { useRef } from 'react';

/**
 * useConstructor is a custom hook for do something
 * before the first component render
 *
 * Example:
 * import React, { useState } from 'react'
 * import { useConstructor } from 'use-constructor-hook'
 *
 * import { fetchDataFromApi } from './api.js'
 *
 * const App = () => {
 *   const [dataFetched, setDataFetched] = useState(undefined)
 *   useConstructor(async () => {
 *     const response = await fetchDataFromApi()
 *   })
 *
 *   return (
 *     <div>{dataFetched || 'Loading data...'}<div>
 *   )
 * }
 *
 *
 * @type {import('use-constructor-hook').useConstructor}
 */
export const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = useRef(false);

  if (hasBeenCalled.current) return;

  if (typeof callBack !== 'function') {
    throw new Error('You need pass callback function as first param');
  }

  async function init() {
    await callBack();
    hasBeenCalled.current = true;
  }

  init();
};
