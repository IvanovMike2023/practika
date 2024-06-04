import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect, useLayoutEffect, useState } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
    const [isLoadingg, setIsLoadingg] = useState(false)
    const dispatch = useAppDispatch()
    const decks = useAppSelector(selectDecks)

    useLayoutEffect(() => {
        setIsLoadingg(true)
        dispatch(fetchDecksTC()).finally(() => {
            setIsLoadingg(false)
        })
    }, [dispatch])

    return {
        decks,
        isLoadingg,
    }
}