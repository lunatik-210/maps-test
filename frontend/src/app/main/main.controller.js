
class MainController {
    constructor() {
        'ngInject';

        this.locations = [
            {name: 'location1'}, 
            {name: 'location2'}, 
            {name: 'location3'}, 
            {name: 'location4'}, 
            {name: 'location5'}
        ];
    }

    addMarker(form) {
        this.locations.push({name: form.location});
        form.location = "";
    }

    removeMarker(index) {
        this.locations.splice(index, 1);
    }
}

export default MainController;
