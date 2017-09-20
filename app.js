function httpGet(url) {
    x = new XMLHttpRequest();
    x.open('GET', url, false)
    x.send(null);
    resp = x.responseText;
    return resp;
};

function read_sensor() { 
    var reading = httpGet('http://192.168.1.6:8080/');

    return JSON.parse(reading);
  }
  
  Plotly.plot('test', [
    {
    y: [],
    mode: 'lines',
    line: {color: '#80CAF6'},
    name:'X'
  },
  {
    y: [],
    mode: 'lines',
    line: {color: '#000000'},
    name:'Y'
  },
  {
    y: [],
    mode: 'lines',
    line: {color: '#cad400'},
    name:'Z'
  },
]);
  
  var cnt = 0;
  var reading = 0;

  var interval = setInterval(function() {
    reading = read_sensor();
    reading = [reading.x, reading.y, reading.z];

    Plotly.extendTraces('test', 
      {
        y: reading
      }
    , [0,1,2])
    cnt++
  
    if(cnt === 1000) clearInterval(interval);
  }, 1000);

  