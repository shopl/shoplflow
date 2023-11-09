import '@pages/newtab/index.css';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/newtab');
//
// function init() {
//   const appContainer = document.querySelector('#app-container');
//   if (!appContainer) {
//     throw new Error('Can not find #app-container');
//   }
//   attachTwindStyle(appContainer, document);
//   const root = createRoot(appContainer);
//
//   root.render(<Newtab />);
// }
//
// init();
