import {createContext, useContext} from 'react'

export type AppContextTypes = {
  userInfo: any
}

export const APP_INIT_CONTEXT = {
  userInfo: {},
}

export const AppContext = createContext<AppContextTypes>(APP_INIT_CONTEXT)

export const useAppContext = () => useContext(AppContext)
