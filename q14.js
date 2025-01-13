let continuar = true;

while (continuar) {
  let altura = Number(prompt("Digite a sua altura em metros (ex: 1.75):"));
  let peso = Number(prompt("Digite o seu peso em kg (ex: 70):"));

  if (altura > 0 && peso > 0) {
    let imc = peso / (altura * altura);

    console.log("Seu IMC é: " + imc.toFixed(2));

    switch (true) {
      case imc < 18.5:
        console.log("Classificação: Abaixo do peso.");
        break;
      case imc >= 18.5 && imc < 24.9:
        console.log("Classificação: Peso normal.");
        break;
      case imc >= 25 && imc < 29.9:
        console.log("Classificação: Sobrepeso.");
        break;
      case imc >= 30 && imc < 34.9:
        console.log("Classificação: Obesidade grau I.");
        break;
      case imc >= 35 && imc < 39.9:
        console.log("Classificação: Obesidade grau II.");
        break;
      case imc >= 40:
        console.log("Classificação: Obesidade grau III (mórbida).");
        break;
      default:
        console.log("Erro na classificação do IMC.");
    }
  } else {
    console.log("Altura e peso devem ser números positivos.");
  }

  // Pergunta ao usuário se deseja repetir
  continuar = confirm("Deseja calcular outro IMC?");
}