function Nome(props) {
  let estiloIcons={
    width:"30px%",
    height:"30px",
  }

  let estilo = {
    paddingTop:"50px"
  }

  return (
    <div style={estilo}>
      <h1>{props.nome}</h1>
        <a href="https://www.linkedin.com/in/augusto-marley-028582100/" target="blank"><img style={estiloIcons} src="https://cdn-icons-png.flaticon.com/512/142/142369.png"  /></a>
        <a href="https://www.instagram.com/augusto.marley/" target="blank"><img style={estiloIcons} src="https://cdn-icons-png.flaticon.com/512/142/142380.png"/></a>
    </div>
  );
}

export default Nome;
