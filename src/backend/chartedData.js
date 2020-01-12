import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import { render } from "react-dom";



export default function DailySales(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  // variables for the chart
  var Chartist = require("chartist");
  var delays = 80,
    durations = 500;
  var delays2 = 80,
    durations2 = 500;
  
  
  // for animation
  let animation = {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  };

  let chartData;
  let sales=[];

  if(props.type == 'Daily'){
    chartData = {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      series: [[12, 17, 7, 17, 23, 18, 38]]
    };
  } else if(props.type == 'Monthly'){

  } else if(props.type == 'Yearly'){

    let years=[];
  
    for(let i = 0; i<21; i++){
      years[i] = 2000 + i;
      sales[i] = 0;
    }

    props.data.forEach(element => {
      let year = element.date.substr(element.date.length - 4);
      sales[ year - 2000 ] += element.sales;
    });

    while(true)
    {
      if(sales[0] == 0){
        console.log(years.shift());
        sales.shift();
      } else{
        console.log("why " + sales);
        break;
      }
    }

    while(true)
    {
      if(sales[sales.length - 1] == 0){
        console.log(years.pop());
        sales.pop();
      } else{
        console.log("why " + sales);
        break;
      }
    }
    chartData = {
      labels: years,
      series: [ sales ]
    };
    console.log(sales);
  }

  //for option
  let options = {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: Math.min(...sales) - (Math.max(...sales) - Math.min(...sales)) * 0.1,
    high: Math.max(...sales) + (Math.max(...sales) - Math.min(...sales)) * 0.1, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  };

  return (
    <Card chart>
      <CardHeader color="success">
        <ChartistGraph
          className="ct-chart"
          data={chartData}
          type="Line"
          options={options}
          listener={animation}
        />
      </CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>{props.type} Sales</h4>
        <p className={classes.cardCategory}>
          <span className={classes.successText}>
            <ArrowUpward className={classes.upArrowCardCategory} /> 55%
          </span>
          increase in today sales.
        </p>
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          <AccessTime /> updated 4 minutes ago
        </div>
      </CardFooter>
    </Card>
  );
}

