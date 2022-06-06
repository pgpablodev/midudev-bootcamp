const Mensaje = (params) => {
    const fecha = new Date();
    fecha.setMinutes(fecha.getMinutes() - fecha.getTimezoneOffset());
    return(
    <div>
        <div>
        Mensaje: {fecha.toUTCString()}      
        </div>
        <div style={{color: params.color}}>
            Desfase horario respecto a Greenwich: {params.offset} horas.
        </div>
    </div>
    );
}

export default Mensaje;