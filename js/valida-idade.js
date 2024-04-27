export default function maiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário deve ser maior de 18 anos para se cadastrar.');
    }
}


function validaIdade(data){
   const dataAtual = new Date();
   const idadeMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

   return dataAtual >= idadeMais18;
}
