import React from 'react'
/**
 * Tạo một component Title vì sử dụng lại 2 lần ở trang home. 1 cái là Service 1 cái là featured rooms
 * tạo thế này nếu ta dùng nó ở trang khác thì cũng dùng luôn được
 * @param {*} param0 
 */
export default function Title({title}) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div/>
    </div>
  )
}
