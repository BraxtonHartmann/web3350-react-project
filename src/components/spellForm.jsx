import { useState } from 'react'

function SpellForm(props) {
    const [name, setName] = useState('')
    const [level, setLevel] = useState('Cantrip')
    const [school, setSchool] = useState('Abjuration')
    const [error, setError] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if (name.trim() === '') {
            setError('Please enter a spell name.')
            return
        }

        setError('')

        props.addSpell({
            name: name.trim(),
            level: level,
            school: school
        })

        setName('')
        setLevel('Cantrip')
        setSchool('Abjuration')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Spell Name
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>

            {/* I learned about this from AI for conditional rendering */}
            {error && <p>{error}</p>}

            <label>
                Spell Level
                <select value={level} onChange={(event) => setLevel(event.target.value)}>
                    <option value="Cantrip">Cantrip</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                    <option value="9th">9th</option>
                </select>
            </label>

            <label>
                School of Magic
                <select value={school} onChange={(event) => setSchool(event.target.value)}>
                    <option value="Abjuration">Abjuration</option>
                    <option value="Conjuration">Conjuration</option>
                    <option value="Divination">Divination</option>
                    <option value="Enchantment">Enchantment</option>
                    <option value="Evocation">Evocation</option>
                    <option value="Illusion">Illusion</option>
                    <option value="Necromancy">Necromancy</option>
                    <option value="Transmutation">Transmutation</option>
                </select>
            </label>

            <button type="submit">Add Spell</button>
        </form>
    )
}

export default SpellForm;
