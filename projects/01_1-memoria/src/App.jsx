import { Card } from '/components/Card.jsx'

function App() {
  return (
    <main className='board'>
      <h1>Memoria</h1>
      <section className='cards'>
        <Card charName='Diego Sahid' imgName='Diego' isCovered={false}></Card>
      </section>
    </main>
  )
}

export default App
