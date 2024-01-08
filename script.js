function calcularCedulas(valor) {
    const cedulasDisponiveis = [50, 10, 5, 1];
    const resultado = {};

    for (const cedula of cedulasDisponiveis) {
        const quantidade = Math.floor(valor / cedula);
        if (quantidade > 0) {
            resultado[`GC$ ${cedula},00`] = quantidade;
            valor %= cedula;
        }
    }

    return resultado;
}

const valorDesejado = parseInt(prompt("Digite o valor desejado em GrowCoins:"));
const resultadoCedulas = calcularCedulas(valorDesejado);

console.log("Resultado:");
for (const cedula in resultadoCedulas) {
    console.log(`${cedula} -> ${resultadoCedulas[cedula]}`);
}
