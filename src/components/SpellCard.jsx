function SpellCard(props) {
    return (
        <div className="spell-card" onClick={() => props.deleteSpell(props.id)}>
            <h3>{props.name}</h3>
            <p>Level: {props.level}</p>
            <p>School: {props.school}</p>
        </div>
    )
}

export default SpellCard;