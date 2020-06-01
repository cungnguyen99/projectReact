import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context/Context'
import Title from '../components/Title'
const getUnique=(items, value)=>{
  return [...new Set(items.map(item=>item[value]))]
}
export default function RoomFilter({rooms}) {
  //Xem bài 36 coder để biết sd useContext 
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breackfast,
    pets
  }=context

  //lấy hết tất cả các loại xe
  let types=getUnique(rooms, "type")

  //thêm một lựa chọn 'all' vào mảng
  types=['all', ...types]

  //lấy ra đưa vào option

  types=types.map((item, index)=>{
    return (
      <option value={item} key={index}>{item}</option>
    )
  })
  return (
    <section className="filter-container">
        <Title title="search rooms"/>
        <form className="filter-form">
          <div className='form-group'>
            <label htmlFor="type">car type </label>
            <select 
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}>
                {
                  types
                }
              </select>
          </div>
        </form>
    </section>
  )
}
