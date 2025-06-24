document.addEventListener("DOMContentLoaded", () => {
  const amount = document.getElementById("amount");
  const term = document.getElementById("term");
  const rate = document.getElementById("rate");
  const repayment = document.getElementById("reembolso");
  const interest = document.getElementById("interesse");
  const btnRepay = document.getElementById("btnRepayment");

  const calcularHipoteca = (financiamento, jurosAnual, prazoAnos) => {
    const prazoAnual = prazoAnos * 12;
    const juros = jurosAnual / 100 / 12;
    const fator = Math.pow(1 + juros, prazoAnual);
    const parcela = financiamento * ((juros * fator) / (fator - 1));
    const totalPago = parcela * prazoAnual;

    return {
      parcela: parcela.toFixed(2),
      total: totalPago.toFixed(2),
    };
  };

  btnRepay.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      amount.value &&
      term.value &&
      rate.value &&
      repayment.value &&
      interest.value
    ) {
      const valor = parseFloat(amount.value);
      const anos = parseFloat(term.value);
      const juros = parseFloat(rate.value);

      const resultado = calcularHipoteca(valor, anos, juros);

      const result = document.getElementById("result");
      result.innerHTML = ` ${parseFloat(resultado.parcela).toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )}`;

      const totalTerm = document.getElementById("total");
      totalTerm.innerHTML = `${parseFloat(resultado.total).toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )}`;
    } else {
      alert("Preencha os campos obrigatórios");
    }
  });
});
