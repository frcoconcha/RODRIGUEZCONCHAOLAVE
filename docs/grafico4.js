(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"name": "data-019ce5c8418e26cdf3cdf32dece66662"}, "mark": "bar", "encoding": {"tooltip": [{"field": "Nivel de estr\u00e9s", "type": "nominal"}, {"field": "N\u00famero de personas", "type": "quantitative"}], "x": {"field": "Nivel de estr\u00e9s", "type": "nominal"}, "y": {"field": "N\u00famero de personas", "type": "quantitative"}}, "selection": {"selector008": {"type": "interval", "bind": "scales", "encodings": ["x", "y"]}}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-019ce5c8418e26cdf3cdf32dece66662": [{"Nivel de estr\u00e9s": "Leve", "N\u00famero de personas": 57}, {"Nivel de estr\u00e9s": "Severo", "N\u00famero de personas": 14}]}};
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
  vegaEmbed("#vis4", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed);