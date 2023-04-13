import React from 'react'
import zurag from '../../assets/photo_2023-04-13_11-17-30.jpg'
import Menu from '../menu'
const SideNav = () => {
    return (
      <div className="w-[250px] h-[100vh] shadow-2xl">
        <div className="w-full pt-[30px] flex justify-center">
          <img src={zurag} className="w-[200px]" alt="" />
        </div>
        <div className='mt-[20px]'>
          <Menu title="Home" link='/' />
          <Menu title="Create" link='/create' />
        </div>
      </div>
    );
}
export default SideNav