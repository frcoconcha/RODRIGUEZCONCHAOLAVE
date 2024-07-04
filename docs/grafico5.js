(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"name": "data-76ca790ba1ba2b0d3a3dee684acbe232"}, "mark": "bar", "encoding": {"tooltip": [{"field": "Nivel de actividad f\u00edsica", "type": "nominal"}, {"field": "N\u00famero de personas", "type": "quantitative"}], "x": {"field": "Nivel de actividad f\u00edsica", "type": "nominal"}, "y": {"field": "N\u00famero de personas", "type": "quantitative"}}, "selection": {"selector009": {"type": "interval", "bind": "scales", "encodings": ["x", "y"]}}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-76ca790ba1ba2b0d3a3dee684acbe232": [{"Nivel de actividad f\u00edsica": "Bajo", "N\u00famero de personas": 8}, {"Nivel de actividad f\u00edsica": "Moderado", "N\u00famero de personas": 23}, {"Nivel de actividad f\u00edsica": "Alto", "N\u00famero de personas": 40}]}};
  var embedOpt = {"mode": "vega-lite"};

  function showError(el, error){
      el.innerHTML = ('<div class="error" style="color:red;">'
                      + '<p>JavaScript Error: ' + error.message + '</p>'
                      + "<p>This usually means there's a typo in your chart specification. "
                      + "See the javascript console for the full traceback.</p>"
                      + '</div>');
      throw error;
  }
  const el = document.getElementById('vis');
  vegaEmbed("#vis5", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed);