export const config = {
  production: false,
  weatherAPIUrl: 'https://api.openweathermap.org/data/2.5/onecall',
  weatherAPPID: '4e3855b13f89dcf9e98ede6a07e583be', // this value should be taken from CI variable

  citiesCoordinate: [
    {
      lat: 52.3667,
      lon: 4.8945,
    },
    {
      lat: 48.8566,
      lon: 2.3522
    },
    {
      lat: 41.3851,
      lon: 2.1734,
    },
    {
      lat: 41.9028,
      lon: 12.4964,
    },
    {
      lat: 52.5200,
      lon: 13.4050,
    }
  ],
};