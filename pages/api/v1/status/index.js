function status(request, response) {
  response.status(200).json({ status: "Tudo Certo :)" });
}

export default status;
