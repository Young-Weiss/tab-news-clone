function status(request, response) {
  response.status(200).json({resposta: "deu bom"});
}

export default status;
