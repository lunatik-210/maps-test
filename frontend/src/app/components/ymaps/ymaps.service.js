
class YMapModelService {
    constructor($rootScope) {
        'ngInject';

        this.$rootScope = $rootScope;
    }

    init() {
        ymaps.ready(() => {
            this.createMap();
        });
    }

    createMap() {
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

    updateRoute(locations) {
        if(this.map.geoObjects.getLength() !== 0)
        {
            this.map.geoObjects.removeAll();
        }

        ymaps.route(locations).then(
            (route) => {
                this.map.geoObjects.add(route);

                route.editor.start({addViaPoints: false, editViaPoints: false});

                route.editor.events.add('routeupdate', (event) => {
                    if(event.get('rough') === false)
                    {
                        this.$rootScope.$broadcast('routeupdate', route.requestPoints);
                    }
                });
            },
            (error) => {
                console.log('Error is occured: ' + error.message);
            }
        );
    }
}

export default YMapModelService;
