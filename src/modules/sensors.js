
const path = "./assets/";
const iconTemperature = path + "icon-temperature.svg";
const iconHumidity = path + "icon-humidity.svg";


export const SENSORS = {
  'temperature': {
    'icon': iconTemperature,
    'min': 14.6,
    'max': 28.3,
    'unit': '°',
    'value': '24.3',
    'clockMin': '06:19',
    'clockMax': '14:19'
  },
  'humidity': {
    'icon': iconHumidity,
    'min': 35,
    'max': 80,
    'unit': '%',
    'value': 50,
    'clockMin': '08:19',
    'clockMax': '14:19'
  },
}