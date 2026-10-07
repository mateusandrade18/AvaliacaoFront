const botao = document.getElementById("calcular");
botao.addEventListener("click", () => {
 const n1 = parseFloat(document.getElementById("num1").value);
 const n2 = parseFloat(document.getElementById("num2").value);
 if (isNaN(n1) || isNaN(n2)) {
   alert("Preencha os dois números.");
   return;
 }
 document.getElementById("soma").textContent = n1 + n2;
 document.getElementById("subtracao").textContent = n1 - n2;
 document.getElementById("multiplicacao").textContent = n1 * n2;
 document.getElementById("divisao").textContent =
   n2 === 0 ? "Não é possível dividir por zero" : (n1 / n2).toFixed(2);
});