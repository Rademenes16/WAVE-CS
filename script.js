var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.covid19api.com/country/poland/status/confirmed", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
