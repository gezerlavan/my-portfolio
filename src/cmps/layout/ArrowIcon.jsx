import arrowIcon from '../../assets/img/arrow.png'

export function ArrowIcon({ redirect }) {
  return (
    <img
      src={arrowIcon}
      alt="Arrow icon"
      className="arrow icon"
      onClick={() => {
        window.location.href = redirect
      }}
    />
  )
}
