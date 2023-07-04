export const Card = ({ charName, imgName, isCovered, updateCard, index}) => {
    const imgPath = `./img/${imgName}.jpg`
    const className = `card ${isCovered ? 'is-covered' : ''}`
    charName = isCovered ? '?' : charName

    const handleClick = () => {
        updateCard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {isCovered ? '' : <img src={imgPath} className="character-image"/>}
            {charName}
        </div>
    )
}
