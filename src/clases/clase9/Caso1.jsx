import { useState } from "react";


function Select({ options, onSelect, defaultOption=1 }) {

  return (

    <select 
      onChange={(evt) => onSelect(Number(evt.target.value))}
    >
    
      
      {
        options.map((val) => (
            <option value={val.value}>{val.text}</option>
        ))
      }

    </select>

  );
}

const options = [ // base de datos
    { value: 1, text: "Azul", img:'' },
    { value: 2, text: "Rojo" }
    // { value: 3, text: "Verde" }
  ];

export default function Caso1() {
  
  const [option, setOption] = useState(1);

    function optionSelected(value) {
        setOption(value);
        //console.log(value)
    }
      
    return (
        <>
            {option===1 ? 
                    <img src='https://static.dafiti.com.ar/p/tommy-hilfiger-6711-936993-1-product.jpg' alt='foto' className="w-25" />
                    : 
                    <img src='https://static.dafiti.com.ar/p/everlast-0575-351435-1-product.jpg' alt='foto' className="w-25" /> 
            }

            <Select 
                options={options} 
                onSelect={optionSelected} 
                defaultOption={option} 
            />        
        </>
    );
}
