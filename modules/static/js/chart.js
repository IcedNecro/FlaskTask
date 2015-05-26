//Sends GET request to /get and displays data on chart
function parseData() {

	var serie = [{
		'key':"City population",
		'values' : []
	},];
	d3.xhr("http://localhost:5000/get")
		.get(function(error,data) {
			var parsed = JSON.parse(data.response);
			
			for(var i=0; i<parsed.length; i++) {
				var point = {
					"label":parsed[i]['city']+"_"+parsed[i]['_id'],
					"value":parsed[i]['pop']
				};
				serie[0].values[i] = point;
			}

			nv.addGraph(function() {
			  	var chart = nv.models.discreteBarChart()
				    .x(function(d) { return d.label })
				    .y(function(d) { return d.value })
				    .staggerLabels(false) 
				    .tooltips(false)       
				    .showValues(true)
				    .height(500)      
				    ;


    			chart.yAxis
        				.tickFormat(d3.format('i'))
        				.axisLabel("Population");
				chart.xAxis.rotateLabels(-45);   


			  	d3.select('#chart svg')
				    .datum(serie)
				    .call(chart);
				
				nv.utils.windowResize(chart.update);
				    
			  	return chart;
			});
		}
	)

}

parseData()

