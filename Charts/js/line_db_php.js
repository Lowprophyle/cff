//this file uses chart.js, read more at http://www.chartjs.org/docs/latest/

//to get single array of values from array of object
function getchoice() {
	c_type = document.getElementById("graph").value;
	console.log(c_type);
	return c_type;
}

$(document).ready(function() {

	/**
	 * call the data.php file to fetch the result from db table.
	 */
	$.ajax({
		url : "http://35.196.202.152/Charts/api/cff_data.php",
		type : "GET",
		success : function(eco_data){
			console.log(eco_data);



			var to_array = [];
			var len = 20;
			console.log(len);
			//to itterate through data and find values(Agr_Ecol_Opt_Temp_Min)
			for( var i = 0; i<len ; i++)
			{
				to_array[i] = eco_data[i].AgrEcolOptTempMin;
			}
			console.log(to_array); //prints to the console

			//for Agr_Ecol_Opt_Temp_Max data
			var to_array1 = [];
			//var len = eco_data.length
			//to itterate through data and find values
			for( var i = 0; i<len ; i++)
			{
				to_array1[i] = eco_data[i].AgrEcolOptTempMax;
			}
			//console.log(to_array1); //prints to the console

			//for Agr_Ecol_Abs_Temp_Min data
			var to_array2 = [];
			//var len = eco_data.length;
			//to itterate through data and find values
			for( var i = 0; i<len ; i++)
			{
				to_array2[i] = eco_data[i].AgrEcolAbsTempMin;
			}
			//console.log(to_array2); //prints to the console

			//for Agr_Ecol_Abs_Temp_Max data
			var to_array3 = [];
			//var len = eco_data.length;
			//to itterate through data and find values
			for( var i = 0; i<len ; i++)
			{
				to_array3[i] = eco_data[i].AgrEcolAbsTempMax;
			}
			//console.log(to_array3); //prints to the console

			//to get the names of crops
			var names = [];
			//var len = eco_data.length;
			for( var i = 0; i<len ; i++)
			{
				names[i] = eco_data[i].SciName;
			}
			//console.log(names);

			//get canvas
			var ctx = $("#line-chartcanvas"); //this is using jquery

			//var ctx = document.getElementById('line-chartcanvas'); //this is using html code
			//both ctx are valid just different languages

			var data = {
				//the x-axis crops name
				labels:names,
				datasets : [
				//graph1 data
				{
					 	label: "Agr_Ecol_Opt_Temp_Min",
					  data : to_array,
						backgroundColor : "rgba(0, 255, 0,0.4)",
						borderColor : "rgba(0, 255, 0,1)",
						fill : true,
						lineTension : 0,
						pointRadius :	5
					},
					//graph2 data
					{
						label: "Agr_Ecol_Opt_Temp_Max",
					  data : to_array1,
						backgroundColor : "rgba(70, 120, 250,0.4)",
						borderColor : "rgba(50, 80, 220,1)",
						fill : true,
						lineTension : 0,
						pointRadius : 5

					},
					//graph3
					{
						label: "Agr_Ecol_Abs_Temp_Min",
					  data : to_array2,
						backgroundColor : "rgba(0,0,0,0.4)",
						borderColor : "rgba(0,0,0,1)",
						fill : true,
						lineTension : 0,
						pointRadius : 5

					},
					//graph4
					{
						label: "Agr_Ecol_Abs_Temp_Max",
					  data : to_array3,
						backgroundColor : "rgba(252, 111, 167,0.4)",
						borderColor : "rgba(252, 111, 167,1)",
						fill : true,
						lineTension : 0,
						pointRadius : 5
					}
					]
			};
			//this is options for Graphs, refer char.js documentation for more
			var options = {
				//title of graph and text properties
				title : {
					display : true,
					position : "top",
					text :  "Graphs for Eco-crops",
					fontSize : 18,
					fontColor : "#111"
				},
				//these are those boxes which we click to display a graph
				legend : {
					display : true, //false will remove them
					position : "right" //position for the legends(boxes)
				}
			};

			//initializing chart by defining type and passing above data
			var chart = new Chart( ctx, {
				type : getchoice(),
				data : data,
				options : options
			} );
		},
		//if there is an error this code will execute
		error : function(data) {
			console.log(data);
		}
	});
});
