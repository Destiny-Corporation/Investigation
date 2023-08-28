var usersList = document.getElementById("usersList");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var senha = document.getElementById("senha");
var Confirmarsenha = document.getElementById("Confirmarsenha");
var cadastrar = document.getElementById("cadastrar");

//Ao clicar no botão
cadastrar.addEventListener("click", function () {
  create(nome.value, email.value, telefone.value, senha.value);
});

function create(nome, email, telefone, senha) {
  var data = {
    nome: nome,
    email: email,
    telefone: telefone,
    senha: senha,
  };
  return firebase.database().ref().child("users").push(data);
}

firebase
  .database()
  .ref("users")
  .on("value", function (snapshot) {
    usersList.innerHTML = "";
    snapshot.forEach(function (item) {
      var li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          item.val().nome +
            "  " +
            item.val().email +
            "  " +
            item.val().telefone +
            "  " +
            item.val().senha
        )
      );
      usersList.appendChild(li);
      console.log(usersList);
    });
  });
