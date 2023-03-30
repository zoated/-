import React, {useContext} from 'react'
import {View, Text} from '@tarojs/components'
import './index.scss'
import {useAppContext} from '../../context_type'
import Taro from '@tarojs/taro'

const Index = () => {
  const appContext = useAppContext()
  console.warn('appContext', appContext)
  const onHandleGo = () => {
    Taro.navigateTo({
      url: '/pages/turntable/index',
    })
  }
  return (
    <View className="index">
      <Text onClick={onHandleGo}>Index</Text>
    </View>
  )
}
export default Index
