var url = 'samples.json'

d3.json(url).then(function (data) {
    console.log(data);
    
    var names = data.names;
    names.forEach(d => {
    d3.select('#selDataset').append('option').text(d).property('value', d);
    })

// Static Bar Chart
var values = data.samples[0].sample_values.slice(0,10).reverse()
var ids = data.samples[0].otu_ids.slice(0,10).map(d => `OTU ${d}`)
var labels = data.samples[0].otu_labels.slice(0,10)

let trace = {
    x: values,
    y: ids,
    type: 'bar',
    text: labels,
    orientation: 'h'
}
var plotData = [trace]

Plotly.newPlot('bar', plotData)
});
