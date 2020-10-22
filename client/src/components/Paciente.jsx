import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPacientes } from '../redux/actions'


const Paciente = (props) => {
        
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPacientes());
    }, []);
    
    return (
        <div>Aca funciona el paciente</div>
    )
}
export default Paciente;