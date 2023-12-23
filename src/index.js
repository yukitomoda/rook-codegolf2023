import './sass/loader.scss';
import Pace from 'pace-js';
import 'destyle.css';
import './sass/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  Pace.start();
  navbar();
});

function navbar() {
  const burgers = document.querySelectorAll('.navbar-burger');
  burgers.forEach((burger) => {
    const targetId = burger.dataset.target;
    const target = document.getElementById(targetId);

    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  });
}
