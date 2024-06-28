const spec5 = {
    "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
    "data": {"name": "data-76ca790ba1ba2b0d3a3dee684acbe232"},
    "mark": "bar",
    "encoding": {
      "x": {"field": "Nivel de actividad física", "type": "nominal"},
      "y": {"field": "Número de personas", "type": "quantitative"}
    },
    "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
    "datasets": {
      "data-76ca790ba1ba2b0d3a3dee684acbe232": [
        {"Nivel de actividad física": "Bajo", "Número de personas": 8},
        {"Nivel de actividad física": "Moderado", "Número de personas": 23},
        {"Nivel de actividad física": "Alto", "Número de personas": 40}
      ]
    }
  };
      vegaEmbed("#vis5", spec5, {mode: "vega-lite"}).then(console.log).catch(console.warn);