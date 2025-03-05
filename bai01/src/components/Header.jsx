// Header.jsx
import '../App.css'  // Optional, but works if you want specific styles here
export default function Header() {

    return (
      <>
        <div className="header">
          <div><img src="../src/img/logo.png" alt="Logo" width='90%' /></div>
          <div>
          <input type="text" placeholder="cakescascsa" id='text'/>
        </div>
        <div className="menu">
          <div>What to cook</div>
          <div>Recipes</div>
          <div>Ingredients</div>
          <div>Occasions</div>
          <div>About Us</div>
        </div>
        <div>
            <button type="button" class="button">Your Recipe Box</button>
        </div>
        <div>
            <img src="../src/img/user.png" alt="" id='user'/>
        </div>
        </div>
      
      </>
    )
  }
  