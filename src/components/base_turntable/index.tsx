import React from 'react'
import {View, Image} from '@tarojs/components'
import singleTurntableBg from '../../images/turntable-background.png'
import multiTurntableBg from '../../images/muilt-turntable-background.png'

import './index.scss'
type BaseTurntableProps = {
  options: string[]
  className?: string
}
const BaseTurntable = (props: BaseTurntableProps) => {
  const {options} = props
  const averageRotate = 360 / options?.length
  const renderTurntableOption = (item: string, index: number) => {
    return (
      <View
        className="turntable-option"
        key={index}
        style={{
          transform: `rotate(${averageRotate * index}deg) translate(-50%, -50%)`,
        }}>
        {item}
      </View>
    )
  }
  return (
    <View className="base-turntable-wrapper">
      <Image lazyLoad mode="widthFix" src={multiTurntableBg} style={{width: '100vw'}} />
      {options?.map((item, index) => renderTurntableOption(item, index))}
    </View>
  )
}

export default BaseTurntable
