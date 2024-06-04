import {Dispatch} from "redux";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
      case "SET-STATUS":
        return {...state,status: action.status}
        case "SET-ERROR":
        return {...state,error: action.error}
      default:
            return state
    }
}
type AppSetatusType = {
    type: 'SET-STATUS'
    status: RequestStatusType
}
export const AppSetatusAC = (status: RequestStatusType) => ({
    type: 'SET-STATUS' as const,
    status
})
type AppSetErrorType = {
    type: 'SET-ERROR'
    error: null | string
}
export const AppSetErrorAC = (error) => ({
    type: 'SET-ERROR' as const,
    error
})
export const AppSetErrorTC=(e)=>(dispatch:Dispatch)=>{
   return  dispatch(AppSetErrorAC(e))
}
type ActionsType = AppSetatusType | AppSetErrorType
