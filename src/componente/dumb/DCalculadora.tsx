import "../../estilo/Calculadora.css";

function DCalculadora(props: { numero: JSX.Element[] , monto: string, opciones: JSX.Element[] }): JSX.Element {
    return (
        <section className="calculadora">
            <div className="cont-numeros">
                {props.numero}
            </div>
            <div className="cont-cuentas">
                <h2>Monto en pesos ARS</h2>
                <div className="cont-monto">
                    {props.monto}
                </div>
                <div className="cont-opciones">
                    {props.opciones}
                </div>
            </div>
        </section>
    )
}

export default DCalculadora;