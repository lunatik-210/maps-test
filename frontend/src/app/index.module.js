import config from './index.config';
import routerConfig from './index.route';
import MainController from './main/main.controller';

import './components/ymaps/ymaps.module';

angular.module('frontend', ['ngAnimate', 'restangular', 'ui.router', 'mm.foundation', 'ymaps'])
  .config(config)
  .config(routerConfig)
  .controller('MainController', MainController);
