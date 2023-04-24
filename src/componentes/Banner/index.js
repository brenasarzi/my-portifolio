import { RiCupFill } from 'react-icons/ri'

function Banner(props) {
    // JSX
    return(
        <div className="flex items-center justify-center  bg-black h-full text-white text-center">
            <div className="grid justify-items-stretch">
                <RiCupFill className="justify-self-center" size={50}/>
                <h1 className="text-3xl p-2">Hi! How are you?</h1>
                <h2 className="text-xl" >Since I got your attention, I'll tell you a little bit about myself. OK?</h2>
                <h3 className="text-lg p-4">Let's go!</h3>
                <button onClick={props.button} className="justify-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Banner