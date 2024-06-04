import {isAxiosError} from "axios";
import {AppSetErrorAC} from "../../app/app-reducer";
import {Dispatch} from "redux";

export const handleError=(e: unknown,dispatch:Dispatch)=>{
    let mesageError:string
    if(isAxiosError<ServerError>(e)){
        mesageError=e.response? e.response.data.errorMessages[0].message : e.message
    }else mesageError=(e as Error).message
    dispatch(AppSetErrorAC(mesageError))
}
type ServerError = {
    errorMessages: Array<{
        message: string
        field: string
    }>
}