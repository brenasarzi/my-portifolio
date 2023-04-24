import { BsGearFill } from 'react-icons/bs'

function Presentation(props) {
    return (
        <div className="flex items-center justify-center bg-black h-full text-white text-center">
            <div className="grid justify-items-stretch">
                <BsGearFill  className="justify-self-center" size={50} />
                <h1 className='text-2xl p-4'>Hello! My name is Brena and I'm a web developer</h1>
                <h2 className='text-xl'>Here are some of my skills.</h2>

                <div className='grid grid-cols-5 gap-12 p-10'>
                <div className='card'>
                    <img className='w-28' src="/imagens/html.png" alt='html'/>
                </div>
                <div className='card'>
                    <img className='w-28' src="/imagens/css.png" alt='css'/>

                </div>
                <div className='card '>
                    <img className='rounded-full w-28' src="/imagens/js.png" alt='js'/>
                </div>
                <div className='card'>
                    <img className='w-28' src="/imagens/react.png" alt='react'/>

                </div>
                <div className='card'>
                    <img className='w-28' src="/imagens/typescript.png" alt='typescript'/>
                </div>
                  
                </div>
                <button onClick={props.button} className="justify-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </button>
            </div>
        </div>
    )
}
export default Presentation