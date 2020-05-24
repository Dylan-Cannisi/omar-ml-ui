import React from "react";

import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

class MapViewer extends React.Component {

    componentDidMount() {

        // create map object with feature layer
        var map = new Map({
            target: this.refs.mapContainer,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 0
            })
        });

        this.setState({
            map: map
        });
    }

    render () {
        return (
            <div id="mapContainer" ref="mapContainer"></div>
        );
    }

}

export default MapViewer