
class YMapDirective {
    constructor() {
        'ngInject';

        let definition = {
            template: "<div id='ymap' class='ymap'></div>",
            scope: {},
            restrict: 'E',
            replace: true,
            controller: YMapController
        };

        return definition;
    }
}

class YMapController {
    constructor(yMapModel) {
        'ngInject';

        yMapModel.init();
    }
}

export default YMapDirective;
