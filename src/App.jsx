import { useState } from 'react'
import './App.css'
import SpellForm from './components/SpellForm';
import SpellCard from './components/SpellCard';
import SpellSearch from './components/SpellSearch';

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
  const [search, setSearch] = useState('');

  function addSpell(newSpell) {
    const spellWithId = {
      ...newSpell,
      id: Date.now()
    }
    setSpells([spellWithId, ...spells])
  }

  // I needed AI to work though how this should work but I wrote it myself
  function deleteSpell(id) {
    setSpells(spells.filter((spell) => spell.id !== id))
  }

  const filteredSpells = spells.filter((spell) =>
    spell.name.toLowerCase().includes(search.toLowerCase()) ||
    spell.level.toLowerCase().includes(search.toLowerCase()) ||
    spell.school.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>My Spellbook</h1>

      <SpellForm addSpell={addSpell} />
      <SpellSearch search={search} setSearch={setSearch} />

      <h2>Spells</h2>

      {filteredSpells.map((spell) => (
        <SpellCard
          key={spell.id}
          name={spell.name}
          level={spell.level}
          school={spell.school}
          id={spell.id}
          deleteSpell={deleteSpell}
        />
      ))}
    </div>
  )
}

export default App;