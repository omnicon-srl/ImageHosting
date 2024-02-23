
            (function(root, factory) {
                if (typeof define === 'function' && define.amd) {
                    define(['leaflet'], factory);
                } else if (typeof modules === 'object' && module.exports) {
                    module.exports = factory(require('leaflet'));
                } else {
                    factory(L);
                }
            }(this, function(L) {
                'use strict';
        
                L.TileLayer.Provider = L.TileLayer.extend({
                    initialize: function(arg, options) {
                        var providers = L.TileLayer.Provider.providers;
                        var parts = arg.split('.');
                        var providerName = parts[0];
                        var variantName = parts[1];
                        if (!providers[providerName]) {throw 'No such provider (' + providerName + ')';}
                        var provider = {url: providers[providerName].url,options: providers[providerName].options};
                        if (variantName && 'variants' in providers[providerName]) {
                            if (!(variantName in providers[providerName].variants)) {
                                throw 'No such variant of ' + providerName + ' (' + variantName + ')';
                            }
                            var variant = providers[providerName].variants[variantName];
                            var variantOptions;
                            if (typeof variant === 'string') {
                                variantOptions = {variant: variant};
                            } else {variantOptions = variant.options;}
                            provider = {
                                url: variant.url || provider.url,
                                options: L.Util.extend({}, provider.options, variantOptions)
                            };
                        }
                        var attributionReplacer = function(attr) {
                            if (attr.indexOf('{attribution.') === -1) {
                                return attr;
                            }
                            return attr.replace(/\{attribution.(\w*)\}/g,
                                function(match, attributionName) {
                                    return attributionReplacer(providers[attributionName].options.attribution);
                                }
                            );
                        };
                        provider.options.attribution = attributionReplacer(provider.options.attribution);
                        var layerOpts = L.Util.extend({}, provider.options, options);
                        L.TileLayer.prototype.initialize.call(this, provider.url, layerOpts);
                    }
                });

                L.TileLayer.Provider.providers = {
                OpenStreetMap: {
                    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    options: {
                        minZoom: 3,
                        maxZoom: 19,
                        attribution:
                            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    },
                    variants: {
                        Mapnik: {},
                        DE: {url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',options: {maxZoom: 18}},
                    }
                },
                GoogleMaps: {
                    url: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
                    options: {
                        minZoom: 3,
                        maxZoom: 19,
                        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                        attribution:'&copy; <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/">Google Maps</a>'
                    },
                    variants: {
                        Streets: {
                            url: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
                            options: {maxZoom: 19}
                        },
                        Hybrid: {
                            url: 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
                            options: {maxZoom: 19}
                        },
                        Satellite: {
                            url: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
                            options: {maxZoom: 19}
                        },

                    }
                },
                Stamen: {
                    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/{variant}/{z}/{x}/{y}{r}.{ext}',
                    options: {
                        attribution:
                            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
                            '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
                            'Map data {attribution.OpenStreetMap}',
                        subdomains: 'abcd',
                        minZoom: 0,
                        maxZoom: 20,
                        variant: 'toner',
                        ext: 'png'
                    },
                    variants: {Toner: 'toner',}
                },
                OpenWeatherMap: {
                    url: 'http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png?appid={apiKey}',
                    options: {
                        minZoom: 3,
                        maxZoom: 19,
                        attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
                        apiKey: '0e1e87f7dad2414965f76a3c9bf1f892',
                        opacity: 0.5
                    },
                    variants: {
                        Clouds: 'clouds',
                        CloudsClassic: 'clouds_cls',
                        Precipitation: 'precipitation',
                        PrecipitationClassic: 'precipitation_cls',
                        Rain: 'rain',
                        RainClassic: 'rain_cls',
                        Pressure: 'pressure',
                        PressureContour: 'pressure_cntr',
                        Wind: 'wind',
                        Temperature: 'temp',
                        Snow: 'snow'
                    }
                },
            };
                L.tileLayer.provider = function(provider, options) {
                    return new L.TileLayer.Provider(provider, options);
                };
                return L;
            }));
