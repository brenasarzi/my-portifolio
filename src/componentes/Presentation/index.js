import './Presentation.css'

function Presentation() {
    return (
        <div className="apresentacao">
            <h1>Hello! My name is Brena and I'm a web developer</h1>
            <h2>Here are some of my skills.</h2>
            <div className='cards-skills'>
                <div className='card'>
                    <img src="/imagens/html.png" />
                </div>
                <div className='card'>
                    <img src="/imagens/css.png" />

                </div>
                <div className='card'>
                    <img src="/imagens/js.png" />

                </div>
                <div className='card'>
                    <img src="/imagens/react.png" />

                </div>
                <div className='card'>
                    <img src="/imagens/typescript.png" />

                </div>
            </div>
        </div>
    )
}
export default Presentation