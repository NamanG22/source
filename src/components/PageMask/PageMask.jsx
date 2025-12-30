import './PageMask.css'

function PageMask({ isVisible, onClick }) {
  if (!isVisible) return null

  return (
    <div className="page-mask" onClick={onClick}></div>
  )
}

export default PageMask

