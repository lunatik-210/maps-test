
class MainController {
    constructor ($scope) {
        'ngInject';

        this.locations = [
            {name: 'location1'}, 
            {name: 'location2'}, 
            {name: 'location3'}, 
            {name: 'location4'}, 
            {name: 'location5'}
        ];

        this.list1 = [
          { 'title': 'N', 'drag': true },
          { 'title': 'L', 'drag': true },
          { 'title': 'I', 'drag': true },
          { 'title': 'I', 'drag': true },
          { 'title': 'E', 'drag': true },
          { 'title': 'N', 'drag': true }
        ];

        $scope.$watch(this.locations, () => {
            console.log(this.locations);
        });

    }
}

export default MainController;
