config={
  "essential": {
    "graphic_data_url": "data.csv",
    "legendLabels": ["2015-2019", "2020"],
    "colour_palette": ["#A09FA0", "#206095"],
    "sourceText": "Office for National Statistics",
    "accessibleSummary":"Chart showing death rates due to alchohol by regions, for males, females and all.",
    // either auto or a custom domain as an array e.g [0,100]
    "xDomain":"auto",
    //data labels for min and max values either "show":true, or "show":false,
    "dataLabels":{
      "show":true,
      "numberFormat":".0f"
    },
    "dataLabels1":{
      "show":true,
      "numberFormat":".0%"
    },
  },
  "optional": {
    "margin": {
      "sm": {
        "top": 15,
        "right": 20,
        "bottom": 20,
        "left": 100
      },
      "md": {
        "top": 15,
        "right": 20,
        "bottom": 20,
        "left": 100
      },
      "lg": {
        "top": 15,
        "right": 20,
        "bottom": 20,
        "left": 100
      }
    },
    "seriesHeight":{
      "sm":40,
      "md":40,
      "lg":40
    },
    "xAxisTicks":{
      "sm":4,
      "md":8,
      "lg":10
    },
    "mobileBreakpoint": 510,
    "mediumBreakpoint": 600
  },
  //future functionality for chart builder - changing values will have no impact on charts when coding manually.
"elements":{"select":0, "nav":0, "legend":1, "titles":0}
};
