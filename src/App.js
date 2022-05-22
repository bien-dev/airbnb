import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

function App() {
  const cards = data.map(card => {
    return (
      <Card 
          key={card.id}
          {...card}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex card-list">
        {cards}
      </div>
    </div>
  );
}

export default App;
