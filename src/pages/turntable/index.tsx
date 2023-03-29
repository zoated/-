import React, {useEffect, useState} from 'react'
import {View, Image, PageContainer} from '@tarojs/components'
import BaseTurntable from '../../components/base_turntable/index'
import successGif from '../../images/success.gif'
const Turntable = () => {
  const [isShowPage, setShowPage] = useState(true)
  const [isShowSuccess, setShowSuccess] = useState(false)

  const onEndTurntable = () => {
    setShowSuccess(true)
  }

  useEffect(() => {
    if (isShowSuccess) {
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }
  }, [isShowSuccess])
  return (
    <View className="turntable-warpper">
      {!isShowPage && <View onClick={onEndTurntable}>转盘</View>}
      {isShowSuccess && (
        <Image lazyLoad mode="widthFix" src={successGif} style={{width: '100vw'}} />
      )}
      <PageContainer
        duration={0}
        onLeave={() => setShowPage(false)}
        overlay={false}
        show={isShowPage}>
        <View style={{height: '100vh'}}>
          <View>弹窗内的转盘</View>
          <BaseTurntable
            options={[
              '选项1',
              '去上海喂鸽子',
              '去圣地亚哥抓小偷',
              '去上海喂鸽子',
              '去上海喂鸽子',
              '去上海喂鸽子',
            ]}
          />
        </View>
      </PageContainer>
    </View>
  )
}
export default Turntable
