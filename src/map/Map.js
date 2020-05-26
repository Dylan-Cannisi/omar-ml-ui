import React from "react";

import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorSource from "ol/source/Vector";
import {GeoJSON} from "ol/format";
import {bbox as bboxStrategy} from "ol/loadingstrategy";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";


// variables to be loaded by config
const OMAR_BASE_URL = 'https://omar-dev.ossim.io';
const OMAR_WFS_CONTEXT_PATH = '/omar-wfs/wfs';


class MapViewer extends React.Component {

    componentDidMount() {

        // Add temporary WFS layer from OMAR to show avalible imagery footprints.
        var footprintSource = new VectorSource({
            format: new GeoJSON(),
            url: function(extent) {
                return OMAR_BASE_URL + OMAR_WFS_CONTEXT_PATH +'?service=WFS&' +
                'version=1.1.0&request=GetFeature&typeName=omar:raster_entry&' +
                'resultType=results&outputFormat=application/json&' +
                'srsname=EPSG:3857&bbox=' + extent.join(',') + ',EPSG:3857';
            },
            strategy: bboxStrategy
        });

        var footprintLayer = new VectorLayer({
            source: footprintSource,
            style: new Style({
                stroke: new Stroke({
                    color: 'rgba(0, 0, 255, 1.0)',
                    width: 2
                })
            })
        });


        // create map object with feature layer
        var map = new Map({
            target: this.refs.mapContainer,
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                footprintLayer
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