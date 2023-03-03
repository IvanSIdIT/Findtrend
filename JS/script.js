function isChecked0() {
  if (document.getElementById('check').checked) {
    document.getElementById('price0').textContent = `${
      +document.getElementById('price0').innerHTML * 12
    } `;
    document.getElementById('dur0').textContent = '/yearly';
  } else {
    document.getElementById('price0').textContent = `${
      document.getElementById('price0').innerHTML / 12
    }`;
    document.getElementById('dur0').textContent = '/monthly';
  }
}

function isChecked1() {
  if (document.getElementById('check').checked) {
    document.getElementById('price1').textContent = `${
      +document.getElementById('price1').innerHTML * 12
    } `;
    document.getElementById('dur1').textContent = '/yearly';
  } else {
    document.getElementById('price1').textContent = `${
      document.getElementById('price1').innerHTML / 12
    }`;
    document.getElementById('dur1').textContent = '/monthly';
  }
}

function isChecked2() {
  if (document.getElementById('check').checked) {
    document.getElementById('price2').textContent = `${
      +document.getElementById('price2').innerHTML * 12
    } `;
    document.getElementById('dur2').textContent = '/yearly';
  } else {
    document.getElementById('price2').textContent = `${
      document.getElementById('price2').innerHTML / 12
    }`;
    document.getElementById('dur2').textContent = '/monthly';
  }
}

function isChecked() {
  isChecked0();
  isChecked1();
  isChecked2();
  document.getElementById('test').classList.toggle('active');
}

// function isChecked() {
//   document.getElementById('test').classList.toggle('active');
//   if (document.getElementById('check').checked) {
//     document.querySelectorAll('.price').textContent = `${
//       +document.querySelectorAll('.price').innerHTML * 12
//     } `;
//   } else {
//     document.querySelectorAll('.price').textContent = `${
//       document.querySelectorAll('.price').innerHTML / 12
//     }`;
//   }
// }
