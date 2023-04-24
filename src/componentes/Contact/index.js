import { SiGmail } from 'react-icons/si'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'
const Form = () => {
    return (
        <div className="flex items-center justify-center bg-black h-full text-white text-center">
            <div className="grid justify-items-stretch">                
                <h2 className="text-3xl p-4">Contact me at:</h2>
                <div className="grid grid-cols-3 gap-12 p-10">
                    <a href="mailto:sarzibrena@gmail.com">
                        <SiGmail size={50}/>
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=5511942907649&text=Envie%20sua%20mensagem,%20e%20esclare%C3%A7a%20suas%20d%C3%BAvidas!'>
                        <BsWhatsapp size={50}/>
                    </a>
                    <a href='https://www.linkedin.com/in/brena-sarzi-573bb9206/'>
                        <BsLinkedin size={50}/>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Form
