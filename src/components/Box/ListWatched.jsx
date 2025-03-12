



export function ListWatched({ isOpen2, setIsOpen2, children}) {
    return <div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen2((open) => !open)}
    >
      {isOpen2 ? "–" : "+"}
    </button>
    {isOpen2 && (
      <>

      {children}

    
        
    
        
      </>
    )}
  </div>
}