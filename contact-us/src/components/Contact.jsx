import { useState } from 'react'
import React from 'react'


export default function Contact() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");

    const viaCallSubmit = () => {
        console.log(`I'm from via call`)
    }
    const viaSupport = () => {
        console.log(`I'm from via Support`)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setName(event.target[0].value)
        setEmail(event.target[1].value)
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        console.log(event.target[2].value)
    }


    return (

        <div className='form-view'>
            <div className="top-buttons">
                <button className="btn" onClick={viaSupport}>Via-support chat</button>
                <button className="btn" onClick={viaCallSubmit}>via call</button>
            </div>
            <button className="btn btn-mail">via Email</button>
            <form onSubmit={onSubmit}>
                <div className="form-inputs">
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="text">Text</label>
                    <textarea name="text" />
                </div>
                <button className="btn  submit">Submit</button>
            </form>
            {/* <div >{`${name} is my name and this is my ${email}`}</div> */}
        </div>
    )
}
