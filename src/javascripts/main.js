import '../styles/main.scss';
// import SeedData from './helpers/data/messageData';
import themes from './components/modes';
import container from './components/options-container';
import multipleUsers from './components/multipleUsers';

const init = () => {
  container.containerDom();
  themes.themeDom();
  themes.themeChange();
  multipleUsers.dropDown();
};

init();
