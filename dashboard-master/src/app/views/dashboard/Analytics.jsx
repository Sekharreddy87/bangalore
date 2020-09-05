import React, { Component, Fragment } from "react";
import { Grid, Card } from "@material-ui/core";
// import "../styles.scss"
import DoughnutChart from "../charts/echarts/Doughnut";
import BigPieChart from "../charts/echarts/BigPie";
import BarChartDashboard from "../charts/echarts/BarChart";
import PieChartDemo from "../charts/echarts/SmallPieChart";
import {Link } from 'react-router-dom'
import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import TableCard from "./shared/TableCard";
import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import UpgradeCard from "./shared/UpgradeCard";
import Campaigns from "./shared/Campaigns";
import { withStyles } from "@material-ui/styles";

import { Spin  } from 'antd';
import {connect} from 'react-redux'
import {fetchMainDashboard} from '../../redux/actions/MainDashboardActions';
import { divide } from "lodash";
const bigpiedata = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];



const bardata = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

class Dashboard1 extends Component {
  // state = {};

  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchMainDashboard()
      console.log(this.props)
  }      
  ren
  render() {
    let { theme } = this.props;
    console.log(this.props)
    return (
    
      this.props.dashboard.loading ?(
        
        <div className="matx-loader" style = {{marginTop:280}}>
        <img
          src="/assets/images/logo-circle.svg"
          alt=""
        />
        <div ></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    
    ) : this.props.dashboard.error ?(
    <h2>{this.props.dashboard.error}</h2>

    ) : (
        <div>
            {console.log(this.props.dashboard)}
            <div>
                {
                    this.props.dashboard &&
                    this.props.dashboard.mainDashboard && (
      <Fragment>

              
 

        <div className="pb-24 pt-7 px-8 bg-primary">
        
              
          <Grid container spacing={3} className="mb-6">
          {this.props.dashboard.mainDashboard.statistics.map((prop, key) => {
          return (
            <Grid key={key} item xs={12} md={2}>
              <Card elevation={3} className="p-4">
                <div className="flex items-center">
                  <h5 className="font-medium text-green m-0 ml-3">{prop.name}</h5>
                </div>
                <div className="pt-4 flex items-center">
                  <h2 className=" m-0 ml-3 text-muted flex-grow">{prop.value}</h2>
                </div>
              </Card>
            </Grid>
            )})}
            
          </Grid>
        </div>

        <div className="analytics m-sm-30 mt--18">
          <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card className="px-6 py-4 mb-6 items-center ">
            <BigPieChart data={this.props.dashboard.mainDashboard.courses} name={"hello"} />
            </Card>
          </Grid>
          {this.props.dashboard.mainDashboard.detail_courses.map((prop, key) => {
            return (
          <>
          <Grid item xs={9}>
          <Link to={`/dashboard/course/${prop.course_id}`}>
            <Card className="px-6 py-4 mb-6 flex-column items-center">
                <div className="card-title">{prop.course}</div>
                <BarChartDashboard data={prop.subjects} name={prop.course} />
            </Card>
            </Link>
          </Grid>
          <Grid item xs={3}>
              <Card className="px-6 py-4 mb-6 flex-column items-center">
                <div className="card-title">status</div>
                <PieChartDemo  data={prop.analysis} name={prop.course} />
              </Card>
          </Grid>
          </>
            )})}

          </Grid>
        </div>
                            
      </Fragment>
    )
                }
    </div>
    </div>
    )
    );
  }
}
 


const  mapStateToProps = state => {
  console.log(state)
 return{
      dashboard:state.mainDashboard
  }
}

const mapDispatchToProps = dispatch => {
  return{
      fetchMainDashboard: () => dispatch(fetchMainDashboard())
  }
};


export default withStyles({}, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(
    Dashboard1
  )
);