/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import MainController from './main/main.controller';

angular.module('frontend', ['ngAnimate', 'restangular', 'ui.router', 'mm.foundation'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  
  .config(config)
  .config(routerConfig)
  .controller('MainController', MainController);
