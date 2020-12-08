var url = 'samples.json'

d3.json(url).then(function (data) {
    console.log(data);

    var names = data.names;
    names.forEach(d => {
        d3.select('#selDataset').append('option').text(d).property('value', d);
    })

    // Static Bar Chart
    var values = data.samples[0].sample_values.slice(0, 10).reverse()
    var ids = data.samples[0].otu_ids.slice(0, 10).map(d => `OTU ${d}`)
    var labels = data.samples[0].otu_labels.slice(0, 10)

    var trace = {
        x: values,
        y: ids,
        type: 'bar',
        text: labels,
        orientation: 'h'
    }
    var plotData = [trace];

    Plotly.newPlot('bar', plotData)

    // Static Bubble Chart
    var bubbleValues = data.samples[0].sample_values
    var bubbleIds = data.samples[0].otu_ids
    var bubbleLabels = data.samples[0].otu_labels
    //console.log()

    var traceBubble = {
        x: bubbleIds,
        y: bubbleValues,
        mode: 'markers',
        text: bubbleLabels,
        marker: {
            size: bubbleValues,
            color: bubbleIds
        }
    }

    var bubbleData = [traceBubble];

    Plotly.newPlot('bubble', bubbleData);
})   
    var demographicsID = data.metadata[0].ids
    var demgraphicsEthn = data.metadata[0].ethnicity
    var demgraphicGen = data.metadata[0].gender
    var demgraphicAge = data.metadata[0].age
    var demgraphicLoc = data.metadata[0].location
    var demgraphicBBtype = data.metadata[0].demgraphicBBtype
    var demgraphicWfreq = data.metadata[0].demgraphicWfreq

    var table = d3.select('#sample-metadata')
    var row = table.append('tr')
    var cell = row.append('td')
    cell.text(`ID: ${demographicsID}`)

    var row2 = table.append('tr')
    var cell2 = row2.append('td')
    cell2.text(`Ethnic: ${demgraphicsEthn}`)

    var row3 = table.append('tr')
    var cell3 = row3.append('tr')
    cell3.text(`Gender: ${demgraphicGen}`)

    var row4 = table.append('tr')
    var cell4 = row4.append('tr')
    cell4.text(`Age: ${demgraphicAge}`)

    var row5 = table.append('tr')
    var cell5 = row5.append('tr')
    cell4.text(`Location: ${demgraphicLoc}`)

    var row6 = table.append('tr')
    var cell6 = row6.append('tr')
    cell6.text(`BBtype: ${demgraphicBBtype}`)

    var row7 = table.append('tr')
    var cell7 = row7.append('tr')
    cell7.text(`Washing Frequency: ${demgraphicWfreq}`),
    //console.log(demgrphicWfreq)
},
    //Static Gauge Plot
    var layout = {
        width: 500,
        height: 400,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        paper_bgcolor: 'white',
        font: { color: '#696969', family: 'Times-Roman' },
    },
    var dataGauge = {
        type: "indicator",
        mode: 'gauge+number',
        value: demgraphicWfreq,
        title: {
            text: "Washing Frequency",
            font: { size: 28 },
            gauge: {
                axis: {
                    range: [null, 9],
                    tickWidth: 1, tickcolor: "darkred",
                },
                bar: { color: 'darkblue' },
                bgcolor: 'white',
                borderwidth: 2,
                bodercolor: "#696969",
                steps: [
                    { range: [0, 1], color: '#E0FFFF' },
                    { range: [1, 2], color: '#B0E0E6' },
                    { range: [2, 3], color: '#90EE90' },
                    { range: [3, 4], color: '#98FB98' },
                    { range: [4, 5], color: '#00FA9A' },
                    { range: [5, 6], color: '#00FF7F' },
                    { range: [6, 7], color: '#3CB371' },
                    { range: [7, 8], color: '#2E8B57' },
                    { range: [8, 9], color: '#006400' },
                ],
            },
        },
    },
    var gaugeData = [layout],

    Plotly.newPlot('gauge', dataGauge, gaugeData),
});
