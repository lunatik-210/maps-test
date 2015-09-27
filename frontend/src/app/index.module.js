import config from './index.config';
import routerConfig from './index.route';
import MainController from './main/main.controller';

angular.module('frontend', ['ngAnimate', 'restangular', 'ui.router', 'mm.foundation', 'yaMap'])
  .config(config)
  .config(routerConfig)
  .controller('MainController', MainController);
