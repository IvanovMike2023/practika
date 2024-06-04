import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import Skeleton from 'react-loading-skeleton'
import {DeckItemSkeleton} from "./DeckItem/DeckItemSkeleton";

export const DecksList = () => {
  const { decks,isLoadingg } = useFetchDecks()
  console.log(isLoadingg)
  return (
      <>
        {isLoadingg && decks.length === 0 && <DeckItemSkeleton count={10} />}

        <ul className={s.list}>
          {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
      </>
  )
}
