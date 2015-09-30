
class YMapModelService {
    constructor() {
        'ngInject';
    }

    init() {
        ymaps.ready(() => {
            this.create_map();
        });
    }

    create_map() {
        ymaps.geolocation.get().then((res) => {
            let position = res.geoObjects.position;

            this.map = new ymaps.Map("ymap", {
                center: position,
                zoom: 10,
                controls: ["searchControl", "zoomControl"]
            });
        }, (e) => {
            console.log(e);
        });
    }
}

export default YMapModelService;
