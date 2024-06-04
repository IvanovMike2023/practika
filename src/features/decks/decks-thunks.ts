import {Dispatch} from 'redux'
import {decksAPI, UpdateDeckParams} from './decks-api.ts'
import {addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC} from './decks-reducer.ts'
import {AppSetatusAC} from "../../app/app-reducer";
import {handleError} from "../../common/utils/handle-error";

// export const fetchDecksTC = () => async (dispatch: Dispatch) => {
//     dispatch(AppSetatusAC('loading'))
//     try {
//         decksAPI.fetchDecks().then((res) => {
//             dispatch(setDecksAC(res.data.items))
//             dispatch(AppSetatusAC('succeeded'))
//         })
//     } catch (e) {
//         dispatch(AppSetatusAC('failed'))
//     }
//}
export const fetchDecksTC = () => async (dispatch: Dispatch) => {
    dispatch(AppSetatusAC('loading'))
    try {
        const res = await decksAPI.fetchDecks()
        dispatch(setDecksAC(res.data.items))
        dispatch(AppSetatusAC('succeeded'))
    } catch (e) {
        dispatch(AppSetatusAC('failed'))
    }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
    return decksAPI.addDeck(name).then((res) => {
        dispatch(addDeckAC(res.data))
    })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
    return decksAPI.deleteDeck(id).then((res) => {
        dispatch(deleteDeckAC(res.data.id))
    })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
    try {
        // throw new Error('boom!')
        const res = await decksAPI.updateDeck(params).then((res) => {
            dispatch(updateDeckAC(res.data))
        })
    } catch (e) {
        handleError(e, dispatch)
    }
}

