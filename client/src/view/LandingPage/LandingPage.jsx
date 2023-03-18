import React from 'react'
import { Link } from 'react-router-dom';
import style from './LandingPage.modules.css'

const LandingPage = () => {
    return (
        <div className={style.bodyLanding}>
         
         
        <div className={style.landinText1}>
          <h1 className={style.landingGo}>
          WELCOME TO POKEMON'S WORLD</h1>

         <div className={style.landingButton}>
            <Link  to="/home">
              <button>GO!</button>
            </Link>

            
            </div>

          {/* <video autoPlay muted loop className={style.video}>
           <source src={beach} type="video/mp4"></source>
          </video> */}

        
          
          </div>
          </div>
    )
}



export default LandingPage;