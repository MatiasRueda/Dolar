import { Dolar } from "../../type/type";

function DDolar(props: { dolar: Dolar , total: number }): JSX.Element {
    return (
        <div className="cont-opcion" >
            <p className="tipo">Dolar {props.dolar.nombre}</p>
            <p className="total">${props.total}</p>
            <p className="precio">${props.dolar.compra.toString()}</p>
        </div>
    )
}

export default DDolar;