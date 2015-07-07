require.config({
   paths: {
      "d3": "../../../../libraries/d3/d3.min", 
   }
});
require([
   "d3",
], function(d3) {
   d3.select(".close_right")
      .on("click", toggle_description)
   function toggle_description() {
      if (!d3.select(".header_content").classed("hidden")) {
         d3.select("header").transition()
            .style("width", "10px")
         d3.select(".header_content").classed("hidden", 1)
         d3.select(".close_right").html("&#187;")
      }
      else {
         d3.select("header").transition()
            .style("width", "350px")
         setTimeout(function() { d3.select(".header_content").classed("hidden", 0) }, 250)
         d3.select(".close_right").html("&#171;")
      }
   }
})
