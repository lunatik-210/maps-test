
class YMapModelService {
    constructor() {
        'ngInject';
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
                        console.log('route updated');
                        console.log(route.points);

                        /*
                            https://toster.ru/q/195055
                            var all_points=[];
                            var paths=route.getPaths();
                            var i=0;
                            while(paths.get(i)!==null){
                                var p=paths.get(i);
                                var segments=p.getSegments();
                                $(segments).each(function(){
                                    var pc=this.getCoordinates();
                                    $(pc).each(function(){
                                        all_points.push(this);
                                    });
                                });
                                i++;
                            }
                        */
                    }
                });

                route.editor.events.add('waypointdragend', (event) => {
                    console.log(event.originalEvent.wayPoint.properties);
                    console.log(event.originalEvent.wayPoint.geometry.getCoordinates());
                });
            },
            (error) => {
                console.log('Error is occured: ' + error.message);
            }
        );
    }
}

export default YMapModelService;
