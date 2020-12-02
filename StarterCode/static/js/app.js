var url = 'samples.json'

d3.json(url).then(function(data){
    console.log(data)
    // var names = data.names

    // names.forEach(d=> {
    //     d3.select('#selDataset').append('option').text(d).property('value', d)
    })
