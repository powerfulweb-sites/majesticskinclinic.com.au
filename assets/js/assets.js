// import './vendors.js';
// JS ASSETS
//import { stickyCollapse } from './on-scroll/index';
import { navbarTogglerSpin } from './toggler-icon-spin/index';

// stickyCollapse({
//   distance: 130,
//   // parentId: 'js-navParent',
//   // collapseClass: 'is-collapsed',
// });

// topNav({
// distance: 300,
// parentId: 'js-topNav',
// hiddenClass: 'is-hidden',
// });

// see index.scss for assets scss import

navbarTogglerSpin({
  // defaults
  navbarTogglerId: 'js-navbarToggler',
  expandedClass: 'is-expanded',
});
