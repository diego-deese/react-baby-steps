export const Card = ({ charName, imgName, isCovered }) => {
    const imgPath = `./img/${imgName}.jpg`
    const className = `card ${isCovered ? 'is-covered' : ''}`

    if (isCovered) charName = '?'

    return (
        <div className={className}>
            {isCovered ? '' : <img src={imgPath} className="character-image"/>}
            {charName}
        </div>
    )
}
