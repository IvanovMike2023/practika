import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import {useAppSelector} from "../store";

export const GlobalError = () => {
 // const errorMessage = ''
  const errorMessage=useAppSelector(state=>state.app.error)
  console.log(errorMessage)
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
