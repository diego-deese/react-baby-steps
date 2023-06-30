export const Square = ({ children, isSelected, updtateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    
    const handleClick = () => {
      updtateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }