import "./Banner.css"
import { RiCupFill } from 'react-icons/ri'

function Banner() {
    // JSX
    return(
        <header className="banner">
            <div className="banner-img">
                <div className="text-banner">
                    <div class="steam" id="steam1"> </div>
                    <div class="steam" id="steam2"> </div>
                    <div class="steam" id="steam3"> </div>
                    <div class="steam" id="steam4"> </div>
                    <RiCupFill size={50}/>
                    <h1>Hi! How are you?</h1>
                    <h2>Since I got your attention, I'll tell you a little bit about myself. OK?</h2>
                    <h3>Let's go!</h3>
                    <button className="button-banner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Banner