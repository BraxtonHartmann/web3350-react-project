import { useState } from 'react'
import './App.css'
import SpellForm from './components/SpellForm';
import SpellCard from './components/SpellCard';

const spellsList = [
  {
    id: 1,
    name: "Fireball",
    level: "3rd",
    school: "Evocation"
  },
  {
    id: 2,
    name: "Shield",
    level: "1st",
    school: "Abjuration"
  },
  {
    id: 3,
    name: "Misty Step",
    level: "2nd",
    school: "Conjuration"
  }
];

function App() {
  const [spells, setSpells] = useState(spellsList);

  function addSpell(newSpell) {
    const spellWithId = {
      ...newSpell,
      id: Date.now()
    }
    setSpells([spellWithId, ...spells])
  }

  return (
    <div>
      <h1>My Spellbook</h1>

      <SpellForm addSpell={addSpell} />

      <h2>Spells</h2>

      {spells.map((spell) => (
        <SpellCard
          key={spell.id}
          name={spell.name}
          level={spell.level}
          school={spell.school}
        />
      ))}
    </div>
  )
}

export default App;