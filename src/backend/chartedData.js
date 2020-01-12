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
  
  //for option
  let options = {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  };
  
  // for animation
  let animation = {
    draw: function(data) {
      console.log(data.type)
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

  if(props.type == 'daily'){
    chartData = {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      series: [[12, 17, 7, 17, 23, 18, 38]]
    };
  } else if(props.type == 'monthly'){

  } else if(props.type == 'yearly'){
    let years=[];
    let sales=[];
    let ThirteenSale = 0;
    let FourteenSale = 0;
    let FifteenSale = 0;
    let SixteenSale = 0;
    let SeventeenSale = 0;

    props.data.forEach(element => {
      switch (element.date.substr(element.date.length - 4)) {
        case "2013":
          ThirteenSale += 1;
          break;
        case "2014":
          FourteenSale += 1;
          break;
        case "2015":
          FifteenSale += 1;
          break;
        case "2016":
          SixteenSale += 1;
          break;
        case "2017":
          SeventeenSale += 1;
          break;
      }
    });

    let chartData = {
      labels: ["2013", "2014", "2015", "2016", "2017"],
      series: [
          [ThirteenSale, FourteenSale, FifteenSale, SixteenSale, SeventeenSale]
      ]
    };
  }

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
        <h4 className={classes.cardTitle}>Daily Sales</h4>
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

