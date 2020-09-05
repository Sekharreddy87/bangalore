import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';


import PieChartDemo from "../charts/echarts/SmallPieChart";
import {View, Button, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import QueryTableUpdate from './QueryTableUpdate';
import {Table, Select, message} from 'antd';
import UpgradeCard from "../dashboard/shared/UpgradeCard";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const {Option} = Select;


const gridStyle = {
    width: '25%',
    height: '25%',
    padding: '0px',
    margin: '20px',
};

async function handleChange(e, id) {
    const formData = new FormData();

    formData.append('status', e.value);
    formData.append('updated_by', localStorage.getItem('id'));


    message.info('Changed Status to ' + e.value);
    let options = {
        method: 'PATCH',
        data: formData,
        url: `http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/${id}/`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            "Authorization": `JWT ${localStorage.getItem('token')}`
        }
    }
    let response = await axios(options).catch(error => {
        console.log(error)
    })
    console.log(response)
}


class QueryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            course_id: "",
            subject_id: "",
            course_dropdown: [],
            subject_dropdown: [],
            courseName: "",
            subjectName: "",
            updateQueryTable: false,
            selectedRow: {}
        };
        this.handleQueryTable = this.handleQueryTable.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidMount() {
    }


    columns = [
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
            render: function (html) {
                return <div dangerouslySetInnerHTML={{__html: html}}/>
            },

        },
        {
            title: 'Occurrence',
            dataIndex: 'count',
            key: 'count',
            width: '10%',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.count - b.count,

        },
        {
            title: 'Status',
            dataIndex: '',
            width: '10%',
            key: "xx",
            // filterMultiple: true,
            // onFilter: (value, record) => record.status.indexOf(value) === 0,
            // filters: [
            //   {
            //     text: 'TODO',
            //     value: 'TODO',
            //   },
            //   {
            //     text: 'APPROVED',
            //     value: 'APPROVED',
            //   },
            //   {
            //     text: 'REJECT',
            //     value: 'REJECT',
            //   },
            // ],
            render: (records) => (
                <Select
                    labelInValue
                    defaultValue={{key: records.status}}
                    style={{width: 120}}
                    onChange={e => handleChange(e, records.id)}
                >
                    {records.status ? <Option value="TODO">TODO</Option> : ""}
                    {records.status ? <Option value="APPROVED">APPROVED</Option> : ""}
                    {records.status ? <Option value="REJECT">REJECT</Option> : ""}
                </Select>

            ),

        },
        {
            title: 'Action',
            dataIndex: '',
            width: '10%',
            key: 'x',
            render: (record) => (
                /*<View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
                  {record.status ?
                  <a href={`https://sia-quest.web.app/question/detail/${record.id}`} style={{color:'black'}} target="_blank" >Edit</a>: <a></a>}
                {/!* <TouchableOpacity style={{width:40, height:30, flex:1}}
                onPress={()=> window.open("http://localhost:3000/question/detail/"+record.id)}>

                {record.status ? <p>Edit</p> : <a></a>}
                </TouchableOpacity> *!/}
              </View>*/
                <React.Fragment>
                    {record.status ?
                        <View style={{flex: 1, flexDirection: "row", justifyContent: "center", cursor: 'pointer'}}
                              onClick={(e) => {
                                  this.handleQueryTable(record)
                              }}
                        >Edit</View> : ''}
                    <QueryTableUpdate handleQueryTableUpdate={this.handleQueryTable}
                                      onSubmit={this.onSubmit} row={this.state.selectedRow}
                                      updateQueryTable={this.state.updateQueryTable}/>
                </React.Fragment>
            ),
        }
    ];


    handleQueryTable(record) {
        this.setState({
            selectedRow: record
        }, () => {
            this.setState({
                updateQueryTable: !this.state.updateQueryTable
            })
        })

    }

    onSubmit() {
        this.setState({
            updateQueryTable: !this.state.updateQueryTable
        })

    }


    async getCourse(e) {

        let options = {
            method: 'GET',
            url: "http://niranjan-sia.herokuapp.com/api/v1/chairman/get_subjects_by_course/",
            headers: {
                'Accept': 'application/json',
                "Authorization": `JWT ${localStorage.getItem('token')}`
            }
        }
        console.log(options)
        let response = await axios(options)
        console.log(response)
        let accessCourse
        let role = localStorage.getItem('role')
        // newww.map((item,key) => { console.log(item)
        if (role === "Admin") {
            accessCourse = response.data.courses
        } else if (localStorage.getItem('course') !== null) {
            accessCourse = response.data.courses.filter(course => course.name === localStorage.getItem('course'))
        } else {
            accessCourse = response.data.courses
        }

        await this.setState({
            course_dropdown: accessCourse
        })

    };


    async getSubjects(id) {
        this.setState({course_id: id})

        let options = {
            method: 'GET',
            url: `http://niranjan-sia.herokuapp.com/api/v1/chairman/get_subjects_by_course/?course=${id}`,
            headers: {
                'Accept': 'application/json',
                "Authorization": `JWT ${localStorage.getItem('token')}`
            }
        }
        console.log(options)
        let response = await axios(options)
        console.log(response)
        await this.setState({
            subject_dropdown: response.data.subjects
        })
    };

    async updateSubject(e) {
        await this.setState({subject_id: e})
        this.asyncfetchQuery(e)
    }

    async asyncfetchQuery(subject) {

        const formData = new FormData();

        formData.append('subject_id', subject);
        formData.append('course_id', this.state.course_id);


        let options = {
            method: 'POST',
            url: "http://niranjan-sia.herokuapp.com/api/v1/utility/count_duplicate_question/",
            data: formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `JWT ${localStorage.getItem('token')}`
            }
        }

        console.log(this.state.course_id)
        console.log(this.state.subject_id)
        let response = await axios(options)
        console.log(response.data)
        if (response.data !== "") {

            await this.setState({
                tableData: response.data.result.data,
                statusData: response.data.result.analysis.status,
                origDuplicateData: response.data.result.analysis.ori_dup,

            })
        } else {

            message.error('No match found ');
        }

        console.log(this.state.tableData)
    }


    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    render() {
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({selectedRowKeys: newSelectedRowKeys});
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({selectedRowKeys: newSelectedRowKeys});
                    },
                },
            ],
        };
        return (
            <div>{
                this.state.statusData !== undefined ?
                    <View style={{flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#CCC',}}>

                        <View style={gridStyle}>

                            <Text style={{textAlign: 'center'}}>Status</Text>
                            <PieChartDemo data={this.state.statusData} link_screen={() => console.log("ok")}/>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontSize: 20}}>
                                {this.state.subjectName}
                            </Text>
                        </View>

                        <View style={gridStyle}>
                            <Text style={{textAlign: 'center'}}>Duplicates vs Original</Text>
                            <PieChartDemo data={this.state.origDuplicateData} link_screen={() => console.log("ok")}/>

                        </View>


                    </View> : ""}


                <View style={{
                    width: "95%",
                    paddingBottom: 20,
                    alignSelf: "center",
                    justifyContent: "space-between",
                    flexDirection: "row"
                }}>
                    <Select
                        defaultValue="select"
                        style={{width: 250}}
                        onChange={e => this.setState({course_id: e})}
                        onFocus={e => this.getCourse(e)}
                        onSelect={e => this.getSubjects(e)}
                    >
                        <Option key="select" value="select">Choose Course</Option>
                        {this.state.course_dropdown.map((value, key) => {
                            return (<Option key={value.id} value={value.id}>{value.name}</Option>)
                        })
                        }
                    </Select>

                    <Select
                        defaultValue="select"
                        style={{width: 250}}
                        onChange={e => this.updateSubject(e)}
                        // onFocus={e=>this.getSubjects(e)}
                        // onSelect={e=>this.getSubjects(e)}
                    >
                        <Option key="select" value="select">Choose Subject</Option>
                        {this.state.subject_dropdown.map((value, key) => {
                            return (<Option key={value.id} value={value.id}>{value.name}</Option>)

                        })
                        }
                    </Select>
                </View>


                <Table onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            // alert(JSON.stringify(record))
                        }, // click row

                    };
                }} rowSelection={rowSelection} columns={this.columns} dataSource={this.state.tableData}
                       onChange={this.onChange}/>
            </div>
        );

    }
}

export default QueryTable;