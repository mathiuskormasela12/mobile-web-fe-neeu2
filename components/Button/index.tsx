import { counterAtom } from '@Stores'
import { useAtom } from 'jotai'
import React, { useCallback, type PropsWithChildren } from 'react'
import { Platform, Pressable, Text, View } from 'react-native'

export const Button: React.FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useAtom(counterAtom)

  const increment = useCallback(() => {
    setCount(currentCount => currentCount + 1)
  }, [setCount])

  if (Platform.OS === 'web') {
    return (
      <button onClick={increment} className="bg-sky-600 px-10 py-3 rounded text-lg text-white hover:opacity-50 duration-500">
        {children} {count}
      </button>
    )
  }
  return (
    <Pressable onPress={increment}>
      <View className="bg-sky-600 px-10 py-3 rounded">
        <Text className="text-lg text-white">{children} {count}</Text>
      </View>
    </Pressable>
  )
}
