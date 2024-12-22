import React from 'react'
import classNames from 'classnames';




function Button({bgcolor, height, border , width, textColor, label, margin, onClick }) {
  return (
    <button className={classNames(bgcolor, height, border , width, textColor, label, margin, onClick)}>{label}</button>
    )
}

export default Button