'use strict'; //строгий режим.

function isChecked() {
  const prices = document.querySelectorAll('.testo');
  const durations = document.querySelectorAll('.type__duration');

  durations.forEach(el => {
    if (document.getElementById('check').checked) {
      el.textContent = '/yearly';
    } else {
      el.textContent = '/monthly';
    }
  });

  prices.forEach(el => {
    if (document.getElementById('check').checked) {
      el.textContent = `${+el.innerHTML * 11} `;
    } else {
      el.textContent = `${el.innerHTML / 11}`;
    }
  });

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
