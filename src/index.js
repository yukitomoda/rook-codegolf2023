import './sass/loader.scss';
import Pace from 'pace-js';
import 'destyle.css';
import './sass/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  Pace.start();
  navbar();
  tabs();
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

function tabs() {
  const tabGroups = document.querySelectorAll('.tabs');
  tabGroups.forEach((group) => {
    const tabs = group.querySelectorAll('li');
    const groupId = group.dataset.tabGroup;

    tabs.forEach((tab) => {
      const tabId = tab.dataset.tabId;
      tab.addEventListener('click', () => {
        update(groupId, tabId);
      });

      if (tab.classList.contains('is-active')) {
        update(groupId, tabId);
      }
    });
  });

  function update(groupId, tabId) {
    const tabs = document.querySelectorAll(`.tabs[data-tab-group=${groupId}] li`);
    tabs.forEach((tab) => {
      if (tabId === tab.dataset.tabId) {
        tab.classList.add('is-active');
      } else {
        tab.classList.remove('is-active');
      }
    });

    const panes = document.querySelectorAll(`.tab-panes[data-tab-group=${groupId}] .tab-pane`);
    panes.forEach((pane) => {
      if (tabId === pane.dataset.tabId) {
        pane.classList.add('is-active');
      } else {
        pane.classList.remove('is-active');
      }
    });
  }
}
