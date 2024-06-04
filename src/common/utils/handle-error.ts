import {isAxiosError} from "axios";
import {AppSetErrorAC} from "../../app/app-reducer";

export const handleError=(e,dispatch)=>{
    let mesageError:string
    if(isAxiosError(e)){
        mesageError=e.response? e.response.data.errorMessages[0].message : e.message
    }else mesageError=(e as Error).message
    dispatch(AppSetErrorAC(mesageError))
}
