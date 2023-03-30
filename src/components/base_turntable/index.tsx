/* eslint-disable no-console */
import React, {useEffect, useRef} from 'react'
import {View, Image, Text, Canvas, CoverView} from '@tarojs/components'
import singleTurntableBg from '../../images/turntable-background.png'
import multiTurntableBg from '../../images/muilt-turntable-background.png'
import {LuckyWheel} from '@lucky-canvas/taro/react'

import './index.scss'
import Taro from '@tarojs/taro'
import BaseButton from '../base_button'
type BaseTurntableProps = {
  options: string[]
  className?: string
}
const BaseTurntable = (props: BaseTurntableProps) => {
  const {options} = props
  const turntableRef = useRef(null)
  const newOptions = options?.map(item => ({
    fonts: [
      {
        text: item,
        top: '10%',
        fontColor: '#AF3979',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
      },
    ],
    background: 'rgba(255,255,255,0.3)',
  }))

  const onClickTurntable = () => {
    turntableRef?.current?.play()
    setTimeout(() => {
      const res = Math.random() * 6 + 2
      turntableRef?.current?.stop(res)
    }, 2000)
  }
  return (
    <View className="base-turntable-wrapper">
      <LuckyWheel
        blocks={[
          {
            padding: '32px',
            imgs: [{src: multiTurntableBg, top: '-4', width: '310px', height: '342px'}],
          },
        ]}
        defaultConfig={{
          gutter: 1,
        }}
        prizes={newOptions}
        ref={refs => (turntableRef.current = refs)}
      />
      <BaseButton className="turntable-btn" onClick={onClickTurntable} title="开转" />
    </View>
  )
}

export default BaseTurntable
