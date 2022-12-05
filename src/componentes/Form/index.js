import CampoTexto from "../CamposTexto"
import "./Form.css"

const Form = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Any questions? Contact</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Email" placeholder="Digite seu email"/>
                <CampoTexto label="Dúvida" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form
