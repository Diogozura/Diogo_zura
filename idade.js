function idade(ano_aniversario, mes_aniversario, dia_aniversario) {

    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;

}

var minhaIdade = parseInt(idade(2003, 11, 09))
var bota = document.querySelector('#bio')
// bota.innerHTML = minhaIdade  
bota.innerHTML = (`Hi, I’m Diogo Zura, I’m ${minhaIdade} years old, I really like technology and I’m studying to become a front end developer, I’ve already made some websites for my school.`)