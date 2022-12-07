const Item = ({ saludo }) => {
    return (
      <div>
        <h1>Item</h1>
        <img src="data:image/png;base64,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" alt="imagen" />
        <button onClick={ saludo } >SAludar</button>
      </div>
    )
  }

    export default Item

    // patrones
    // 1. Componente de clase 
    // 1. Componente funcionales de presentacion - mostrar datos