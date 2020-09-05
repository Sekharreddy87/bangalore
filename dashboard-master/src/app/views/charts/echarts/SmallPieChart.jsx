import React, {Component } from 'react';
import {
  PieChart, Pie, Cell,Tooltip, Legend,Label,ResponsiveContainer
} from 'recharts';

// import { Spin } from 'antd';
// import {  View } from 'react-native';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#0088FE', '#00C49F', '#FFBB28', '#FF8042','#0088FE', '#00C49F', '#FFBB28', '#FF8042','#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="dark" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// const renderLegend = (props) => {
//   const { payload } = props;
//   return (
//     <ul>
//       {
//         payload.map((entry, index) => (
//           <li key={`item-${index}`} color={entry.color}>{entry.value} {entry.payload.percent*100} {entry.payload.value} {entry.color}</li>
//         ))
//       }
//     </ul>
//   );
// }
class PieChartDemo extends Component {
  // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
  constructor() {
    super();
    this.state = {
      isLoading:false,
      data:[],
      name:""
    };
  }

async componentDidMount() {
  setInterval(async () => {
  if (this.state.data !== this.props.data){
    this.setState({
      data:this.props.data,
      name:this.props.name,
      isLoading:true
    })
}
}, 3000);
    // console.log(this.props.data)
    // console.log(this.state.data)
    // console.log(this.state.isLoading)
    // console.log(this.props.link_screen)
  };
  render() {
    return (
        
        <ResponsiveContainer aspect={4.0/4.05} width='100%'>
        <PieChart >
        <Pie 
        data={this.state.data} 
        // cx={125}
        // cy={125} 
        innerRadius={"60%"}
        outerRadius={"100%"} 
        fill="#8884d8"
        // paddingAngle={5}
        dataKey="value"
        
        label={renderCustomizedLabel}
        >
        <Label 
        key="1" value={this.state.data.reduce((prev,next) => prev + next.value,0)} position="centerBottom"  className='label-top' fontSize='27px'
        />
        <Label key="2"
        value="Question's" position="centerTop" className='label'
        />
          {
          	this.state.data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip />
        {/* <Legend verticalAlign="right"/> */}
        <Legend verticalAlign="bottom" />
        {/* <Legend layout="horizontal" verticalAlign="bottom" align="center"/> */}
        {/* <Legend content={renderLegend} /> */}
        {/* <Legend
            layout="vertical"
            wrapperStyle={{
              paddingTop: "20px"
          }}
            payload={
              
              data.map(
                item => ({

                  id: item.name,
                  type: "square",
                  color:item.color,
                value: <Text>{item.name}  {item.value}</Text>,
                })
                
              )
            }
          />         */}
      </PieChart>
      </ResponsiveContainer>
    );
  }
}
const styles = {
  spinnerStyle: {
  // flex: 1,
  justifyContent: 'center',
  alignItems:'center',
  margin: 15, 
  backgroundColor: '#fff',width:250,height:250
   }
   };
export default PieChartDemo;