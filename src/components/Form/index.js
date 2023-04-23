import Input from '../Input'
import './Form.css'


const Form = () => {
    return (
        <section className="form-section">
            <form>
                <h1>Preencha os dados para cirar o card do colaborador</h1>
                <Input label="Nome" placeholder="Digite seu nome" />
                <Input label="Cargo" placeholder="Digite seu cargo" />
                <Input label="Image" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    )
}


export default Form;
