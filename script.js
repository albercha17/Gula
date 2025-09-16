let pedido = [];
let total = 0;

function agregarAlPedido(item) {
  pedido.push(item);
  const lista = document.getElementById('lista-pedido');
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = item;
  lista.appendChild(nuevoItem);

  if (item === 'Clásica') total += 5;
  if (item === 'Doble Carne') total += 7;
  if (item === 'Vegana') total += 6;

  document.getElementById('total').textContent = total;
}

function confirmarPedido() {
  alert('¡Gracias por tu pedido! 🍔');
  pedido = [];
  total = 0;
  document.getElementById('lista-pedido').innerHTML = '';
  document.getElementById('total').textContent = total;
}
