import React from 'react'

/**
 * 
 * @param {*} param0 
 * Truyền vào function 2 biến children hero do cái header mỗi page một ảnh bìa khác nhau nên phải
 * truyền tên class vào. Ví dụ ở trang Home do không truyền gì vào thì mặc định sẽ có class defaultHero
 * mà class default có css background: url("./images/defaultBcg.jpeg") center/cover no-repeat nên
 * ảnh bìa là ảnh defaultBcg. còn ở trang rooms lại truyền hero vào là roomsHero nên có css 
 * background-image: url("./images/room-2.jpeg") nên ảnh bìa sẽ là room-2
 */
//children: một thuộc tính có sẵn của props. Xem bài 18 coder là hiểu.<div> adb vchdb</div>
//thì phần ở giữa của 2 thẻ div ('abc vchdb props') là props children.
//Ỏ bên kia phần trong Hero chính là props children. hay nói cách khác chính 
//children của Hero chính là component Banner
export default function Hero({children, hero}) {
  return (
    <header className={hero}>
      {children}
    </header>
  )
}
Hero.defaultProps={
  hero:'defaultHero'
}
