import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import SalesChart from "backend/chartedData.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// import onlineSales from "/Users/erica/Desktop/material-dashboard-react-master/src/data/onlineSales.json";
import firebase from "../../firebase.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref("sales");
    itemsRef.on("value", snapshot => {
      const items = snapshot.val()["lKchbURB2toVit2dOiie"];

      this.setState({
        items
      });
    });
  }

  render() {
    let totalSales = 0;
    let totalCustomers = 0;
    let typeOfItems = 0;
    let typeOfCredits = 0;
    let items = new Set([]);
    let creditCards = new Set([]);
    let stat = new Map([]);

    this.state.items.forEach(element => {
      totalSales += element.sales;
      totalCustomers += 1;
      if (!items.has(element.items)) {
        items.add(element.items);
        typeOfItems++;
      }
      if (!creditCards.has(element["credit card"])) {
        creditCards.add(element["credit card"]);
        typeOfCredits++;
      }
      if (stat.has(element["credit card"])) {
        console.log("stepped inside");
        let numCard = stat.get(element["credit card"]);
        console.log(numCard);
        numCard++;
        stat.set(element["credit card"], numCard);
      } else {
        stat.set(element["credit card"], 1);
      }
    });

    console.log(stat);
    let i = 1;
    let tableStat = [];
    const itr1 = stat.keys();
    const itr2 = stat.values();
    stat.forEach(elem => {
      tableStat.push([itr1.next().value, itr2.next().value]);
      i++;
    });
    console.log(tableStat);

    const classes = makeStyles(styles);
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="black" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Type Of Products</p>
                <h3 className={classes.cardTitle}>
                  {typeOfItems}
                  <small>types</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Sales</p>
                <h3 className={classes.cardTitle}>${Math.round(totalSales)}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Type of Credit Cards</p>
                <h3 className={classes.cardTitle}>
                  {typeOfCredits}
                  <small>types</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Total Customers</p>
                <h3 className={classes.cardTitle}>{totalCustomers}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <SalesChart type="Daily" data={this.state.items}></SalesChart>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SalesChart type="Monthly" data={this.state.items}></SalesChart>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SalesChart type="Yearly" data={this.state.items}></SalesChart>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12}>
            <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>
                  Credit Card Statistics
                </h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="info"
                  tableHead={["Credit Card Company", "Frequency"]}
                  tableData={tableStat}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default Dashboard;
