



export function ListBox({children, isOpen1,setIsOpen1 } ) {
    return <div className="box">
    <button
      className="btn-toggle"
      onClick={() =>  setIsOpen1((open) => !open)}
    >
      { isOpen1 ? "–" : "+"}
    </button>
    { isOpen1 && (

    children
      
    )}
  </div>
}