import React from "react";

const Cartainferiores = (props) => {

    return (

        <div>
            <div className="card" style={{width: "17rem"}}>
                <img src={props.imagen} className="card-img-top" alt={props.nombre}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}{props.descripcion}</h5>
                        <a href={props.link} className="btn btn-primary">Vamos!</a>
                    </div>
            </div>
        </div>

    )

}
export default Cartainferiores;