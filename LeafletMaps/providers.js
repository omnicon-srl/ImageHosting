var defaultLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
});
var googleMaps = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']
});

var googleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}',{
maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']
});

var googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']
});

var cartoDB = L.tileLayer('https://{s}.basemaps.cartocdn.com/{variant}/{z}/{x}/{y}{r}.png',{
maxZoom: 20,
attribution: '{attribution.OpenStreetMap} &copy; <a href="https://carto.com/attributions">CARTO</a>',
subdomains: 'abcd',
maxZoom: 20,
variant: 'rastertiles/voyager'
});

var cartoDBblack = L.tileLayer('https://{s}.basemaps.cartocdn.com/{variant}/{z}/{x}/{y}{r}.png',{
maxZoom: 20,
attribution: '{attribution.OpenStreetMap} &copy; <a href="https://carto.com/attributions">CARTO</a>',
subdomains: 'abcd',
maxZoom: 20,
variant: 'dark_all'
});

var stamenToner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/{variant}/{z}/{x}/{y}{r}.{ext}',{
attribution:
				'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
				'<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
				'Map data {attribution.OpenStreetMap}',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	variant: 'toner',
	ext: 'png'
});

var clouds = L.tileLayer('http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png?appid={apiKey}',{
maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	apiKey: '0e1e87f7dad2414965f76a3c9bf1f892',
	opacity: 0.5,
	variant: 'clouds'
});

var rain = L.tileLayer('http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png?appid={apiKey}',{
maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	apiKey: '0e1e87f7dad2414965f76a3c9bf1f892',
	opacity: 0.5,
	variant: 'precipitation'
});

var pressure = L.tileLayer('http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png?appid={apiKey}',{
maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	apiKey: '0e1e87f7dad2414965f76a3c9bf1f892',
	opacity: 0.5,
	variant: 'pressure'
});

var pressureContour = L.tileLayer('http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png?appid={apiKey}',{
maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	apiKey: '0e1e87f7dad2414965f76a3c9bf1f892',
	opacity: 0.5,
	variant: 'pressure_cntr'
});

var wind = L.tileLayer('http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png?appid={apiKey}',{
maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	apiKey: '0e1e87f7dad2414965f76a3c9bf1f892',
	opacity: 0.5,
	variant: 'wind'
});

var temperature = L.tileLayer('http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png?appid={apiKey}',{
maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	apiKey: '0e1e87f7dad2414965f76a3c9bf1f892',
	opacity: 0.5,
	variant: 'temp'
});

var snow = L.tileLayer('http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png?appid={apiKey}',{
maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	apiKey: '0e1e87f7dad2414965f76a3c9bf1f892',
	opacity: 0.5,
	variant: 'snow'
});
