d3.json("https://api.spacexdata.com/v3/capsules").then((data) => {
    console.log(data)
    
    var trace = {
        x: data.map(capsule => capsule.capsule_serial),
        y: data.map(capsule => capsule.landings),
        type: 'bar'
    }
    var data = [trace]

    Plotly.newPlot('plot', data)


});

console.log('Hello')