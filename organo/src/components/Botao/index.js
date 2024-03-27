import './Botao.css'

const Botao = (props) => {
    return (
    <butto className='Botao'>
        {props.children}
    </butto>)
}

export default Botao