import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🐈</h1>
      <AddNewDeckForm />
      <DecksList />
        <footer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deserunt dignissimos dolore dolorum error nihil quia repudiandae vel voluptatem! Distinctio dolorum excepturi impedit laborum laudantium magni quisquam suscipit vel! </footer>
    </div>
  )
}
