import React from 'react'
import './Form/Form.css'
const Form = () => {
    return (
        <div className="form">
            <div className="block">
                <div className="Next">
                    Name
                </div>
                <input type="text"/>
            </div>
            <div className="block">
            <div className="Next">
                    Email
                </div>
                <input type="text"/>
            </div>
            <div className="block">
            <div className="Next">
                    Company name
                </div>
                <input type="text"/>
            </div>
            <div className="block">
            <div className="Next">
                    Phone number
                </div>
            </div>
        </div>
    )
}

export default Form