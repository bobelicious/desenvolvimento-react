import img from './rosto.jpeg';

function Foto(){


   let estilo ={
        height:"200px",
        width:"200px",
        borderRadius:"500px",
    };

    return(
        <div>
          <img style={estilo} src={img} />
        </div>
    ) 
}

export default Foto;