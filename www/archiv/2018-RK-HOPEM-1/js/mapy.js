Loader.load()

var center = SMap.Coords.fromWGS84(17.9065294, 49.3845306);
var mapa = new SMap(JAK.gel("mapa"), center, 13);
mapa.addDefaultLayer(SMap.DEF_BASE).enable();
mapa.addDefaultControls();

var sync = new SMap.Control.Sync({bottomSpace:0});
mapa.addControl(sync);

var layer = new SMap.Layer.Marker();
mapa.addLayer(layer);
layer.enable();

var options = {};
var marker = new SMap.Marker(center, "DBCB", options);
layer.addMarker(marker);
