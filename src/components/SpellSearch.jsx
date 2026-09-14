function SpellSearch(props) {
    return (
        <div className="search-section">
            <h3>NEW: Spell Search</h3>
            <input
                type="text"
                placeholder="Search spells..."
                value={props.search}
                onChange={(event) => props.setSearch(event.target.value)}
            />
        </div>
    )
}

export default SpellSearch;