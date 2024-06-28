const spec4 = {
    "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
    "data": {"name": "data-019ce5c8418e26cdf3cdf32dece66662"},
    "mark": "bar",
    "encoding": {
      "x": {"field": "Nivel de estrés", "type": "nominal"},
      "y": {"field": "Número de personas", "type": "quantitative"}
    },
    "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
    "datasets": {
      "data-019ce5c8418e26cdf3cdf32dece66662": [
        {"Nivel de estrés": "Leve", "Número de personas": 57},
        {"Nivel de estrés": "Severo", "Número de personas": 14}
      ]
    }
  };
      vegaEmbed("#vis4", spec4, {mode: "vega-lite"}).then(console.log).catch(console.warn);