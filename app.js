require("!style-loader!css-loader!./client/style.css");
var config = require('./client/plotly_config.json');
var username = config['username'];
var apiKey = config.apiKey;
var token = config.streamingToken;

function httpGet(url) {
    x = new XMLHttpRequest();
    x.open('GET', url, false)
    x.send(null);
    resp = x.responseText;
    return resp;
};

function read_sensor() { 
    var reading = httpGet('http://192.168.1.12:8080/');
    return reading;
  }
  
  Plotly.plot('test', [{
    y: [],
    mode: 'lines',
    line: {color: '#80CAF6'}
  }]);
  
  var cnt = 0;
  
  var interval = setInterval(function() {
    
    Plotly.extendTraces('test', {
      y: [[read_sensor()]]
    }, [0])
    cnt++
  
    if(cnt === 1000) clearInterval(interval);
  }, 300);

  