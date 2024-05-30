import s from './DeckItem.module.css'
import { useAppDispatch } from '../../../../app/store.ts'
import { deleteDeckTC, updateDeckTC } from '../../decks-thunks.ts'
import { Deck } from '../../decks-api.ts'
import {useState} from "react";

type DeckProps = {
  deck: Deck
}

const TEST_ACC_NAME = 'Sweety'

export const DeckItem = ({ deck }: DeckProps) => {
  const isTestingDeck = deck.author.name === TEST_ACC_NAME
  const dispatch = useAppDispatch()
const [disabled,Setdisabled]=useState(false)
  const handleDeleteButtonClick = () => {
      Setdisabled(true)
    dispatch(deleteDeckTC(deck.id)).then((el)=>Setdisabled(false)
    )
  }

  const handleEditButtonClick = () => {
      Setdisabled(true)
      dispatch(updateDeckTC({ id: deck.id, name: `${deck.name} updated` })).then(()=>{
          Setdisabled(false)
      })
  }

  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {isTestingDeck && (
        <div className={s.buttonBox}>
          <button onClick={handleEditButtonClick} disabled={disabled}>update</button>
          <button onClick={handleDeleteButtonClick} disabled={disabled}>delete</button>
        </div>
      )}
    </li>
  )
}
