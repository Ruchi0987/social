import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from './welcom'

const index = () => {
    const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="welcome" onPress={() => router.push('welcome')}/>
    </ScreenWrapper>
  )
}

export default index