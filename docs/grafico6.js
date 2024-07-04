(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"name": "data-e6cfaa712a38243dcfd04518a5a18009"}, "mark": "bar", "encoding": {"color": {"field": "Nivel de estr\u00e9s", "type": "nominal"}, "tooltip": [{"field": "Nivel de actividad f\u00edsica", "type": "nominal"}, {"field": "Nivel de estr\u00e9s", "type": "nominal"}, {"field": "N\u00famero de personas", "type": "quantitative"}], "x": {"field": "Nivel de actividad f\u00edsica", "title": "Nivel de Actividad F\u00edsica", "type": "nominal"}, "y": {"field": "N\u00famero de personas", "title": "N\u00famero de Personas", "type": "quantitative"}}, "selection": {"selector010": {"type": "interval", "bind": "scales", "encodings": ["x", "y"]}}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-e6cfaa712a38243dcfd04518a5a18009": [{"Nivel de actividad f\u00edsica": "Bajo", "Nivel de estr\u00e9s": "Leve", "N\u00famero de personas": 5}, {"Nivel de actividad f\u00edsica": "Bajo", "Nivel de estr\u00e9s": "Severo", "N\u00famero de personas": 4}, {"Nivel de actividad f\u00edsica": "Moderado", "Nivel de estr\u00e9s": "Leve", "N\u00famero de personas": 15}, {"Nivel de actividad f\u00edsica": "Moderado", "Nivel de estr\u00e9s": "Severo", "N\u00famero de personas": 6}, {"Nivel de actividad f\u00edsica": "Alto", "Nivel de estr\u00e9s": "Leve", "N\u00famero de personas": 33}, {"Nivel de actividad f\u00edsica": "Alto", "Nivel de estr\u00e9s": "Severo", "N\u00famero de personas": 4}]}};
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
  vegaEmbed("#vis6", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed);