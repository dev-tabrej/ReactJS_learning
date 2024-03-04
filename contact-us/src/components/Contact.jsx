import React from 'react'

export default function Contact() {
    return (
        <div className='form-view'>
            <div className="top-buttons">
                <button className="btn">Via-support chat</button>
                <button className="btn">via call</button>
            </div>
            <form>
                <label htmlFor="Name">Name</label>
                <input type="text" />
                <label htmlFor="Email">Email</label>
                <input type="text" />
                <textarea name="comments" id="" cols="30" rows="10">text</textarea>
                <button className="btn  submit">Submit</button>
            </form>
        </div>
    )
}
