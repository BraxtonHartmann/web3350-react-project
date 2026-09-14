function SpellCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Level: {props.level}</p>
      <p>School: {props.school}</p>
    </div>
  )
}

export default SpellCard;

