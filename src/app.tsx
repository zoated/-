import {ReactNode, useState} from 'react'
import {AppContext} from './context_type'
import './app.scss'

type AppPropsWithChildren = {
  children: ReactNode
}

const App = (props: AppPropsWithChildren) => {
  const [userInfo, setUserInfo] = useState('陈家政')
  return <AppContext.Provider value={{userInfo}}>{props.children}</AppContext.Provider>
}

export default App
