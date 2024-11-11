import './notes_group.css'
import notes_main_bg_img from '../../assets/notes_main_bg_img.png';
import encrpt_lock from '../../assets/encrpt_lock.png';

const Notes_group = () =>{
    return (
        <>
    
        <div id="container">
            <div id="notes_group_main_div"> 
                    

                    <img className='notes_main_bg_img' src={notes_main_bg_img} alt='background_notes-taking-app_image'/>
                    <h1 className='title'>Pocket Notes</h1>
                    <div className='narration'>Send and receive messages without keeping your phone online.
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                    </div>
                  
            </div>
            <p className='encrpt-msg'><img className='lock' src={encrpt_lock} alt='lock-img'/> end-to-end encrypted</p>
        </div>
        
        
        </>
    )   

}

export default Notes_group;