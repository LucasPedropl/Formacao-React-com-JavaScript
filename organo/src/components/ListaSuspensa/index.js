import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    props.itens
    return(
        <div>
            <label>{props.label}</label>
            <select>
                <option>???</option>
            </select>
        </div>
    )
}

export default ListaSuspensa