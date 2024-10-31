import { menu_list } from '../../assets/assets';
import './Exploremenu.css'
const Explore = ({category, setCategory}) => {
  return (
    <>
      <div className='explore-menu' id='explore-menu'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredient and culinary expertise. Our delicious meal at a time
        </p>
        <div className='explore-menu-list'>
          {menu_list.map((item, index) => {
            return (
              <div onClick={() =>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""}  src={item.menu_image} alt=""  />
                <p>{ item.menu_name}</p>
              </div>
              )
            })}
        </div>
        <hr/>
      </div>
    </>
  )
}

export default Explore;