// Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

let hour = 11;
let minute = 59;

function greetings(hour, minute) {
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        console.log("Hora ou minutos inválidos!");
        return;
    }

    let totalMinutes = hour * 60 + minute;

    if (totalMinutes < 720) {
        console.log("Bom dia");
    } else if (totalMinutes < 1080) {
        console.log("Boa tarde");
    } else {
        console.log("Boa noite");
    }
}

greetings(hour, minute);
