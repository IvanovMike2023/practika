import {Dispatch} from 'redux'
import {decksAPI, UpdateDeckParams} from './decks-api.ts'
import {addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC} from './decks-reducer.ts'
import {createLogger} from "vite";
import {AppSetatusAC} from "../../app/app-reducer";

export const fetchDecksTC = () => (dispatch: Dispatch) => {
    dispatch(AppSetatusAC('loading'))
    decksAPI.fetchDecks().then((res) => {
        dispatch(setDecksAC(res.data.items))
        dispatch(AppSetatusAC('succeeded'))

    }).catch()
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
        if (e.response) {
            console.log(e.response.data.errorMessages[0].message)
        } else if (e.message) {
            console.log(e.message)
        } else console.log({e: e.message.e})
    }
}

