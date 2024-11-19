import { useCallback, useEffect, useState } from 'react'

import type { Dispatch, SetStateAction } from 'react'

import { useEventCallback, useEventListener } from 'usehooks-ts'

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface WindowEventMap {
    'local-storage': CustomEvent
  }
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>, () => void] {
  const serializer = useCallback<(value: T) => string>(value => {
      return JSON.stringify(value)
    },[])

  const deserializer = useCallback<(value: string) => T>(value => {
      if (value === 'undefined') {
        return undefined as unknown as T
      }
      const dateTimeDeserializer = (key: any, value: any) => {
        if ( key === 'updatedAt' ) {
            return new Date(value);
        }
        return value;
      }
      const defaultValue = initialValue
      let parsed: unknown
      try {
        parsed = JSON.parse(value, dateTimeDeserializer)
      } catch (error) {
        console.error('Error parsing JSON:', error)
        return defaultValue
      }

      return parsed as T
    }, [initialValue])

  const readValue = useCallback((): T => {
    const initialValueToUse =initialValue
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? deserializer(raw) : initialValueToUse
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValueToUse
    }
  }, [initialValue, key, deserializer])

  const [storedValue, setStoredValue] = useState(() => {
    return initialValue
  })


  const setValue: Dispatch<SetStateAction<T>> = useEventCallback(value => {
    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(readValue()) : value

      // Save to local storage
      window.localStorage.setItem(key, serializer(newValue))

      // Save state
      setStoredValue(newValue)

      // We dispatch a custom event so every similar useLocalStorage hook is notified
      window.dispatchEvent(new StorageEvent('local-storage', { key }))
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error)
    }
  })

  const removeValue = useEventCallback(() => {

    const defaultValue = initialValue

    // Remove the key from local storage
    window.localStorage.removeItem(key)

    // Save state with default value
    setStoredValue(defaultValue)

    // We dispatch a custom event so every similar useLocalStorage hook is notified
    window.dispatchEvent(new StorageEvent('local-storage', { key }))
  })

  useEffect(() => {
    setStoredValue(readValue())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ((event as StorageEvent).key && (event as StorageEvent).key !== key) {
        return
      }
      setStoredValue(readValue())
    },
    [key, readValue],
  )

  // this only works for other documents, not the current one
  useEventListener('storage', handleStorageChange)

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener('local-storage', handleStorageChange)

  return [storedValue, setValue, removeValue]
}