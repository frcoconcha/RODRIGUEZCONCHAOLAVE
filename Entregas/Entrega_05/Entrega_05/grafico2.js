const spec = {
    "config": {"view": {"continuousWidth": 200, "continuousHeight": 150}},
    "data": {"name": "data-f9ad832e5c6f02331d14b7447e320c06"},
    "mark": "arc",
    "encoding": {
      "color": {"field": "category", "type": "nominal"},
      "theta": {"field": "value", "type": "quantitative"}
    },
    "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
    "datasets": {
      "data-f9ad832e5c6f02331d14b7447e320c06": [
        {"category": "Rango normal", "value": 40},
        {"category": "depresion leve", "value": 23},
        {"category": "depresion leve moderada", "value": 6},
        {"category": "depresion moderada-severa", "value": 20},
        {"category": "depresion severa", "value": 10}
      ]
    }
  };
      vegaEmbed("#vis2", spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);