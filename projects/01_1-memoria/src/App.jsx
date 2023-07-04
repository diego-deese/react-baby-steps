import { useState } from 'react'

import { Card } from '/components/Card.jsx'

function App() {
  const initialCards = [
    { charName: 'Diego Sahid', imgName: 'Diego', isCovered: true, isMatched: false },
    { charName: 'Benijugoso', imgName: 'Beniju', isCovered: true, isMatched: false },
    { charName: 'MiduDev', imgName: 'Midu', isCovered: true, isMatched: false },
    { charName: 'Diego Sahid', imgName: 'Diego', isCovered: true, isMatched: false },
    { charName: 'MiduDev', imgName: 'Midu', isCovered: true, isMatched: false },
    { charName: 'Benijugoso', imgName: 'Beniju', isCovered: true, isMatched: false }
  ]

  const [inGuessingMode, setInGuessingMode] = useState(false)
  const [totalGuess, setTotalGuess] = useState(0)
  const [cardInGuessing, setCardInGuessing] = useState(null)
  const [cards, setCards] = useState(initialCards)
  const [msj, setMsj] = useState('Escoge una carta')

  const checkGuess = (index, compareName) => {
    console.log('checkGuess')
  }

  const updateCard = (index) => {
    const newCards = [...cards]

    if (inGuessingMode) {
      const hasGuessed = checkGuess(index, newCards[index].charName)
    } else {
      newCards[index].isCovered = !newCards[index].isCovered
      setCards(newCards)
      setCardInGuessing(newCards[index].charName)
      const newGuessingMode = !inGuessingMode
      setInGuessingMode(newGuessingMode)
      console.log('inGuessingMode', inGuessingMode)
    }
  }

  return (
    <main className='board'>
      <h1>Memoria</h1>
      <h2>Cartas Emparejadas: {totalGuess}</h2>
      <section className='cards'>
        {
          cards.map((card, index) => {
            return (
              <Card
                key={index}
                index={index}
                updateCard={updateCard}
                imgName={card.imgName}
                charName={card.charName}
                isCovered={card.isCovered}
              >
              </Card>
            )
          })
        }
      </section>
      <p className='info'>{msj}</p>
    </main>
  )
}

export default App
