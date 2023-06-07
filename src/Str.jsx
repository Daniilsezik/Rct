import React from 'react';

const Str = (props) => {

    return (
        <div className = "element">
            <div className="element__content">
                <b>{props.element.id}. {props.element.name}</b>
            </div>
        </div>
    );
};

export default Str;