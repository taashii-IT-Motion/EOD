var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CASA_1 = new ol.format.GeoJSON();
var features_CASA_1 = format_CASA_1.readFeatures(json_CASA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASA_1.addFeatures(features_CASA_1);
var lyr_CASA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CASA_1, 
                style: style_CASA_1,
                interactive: true,
                title: '<img src="styles/legend/CASA_1.png" /> CASA'
            });
var format_TRAMITES_2 = new ol.format.GeoJSON();
var features_TRAMITES_2 = format_TRAMITES_2.readFeatures(json_TRAMITES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMITES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMITES_2.addFeatures(features_TRAMITES_2);
var lyr_TRAMITES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMITES_2, 
                style: style_TRAMITES_2,
                interactive: true,
                title: '<img src="styles/legend/TRAMITES_2.png" /> TRAMITES'
            });
var format_TRABAJO_3 = new ol.format.GeoJSON();
var features_TRABAJO_3 = format_TRABAJO_3.readFeatures(json_TRABAJO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRABAJO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRABAJO_3.addFeatures(features_TRABAJO_3);
var lyr_TRABAJO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRABAJO_3, 
                style: style_TRABAJO_3,
                interactive: true,
                title: '<img src="styles/legend/TRABAJO_3.png" /> TRABAJO'
            });
var format_RECYCULTURA_4 = new ol.format.GeoJSON();
var features_RECYCULTURA_4 = format_RECYCULTURA_4.readFeatures(json_RECYCULTURA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RECYCULTURA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECYCULTURA_4.addFeatures(features_RECYCULTURA_4);
var lyr_RECYCULTURA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RECYCULTURA_4, 
                style: style_RECYCULTURA_4,
                interactive: true,
                title: '<img src="styles/legend/RECYCULTURA_4.png" /> RECYCULTURA'
            });
var format_ATENCIONSALUD_5 = new ol.format.GeoJSON();
var features_ATENCIONSALUD_5 = format_ATENCIONSALUD_5.readFeatures(json_ATENCIONSALUD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATENCIONSALUD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATENCIONSALUD_5.addFeatures(features_ATENCIONSALUD_5);
var lyr_ATENCIONSALUD_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ATENCIONSALUD_5, 
                style: style_ATENCIONSALUD_5,
                interactive: true,
                title: '<img src="styles/legend/ATENCIONSALUD_5.png" /> ATENCIONSALUD'
            });
var format_ESTUDIAR_6 = new ol.format.GeoJSON();
var features_ESTUDIAR_6 = format_ESTUDIAR_6.readFeatures(json_ESTUDIAR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTUDIAR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTUDIAR_6.addFeatures(features_ESTUDIAR_6);
var lyr_ESTUDIAR_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTUDIAR_6, 
                style: style_ESTUDIAR_6,
                interactive: true,
                title: '<img src="styles/legend/ESTUDIAR_6.png" /> ESTUDIAR'
            });
var format_COMPRAS_7 = new ol.format.GeoJSON();
var features_COMPRAS_7 = format_COMPRAS_7.readFeatures(json_COMPRAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMPRAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMPRAS_7.addFeatures(features_COMPRAS_7);
var lyr_COMPRAS_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMPRAS_7, 
                style: style_COMPRAS_7,
                interactive: true,
                title: '<img src="styles/legend/COMPRAS_7.png" /> COMPRAS'
            });
var format_UTAM_8 = new ol.format.GeoJSON();
var features_UTAM_8 = format_UTAM_8.readFeatures(json_UTAM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTAM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTAM_8.addFeatures(features_UTAM_8);
var lyr_UTAM_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UTAM_8, 
                style: style_UTAM_8,
                interactive: true,
                title: '<img src="styles/legend/UTAM_8.png" /> UTAM'
            });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_CASA_1.setVisible(true);lyr_TRAMITES_2.setVisible(true);lyr_TRABAJO_3.setVisible(true);lyr_RECYCULTURA_4.setVisible(true);lyr_ATENCIONSALUD_5.setVisible(true);lyr_ESTUDIAR_6.setVisible(true);lyr_COMPRAS_7.setVisible(true);lyr_UTAM_8.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_CASA_1,lyr_TRAMITES_2,lyr_TRABAJO_3,lyr_RECYCULTURA_4,lyr_ATENCIONSALUD_5,lyr_ESTUDIAR_6,lyr_COMPRAS_7,lyr_UTAM_8];
lyr_CASA_1.set('fieldAliases', {'O_ID': 'O_ID', 'COSTO_ENTRADA': 'COSTO_ENTRADA', 'COSTO_RED': 'COSTO_RED', 'COSTO_SALIDA': 'COSTO_SALIDA', 'COSTO_TOTAL': 'COSTO_TOTAL', 'MOTIVO': 'MOTIVO', 'MODO': 'MODO', 'Aprox_Viajes': 'Aprox_Viajes', });
lyr_TRAMITES_2.set('fieldAliases', {'O_ID': 'O_ID', 'COSTO_ENTRADA': 'COSTO_ENTRADA', 'COSTO_RED': 'COSTO_RED', 'COSTO_SALIDA': 'COSTO_SALIDA', 'COSTO_TOTAL': 'COSTO_TOTAL', 'MOTIVO': 'MOTIVO', 'MODO': 'MODO', 'Aprox_Viajes': 'Aprox_Viajes', });
lyr_TRABAJO_3.set('fieldAliases', {'O_ID': 'O_ID', 'COSTO_ENTRADA': 'COSTO_ENTRADA', 'COSTO_RED': 'COSTO_RED', 'COSTO_SALIDA': 'COSTO_SALIDA', 'COSTO_TOTAL': 'COSTO_TOTAL', 'MOTIVO': 'MOTIVO', 'MODO': 'MODO', 'Aprox_Viajes': 'Aprox_Viajes', });
lyr_RECYCULTURA_4.set('fieldAliases', {'O_ID': 'O_ID', 'COSTO_ENTRADA': 'COSTO_ENTRADA', 'COSTO_RED': 'COSTO_RED', 'COSTO_SALIDA': 'COSTO_SALIDA', 'COSTO_TOTAL': 'COSTO_TOTAL', 'MOTIVO': 'MOTIVO', 'MODO': 'MODO', 'Aprox_Viajes': 'Aprox_Viajes', });
lyr_ATENCIONSALUD_5.set('fieldAliases', {'O_ID': 'O_ID', 'COSTO_ENTRADA': 'COSTO_ENTRADA', 'COSTO_RED': 'COSTO_RED', 'COSTO_SALIDA': 'COSTO_SALIDA', 'COSTO_TOTAL': 'COSTO_TOTAL', 'MOTIVO': 'MOTIVO', 'MODO': 'MODO', 'Aprox_Viajes': 'Aprox_Viajes', });
lyr_ESTUDIAR_6.set('fieldAliases', {'O_ID': 'O_ID', 'COSTO_ENTRADA': 'COSTO_ENTRADA', 'COSTO_RED': 'COSTO_RED', 'COSTO_SALIDA': 'COSTO_SALIDA', 'COSTO_TOTAL': 'COSTO_TOTAL', 'MOTIVO': 'MOTIVO', 'MODO': 'MODO', 'Aprox_viajes': 'Aprox_viajes', });
lyr_COMPRAS_7.set('fieldAliases', {'O_ID': 'O_ID', 'COSTO_ENTRADA': 'COSTO_ENTRADA', 'COSTO_RED': 'COSTO_RED', 'COSTO_SALIDA': 'COSTO_SALIDA', 'COSTO_TOTAL': 'COSTO_TOTAL', 'MOTIVO': 'MOTIVO', 'MODO': 'MODO', 'Aprox_Viajes': 'Aprox_Viajes', });
lyr_UTAM_8.set('fieldAliases', {'MUNCodigo': 'MUNCodigo', 'MUNNombre': 'MUNNombre', 'LOCNombre': 'LOCNombre', 'USOSNum': 'USOSNum', 'USOPreNum': 'USOPreNum', 'USOPreCor': 'USOPreCor', 'ESTRATO1': 'ESTRATO1', 'ESTRATO2': 'ESTRATO2', 'ESTRATO3': 'ESTRATO3', 'ESTRATO4': 'ESTRATO4', 'ESTRATO5': 'ESTRATO5', 'ESTRATO6': 'ESTRATO6', 'ESTRATOPre': 'ESTRATOPre', 'HOGARES': 'HOGARES', 'UTAM': 'UTAM', 'UTAMNombre': 'UTAMNombre', 'UTAMArea': 'UTAMArea', });
lyr_CASA_1.set('fieldImages', {'O_ID': '', 'COSTO_ENTRADA': '', 'COSTO_RED': '', 'COSTO_SALIDA': '', 'COSTO_TOTAL': '', 'MOTIVO': '', 'MODO': '', 'Aprox_Viajes': '', });
lyr_TRAMITES_2.set('fieldImages', {'O_ID': '', 'COSTO_ENTRADA': '', 'COSTO_RED': '', 'COSTO_SALIDA': '', 'COSTO_TOTAL': '', 'MOTIVO': '', 'MODO': '', 'Aprox_Viajes': '', });
lyr_TRABAJO_3.set('fieldImages', {'O_ID': '', 'COSTO_ENTRADA': '', 'COSTO_RED': '', 'COSTO_SALIDA': '', 'COSTO_TOTAL': '', 'MOTIVO': '', 'MODO': '', 'Aprox_Viajes': '', });
lyr_RECYCULTURA_4.set('fieldImages', {'O_ID': '', 'COSTO_ENTRADA': '', 'COSTO_RED': '', 'COSTO_SALIDA': '', 'COSTO_TOTAL': '', 'MOTIVO': '', 'MODO': '', 'Aprox_Viajes': '', });
lyr_ATENCIONSALUD_5.set('fieldImages', {'O_ID': '', 'COSTO_ENTRADA': '', 'COSTO_RED': '', 'COSTO_SALIDA': '', 'COSTO_TOTAL': '', 'MOTIVO': '', 'MODO': '', 'Aprox_Viajes': '', });
lyr_ESTUDIAR_6.set('fieldImages', {'O_ID': '', 'COSTO_ENTRADA': '', 'COSTO_RED': '', 'COSTO_SALIDA': '', 'COSTO_TOTAL': '', 'MOTIVO': '', 'MODO': '', 'Aprox_viajes': '', });
lyr_COMPRAS_7.set('fieldImages', {'O_ID': 'TextEdit', 'COSTO_ENTRADA': 'TextEdit', 'COSTO_RED': 'TextEdit', 'COSTO_SALIDA': 'TextEdit', 'COSTO_TOTAL': 'TextEdit', 'MOTIVO': 'TextEdit', 'MODO': 'TextEdit', 'Aprox_Viajes': '', });
lyr_UTAM_8.set('fieldImages', {'MUNCodigo': '', 'MUNNombre': '', 'LOCNombre': '', 'USOSNum': '', 'USOPreNum': '', 'USOPreCor': '', 'ESTRATO1': '', 'ESTRATO2': '', 'ESTRATO3': '', 'ESTRATO4': '', 'ESTRATO5': '', 'ESTRATO6': '', 'ESTRATOPre': '', 'HOGARES': '', 'UTAM': '', 'UTAMNombre': '', 'UTAMArea': '', });
lyr_CASA_1.set('fieldLabels', {'O_ID': 'no label', 'COSTO_ENTRADA': 'no label', 'COSTO_RED': 'no label', 'COSTO_SALIDA': 'no label', 'COSTO_TOTAL': 'no label', 'MOTIVO': 'no label', 'MODO': 'no label', 'Aprox_Viajes': 'no label', });
lyr_TRAMITES_2.set('fieldLabels', {'O_ID': 'no label', 'COSTO_ENTRADA': 'no label', 'COSTO_RED': 'no label', 'COSTO_SALIDA': 'no label', 'COSTO_TOTAL': 'no label', 'MOTIVO': 'no label', 'MODO': 'no label', 'Aprox_Viajes': 'no label', });
lyr_TRABAJO_3.set('fieldLabels', {'O_ID': 'no label', 'COSTO_ENTRADA': 'no label', 'COSTO_RED': 'no label', 'COSTO_SALIDA': 'no label', 'COSTO_TOTAL': 'no label', 'MOTIVO': 'no label', 'MODO': 'no label', 'Aprox_Viajes': 'no label', });
lyr_RECYCULTURA_4.set('fieldLabels', {'O_ID': 'no label', 'COSTO_ENTRADA': 'no label', 'COSTO_RED': 'no label', 'COSTO_SALIDA': 'no label', 'COSTO_TOTAL': 'no label', 'MOTIVO': 'no label', 'MODO': 'no label', 'Aprox_Viajes': 'no label', });
lyr_ATENCIONSALUD_5.set('fieldLabels', {'O_ID': 'no label', 'COSTO_ENTRADA': 'no label', 'COSTO_RED': 'no label', 'COSTO_SALIDA': 'no label', 'COSTO_TOTAL': 'no label', 'MOTIVO': 'no label', 'MODO': 'no label', 'Aprox_Viajes': 'no label', });
lyr_ESTUDIAR_6.set('fieldLabels', {'O_ID': 'no label', 'COSTO_ENTRADA': 'no label', 'COSTO_RED': 'no label', 'COSTO_SALIDA': 'no label', 'COSTO_TOTAL': 'no label', 'MOTIVO': 'no label', 'MODO': 'no label', 'Aprox_viajes': 'no label', });
lyr_COMPRAS_7.set('fieldLabels', {'O_ID': 'no label', 'COSTO_ENTRADA': 'no label', 'COSTO_RED': 'no label', 'COSTO_SALIDA': 'no label', 'COSTO_TOTAL': 'no label', 'MOTIVO': 'no label', 'MODO': 'no label', 'Aprox_Viajes': 'no label', });
lyr_UTAM_8.set('fieldLabels', {'MUNCodigo': 'no label', 'MUNNombre': 'no label', 'LOCNombre': 'no label', 'USOSNum': 'no label', 'USOPreNum': 'no label', 'USOPreCor': 'no label', 'ESTRATO1': 'no label', 'ESTRATO2': 'no label', 'ESTRATO3': 'no label', 'ESTRATO4': 'no label', 'ESTRATO5': 'no label', 'ESTRATO6': 'no label', 'ESTRATOPre': 'no label', 'HOGARES': 'no label', 'UTAM': 'no label', 'UTAMNombre': 'no label', 'UTAMArea': 'no label', });
lyr_UTAM_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
