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

  const checkIfAllMatched = () => {
    const allMatched = cards.every(card => card.isMatched === true)
    return allMatched
  }

  const coverAllCards = () => {
    cards.forEach(card => {
      card.isCovered = true
    })
  }

  const checkGuess = (index, compareName) => {
    allMatched = checkIfAllMatched()
    if (cards[index].charName === cardInGuessin && !allMatched) {
      setMsj('Adivinaste! Sigue así')
      setTotalGuess(totalGuess + 1)
      setCardInGuessing(null)
      setInGuessingMode(false)
      console.log('adivino')
    } else if (!allMatched) {
      setMsj('Fallaste! Vuelve a intentarlo')
      setCardInGuessing(null)
      setInGuessingMode(false)
      coverAllCards()
    } else {
      setMsj('Ganaste!')
      setCardInGuessing(null)
      setInGuessingMode(false)
      confetti()
    }
    
  }

  const updateCard = (index) => {
    const newCards = [...cards]

    if (inGuessingMode && newCards[index].isCovered) {
      newCards[index].isCovered = !newCards[index].isCovered
      setCards(newCards)
      const hasGuessed = checkGuess(index, newCards[index].charName)
    } else if (!inGuessingMode && newCards[index].isCovered){
      newCards[index].isCovered = !newCards[index].isCovered
      setCards(newCards)
      setCardInGuessing(newCards[index].charName)
      const newGuessingMode = !inGuessingMode
      setInGuessingMode(newGuessingMode)
      console.log('inGuessingMode', inGuessingMode)
      setMsj('Escoge otra carta')
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
