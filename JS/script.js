'use strict'; //строгий режим

// функция для изменения цены первого тарифа
function isChecked0() {
  if (document.getElementById('check').checked) {
    document.getElementById('price0').textContent = `${
      +document.getElementById('price0').innerHTML * 11
    } `;
    document.getElementById('dur0').textContent = '/yearly';
  } else {
    document.getElementById('price0').textContent = `${
      document.getElementById('price0').innerHTML / 11
    }`;
    document.getElementById('dur0').textContent = '/monthly';
  }
}
// функция для изменения цены второго тарифа

function isChecked1() {
  if (document.getElementById('check').checked) {
    document.getElementById('price1').textContent = `${
      +document.getElementById('price1').innerHTML * 11
    } `;
    document.getElementById('dur1').textContent = '/yearly';
  } else {
    document.getElementById('price1').textContent = `${
      document.getElementById('price1').innerHTML / 11
    }`;
    document.getElementById('dur1').textContent = '/monthly';
  }
}
// функция для изменения цены третьего тарифа

function isChecked2() {
  if (document.getElementById('check').checked) {
    document.getElementById('price2').textContent = `${
      +document.getElementById('price2').innerHTML * 11
    } `;
    document.getElementById('dur2').textContent = '/yearly';
  } else {
    document.getElementById('price2').textContent = `${
      document.getElementById('price2').innerHTML / 11
    }`;
    document.getElementById('dur2').textContent = '/monthly';
  }
}

// функция для группирования всех функций выше
function isChecked() {
  isChecked0();
  isChecked1();
  isChecked2();
  document.getElementById('test').classList.toggle('active');
}

//Скрипт для табов

const tabsBtn = document.querySelectorAll('.nav__btn'); //Переменная с коллекцией кнопок

const tabsItems = document.querySelectorAll('.tabs__content-item');

tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('.active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
});

document.querySelectorAll('.nav__btn')[0].click(); // строчка для назначения с какой вкладки начинать
