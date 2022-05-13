function validacao(){
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";


    let cpf = document.getElementById("cpf_digitado").value;

    let resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao)
    {
        document.getElementById("success").style.display = "block";
    }
    else
    {
        document.getElementById("error").style.display = "block";
    }
}

function validaCPF(cpf)
{
    if (cpf.length != 11)
    {
        return false;
    }
    else
    {
        let soma = 0;
        let numeros = cpf.substring(0,9);
        let digitos = cpf.substring(9);


        for(let i = 10; i > 1; i--)
        {
            soma += numeros.charAt(10 - i) * i
        }

        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação do primeiro digito
        if (resultado != digitos.charAt(0))
        {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0,10);

        for(let i = 11; i > 1; i--)
        {
            soma += numeros.charAt(11 - i) * i;
        }

        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);

        //validação do segundo digito
        if (resultado != digitos.charAt(1))
        {
            return false;
        }

        return true;

    }

}

