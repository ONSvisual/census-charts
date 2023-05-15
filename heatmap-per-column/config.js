config={
  "essential": {
    "graphic_data_url": "data.csv",
    "colour_palette": "YlGnBu",
    // must be a colour brewer palette
    "sourceText": "Office for National Statistics",
    "accessibleSummary":"Here is the screenreader text describing the chart.",
    "dataLabelsNumberFormat":".0f",
    "xAxisLabel":"x axis label",
    "numberOfBreaks":5,
    "breaks":"jenks"
    // either "jenks","equal" or an array with custom breaks
    // if using custom breaks, it needs to be an object with keys the same as the columns and then an array of the value as the value of the key
  },
  "optional": {
    "margin": {
      "sm": {
        "top": 15,
        "right": 20,
        "bottom": 50,
        "left": 120
      },
      "md": {
        "top": 15,
        "right": 20,
        "bottom": 50,
        "left": 120
      },
      "lg": {
        "top": 15,
        "right": 20,
        "bottom": 50,
        "left": 120
      }
    },
    "seriesHeight":{
      "sm":40,
      "md":40,
      "lg":40
    },
    "mobileBreakpoint": 510,
    "mediumBreakpoint": 600
  },
  //future functionality for chart builder - changing values will have no impact on charts when coding manually.
"elements":{"select":0, "nav":0, "legend":0, "titles":0}
};
