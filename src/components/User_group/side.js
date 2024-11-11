import './user_group.css'
import add_btn_img from '../../assets/add_btn_img.png'
import  { useRef, useState } from 'react';


const User_group = () =>{
    const [isScrollVisible, setIsScrollVisible] = useState(false);
    const scrollableContainerRef = useRef(null);
  
    const handleContainerClick = () => {
      setIsScrollVisible(true);
    };
  
    const handleContainerBlur = () => {
      setIsScrollVisible(false);
    };
  
    return(
        <>
        
            <div id="user_group_main_div">
                <h4 className='headline'>Pocket Notes</h4>
                <div id="list-wrapper scrollable-container" 
                ref={scrollableContainerRef}
                tabIndex={0} // Allows container to receive focus
                onClick={handleContainerClick}
                onBlur={handleContainerBlur}
                style={{
                overflowY: isScrollVisible ? 'auto' : 'hidden',
                maxHeight: '550px', 
                
                }}>
                <ul className='user-list'>
                   <li className='li'><span>IN</span> list 2 </li>

                   
                </ul>
                </div>

                  <img className='add_btn' src={add_btn_img} alt='add-btn'/>
            </div>
        </>
    )
}

export default User_group;