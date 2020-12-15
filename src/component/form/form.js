import "./form.scss";
import React from "react";

const Form = ({action, name, title}) => {
    return (
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <h4>Введите названи {name}:</h4>
            <div className="form-group">
                <input type="text" value={title} onChange={action} placeholder={`Введите название ${name}`} />
            </div>
        </form>

    )
}

export default Form;