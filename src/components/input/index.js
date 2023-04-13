import React from 'react'


const Input = (props) => <input onChange={props.valueInput} className='border-[1px] border-[#777] outline-none rounded-[15px] px-[15px] py-[10px]' type={props.type} placeholder={props.placeholder}/>


export default Input