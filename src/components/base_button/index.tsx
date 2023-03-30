import {View, Text} from '@tarojs/components'
import React from 'react'
import './index.scss'

const BaseButton = ({title, className, onClick}) => {
  return (
    <View className={`base-btn-wrapper ${className ? className : ''}`} onClick={onClick}>
      <View className="btn-bg-wrapper">
        <View className="btn-bg" />
        <Text className="btn-title">{title}</Text>
      </View>
      <View className="circle animation" />
      {/* <View className="circle animation" /> */}
    </View>
  )
}

export default BaseButton
