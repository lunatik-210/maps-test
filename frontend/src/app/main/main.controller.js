
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

            this.$scope.$apply(() => {
                this.locations.push({
                    name: geoObj.properties.get('name'),
                    text: geoObj.properties.get('text'),
                    coordinates: geoObj.geometry.getCoordinates()
                });
            });
        });
        
        form.location = "";
    }

    removeMarker(index) {
        this.locations.splice(index, 1);
    }
}

export default MainController;
