import YMapDirective from './ymaps.directive';
import YMapModelService from './ymaps.service';

angular.module('ymaps', [])
    .directive('yMap', () => new YMapDirective())
    .service('yMapModel', YMapModelService);
