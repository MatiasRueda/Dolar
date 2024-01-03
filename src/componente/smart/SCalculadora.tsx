import { useState } from "react";
import DCalculadora from "../dumb/DCalculadora";
import DDolar from "../dumb/DDolar";
import { Dolar } from "../../type/type";
import useObtenerInformacion from "../../hook/useObtenerInformacion";

function SCalculadora(): JSX.Element {
    const [monto, setMonto] = useState<string>("");
    const AC: string = "AC";
    const MAXIMO_LARGO: number = 11;
    const CERO: number = 0;
    const PUNTO: string = ".";
    const numeros: (number | string)[] = [...Array<number | string>(10).keys()].slice(1);
    const dolares = useObtenerInformacion<Dolar[]>("https://dolarapi.com/v1/dolares", true, { suspense: true });

    const agregarNumero = (numero: number | string): void => {
        if (monto.length === MAXIMO_LARGO || (numero === PUNTO && monto.includes(".")))
            return; 
        setMonto(monto + numero.toString());
    }

    const sacarNumero = (): void => {
        setMonto(monto.slice(0, -1));
    }

    const calcularDolar = (dolar: number): number => {
        return Number((Number(monto) / dolar).toFixed(2));
    }

    const botones: JSX.Element[] = [...numeros, ...[PUNTO, CERO, AC]].map(
            (opcion: number | string) => <button key={opcion.toString()} 
                                                 className="numero"
                                                 onClick={() => {opcion === AC? sacarNumero() : 
                                                                                agregarNumero(opcion)}}>
                                                    {opcion.toString()}
                                        </button>)
    
    const opciones: JSX.Element[] = dolares.data? dolares.data.slice(0, 3).map(dolar => 
                                                         <DDolar key={dolar.nombre} 
                                                                 dolar={dolar}
                                                                 total={calcularDolar(dolar.compra)} />) : [];

    return (
        <DCalculadora numero={botones} 
                      monto={monto}
                      opciones={opciones}/>
    )
}

export default SCalculadora;