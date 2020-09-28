import React from 'react'

const Field = ({...props}) => {
  const Component = props.componentType === 'textarea' ? 'textarea' : 'input'
  const fieldType = props.fieldType || 'text'

  return (
    <div className={props.className}>
      <label htmlFor={ props.name }>{ props.label }</label>
      <Component
        ref={props.register}
        name={ props.name }
        id={props.name}
        type={fieldType}
        defaultValue={props.defaultValue}
      />
      {props.errors && props.errors[props.name] && <span style={{color: 'red'}}>{props.errors[props.name].message}</span>}
    </div>
  )
}

export default Field
