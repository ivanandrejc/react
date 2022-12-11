import {useState, useEffect} from 'react'
// import './input.css'


export const Input = () => {   

    const inputHandler = (event)=>{
        event.stopPropagation()
        let vocalesArray = ['a','e','i','o','u']
        if (vocalesArray.includes(event.key.toLowerCase())) {
            event.preventDefault()            
        }
        console.log(event.key)     
    }

    return (
        <div className="box" >
            <div className="border border-5 border-warning w-50" >
                <input 
                    className="m-5" 
                    // onKeyDown={ inputHandler } 
                    // onClick={  inputHandler } // props
                    onKeyDown={  inputHandler } // props

                    type="text" 
                    name="nombre" 
                    id="i"
                />
            </div>
        </div>
    )
}
