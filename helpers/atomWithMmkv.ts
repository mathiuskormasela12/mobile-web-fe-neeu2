import { type WritableAtom, type SetStateAction } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

const getItem = (key: string): string | null => {
  return storage.getString(key) ?? null
}

const removeItem = (key: string): void => {
  storage.delete(key)
}

const setItem = (key: string, value: string): void => {
  storage.set(key, value)
}

const clearAll = (): void => {
  storage.clearAll()
}

export const atomWithMmkv = <T>(key: string, value: T): WritableAtom<T, [SetStateAction<T>], void> => {
  const result = atomWithStorage<T>(key, value, createJSONStorage(() => ({
    getItem,
    removeItem,
    clearAll,
    setItem
  })))

  return result
}
