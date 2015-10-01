
class MainController {
    constructor($scope, yMapModel) {
        'ngInject';

        this.locations = [];
        this.$scope = $scope;
        this.yMapModel = yMapModel;
    }

    getRoute() {
        let route = [];
        for(let obj of this.locations)
        {
            route.push(obj.name);
        }
        return route;
    }

    addMarker(form) {
        ymaps.geocode(form.location).then(
            (res) => {
                let geoObj = res.geoObjects.get(0);
                if(!geoObj)
                {
                    console.log('ERR: location is not found!');
                    return;
                }

                this.$scope.$apply(
                    () => {
                        this.locations.push({
                            name: geoObj.properties.get('name'),
                            text: geoObj.properties.get('text'),
                            coordinates: geoObj.geometry.getCoordinates()
                        });
                    }
                );

                this.yMapModel.updateRoute(this.getRoute());
            }
        );
        
        form.location = "";
    }

    removeMarker(index) {
        this.locations.splice(index, 1);

        this.yMapModel.updateRoute(this.getRoute());
    }

    onChangeLocations() {
        this.yMapModel.updateRoute(this.getRoute());
    }
}

export default MainController;
