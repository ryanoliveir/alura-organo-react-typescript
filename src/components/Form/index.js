import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import './Form.css'


const Form = () => {

    const teams = [
        "",
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"

    ]

    const onSave = (event) =>{
        event.preventDefault();
        console.log("Form submission")
    }

    return (
        <section className="form-section">
            <form onSubmit={onSave}>
                <h1>Preencha os dados para cirar o card do colaborador</h1>
                <Input label="Nome" placeholder="Digite seu nome" isRequired={true} />
                <Input label="Cargo" placeholder="Digite seu cargo" isRequired={true}/>
                <Input label="Image" placeholder="Informe o endereço da imagem" />
                <Select label="Times" items={teams} isRequired={true}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;
