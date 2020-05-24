import React from 'react'
/**
 * 
 * @param {hoặc có thể thay bằng
 * export default function Banner(props) {
      return (
        <div className="banner">
          <h1>{props.title}</h1>
          <div></div>
          <p>{props.subtitle}</p>
          {props.children}
        </div>
      )
    }}   
 */
export default function Banner({children, title, subtitle}) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}
