const spec2 = {
  "config": {"view": {"continuousWidth": 200, "continuousHeight": 150}},
  "data": {"name": "data-fc792f071747cc35f1a1913b088b781d"},
  "mark": "arc",
  "encoding": {
    "color": {"field": "category", "type": "nominal"},
    "theta": {"field": "value", "type": "quantitative"}
  },
  "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
  "datasets": {
    "data-fc792f071747cc35f1a1913b088b781d": [
      {"category": "Rango normal", "value": 73},
      {"category": "depresion leve", "value": 13},
      {"category": "depresion leve moderada", "value": 13},
      {"category": "depresion moderada-severa", "value": 0},
      {"category": "depresion severa", "value": 0}
    ]
  }
};

vegaEmbed("#vis3", spec2, {mode: "vega-lite"})
  .then(console.log)
  .catch(console.warn);