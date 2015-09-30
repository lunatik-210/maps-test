
class MainController {
    constructor($scope) {
        'ngInject';

        this.locations = [];
        this.$scope = $scope;
    }

    addMarker(form) {
        ymaps.geocode(form.location).then((res) => {
            let geoObj = res.geoObjects.get(0);
            if(!geoObj)
            {
                console.log('ERR: location is not found!');
                return;
            }

            this.locations.push({
                name: geoObj.properties.get('name'),
                text: geoObj.properties.get('text'),
                coordinates: geoObj.geometry.getCoordinates()
            });

            this.$scope.$apply();
        });
        
        form.location = "";
    }

    removeMarker(index) {
        this.locations.splice(index, 1);
    }
}

export default MainController;
