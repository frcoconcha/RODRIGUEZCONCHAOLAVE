const spec6 = {
    "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
    "data": {"name": "data-53ed202127a2554000108d2fcf9eec09"},
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "Nivel de actividad física y nivel de estrés",
        "type": "nominal"
      },
      "y": {"field": "Número de personas", "type": "quantitative"}
    },
    "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
    "datasets": {
      "data-53ed202127a2554000108d2fcf9eec09": [
        {
          "Nivel de actividad física y nivel de estrés": "Bajo y leve",
          "Número de personas": 5
        },
        {
          "Nivel de actividad física y nivel de estrés": "Bajo y severo",
          "Número de personas": 4
        },
        {
          "Nivel de actividad física y nivel de estrés": "Moderado y leve",
          "Número de personas": 15
        },
        {
          "Nivel de actividad física y nivel de estrés": "Moderado y severo",
          "Número de personas": 6
        },
        {
          "Nivel de actividad física y nivel de estrés": "Alto y leve",
          "Número de personas": 33
        },
        {
          "Nivel de actividad física y nivel de estrés": "Alto y severo",
          "Número de personas": 4
        }
      ]
    }
  };
      vegaEmbed("#vis6", spec6, {mode: "vega-lite"}).then(console.log).catch(console.warn);