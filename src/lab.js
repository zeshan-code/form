import React, {useState} from "react";
import "./App.css";

export default App() {

const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsLetter: true
})

function handleChange(event){
    const {name,type,checked,value}= event.target
    setFormData(prevformData => ({
         ...prevformData, [name]: type===checkbox? checked: value
        }
    )

    )
}

function handleSubmit(event){
    event.preventDefault()
    if (formData.password===formData.passwordConfirm){
        console.log("" logged in")
    }else{
        console.log(" passwords don't match") 
        return
    }
    if(formData.joinedNewsLetter){
        console.log("Thanks for signing up for our newsletter!")
    }
}



    return(
        <div>
        <form onSubmit={handleSubmit}>

        <input 
        type:"email"
        placeholder:"Enter Your email"
        name:"email"
        value:{formData.email}
        onChange:{handleChange}
        />

        <input 
        type:"password"
        placeholder:"Enter Your password"
        name:"password"
        value:{formData.password}
        onChange:{handleChange}
        />

        <input 
        type:"password"
        placeholder:"Confirm Your password"
        name:"passwordConfirm"
        value:{formData.passwordConfirm}
        onChange:{handleChange}
        />

        <input 
        type:"checkbox"
        id:"ckekki"
        name:"email"
        checked:{formData.joinedNewsLetter}
        onChange:{handleChange}
        />
        <label htmlFor="ckekki"> I want to join the newsletter </label>
        <button>Signup</button>
        
        </form>
        </div>
    )
}