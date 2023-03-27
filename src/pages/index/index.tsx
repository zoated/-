import React, {useContext} from 'react'
import {View, Text} from '@tarojs/components'
import './index.scss'
import {useAppContext} from '../../context_type'

const Index = () => {
  const appContext = useAppContext()
  console.warn('appContext', appContext)
  const onHandleGo = () => {
    wx.navigateTo({
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
