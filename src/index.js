import { useRef } from 'react'

export const useConstructor = (callBack = () => {}) => {
    const hasBeenCalled = useRef(false)

    if (hasBeenCalled.current) return

    if (typeof callBack !== 'function') {
        throw new Error('You need pass a callback function as first param')
    }

    callBack()

    hasBeenCalled.current = true
}