(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 225}}, "data": {"name": "data-267783d54ee151182f1d6953878b4dc1"}, "mark": "arc", "encoding": {"color": {"field": "RANGO", "sort": ["Rango normal", "Depresi\u00f3n leve", "Depresi\u00f3n leve moderada", "Depresi\u00f3n moderada-severa", "Depresi\u00f3n severa"], "type": "nominal"}, "theta": {"field": "TOTAL FINAL", "type": "quantitative"}, "tooltip": [{"field": "RANGO", "type": "nominal"}, {"field": "TOTAL FINAL", "type": "quantitative"}]}, "title": "Porcentajes de depresi\u00f3n final", "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-267783d54ee151182f1d6953878b4dc1": [{"RANGO": "Rango normal", "TOTAL INICIAL": 40.0, "TOTAL FINAL": 73.3}, {"RANGO": "Depresi\u00f3n leve", "TOTAL INICIAL": 23.3, "TOTAL FINAL": 13.3}, {"RANGO": "Depresi\u00f3n leve moderada", "TOTAL INICIAL": 6.7, "TOTAL FINAL": 13.3}, {"RANGO": "Depresi\u00f3n moderada-severa", "TOTAL INICIAL": 20.0, "TOTAL FINAL": 0.0}, {"RANGO": "Depresi\u00f3n severa", "TOTAL INICIAL": 10.0, "TOTAL FINAL": 0.0}]}};
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
  vegaEmbed("#vis3", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed);