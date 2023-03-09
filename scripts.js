let lista = [
    {
        Nome: "João",
        Email: "joao@gmail.com",
        Numero:"(85) 99999-9999",
        Cidade: "Fortaleza",
    },
    {
        Nome: "Felipe",
        Email: "felipe@gmail.com",
        Numero:"(85) 99999-9999",
        Cidade: "Caucai",
    },
    {
        Nome: "Juan",
        Email: "juan@gmail.com",
        Numero:"(85) 99999-9999",
        Cidade: "Aquiraz",
    },
    {
        Nome: "Gleidsom",
        Email: "gleidsom@gmail.com",
        Numero:"(85) 99999-9999",
        Cidade: "Eusebio",
    }
]; 
function listAluno(){
    let tabela = document.querySelector("#tabela");
    document.innerHTML = " "
    for(let i = 0; i < lista.length;i++){
        tabela.innerHTML += `<tr> 
                            <td>${lista[i].Nome}</td>
                            <td>${lista[i].Email}</td>
                            <td>${lista[i].Numero}</td>
                            <td>${lista[i].Cidade}</td>
                            <td> 
                             <button class="btn btn-warning">Editar</button>
                             <button class="btn btn-danger">Deletar</button>
                            </tr>`
    }
} listAluno()
function addAluno()
{
    event.preventDefault();
    let aluno = {
        Nome: nome.value,
        Email: email.value,
        Telefone: telefone.value,
        Cidade: cidade.value,
    }
    lista.push(aluno)
} listAluno()