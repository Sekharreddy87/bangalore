import React, { Component } from 'react';

import axios from 'axios';
import { Select } from 'antd';
import {Text,View,Button, TextInput } from 'react-native';
import CKEditor from "@ckeditor/ckeditor5-react";
// NOTE: Use the editor from source (not a build)!
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import { message } from 'antd';

// import editorConfiguration from "../ContentPannel/ckeditor"
import {editorConfiguration } from "matx";



// import HTML from 'react-native-render-html';
const { Option } = Select;
// const { TextArea } = Input;

const newww = [ "English", "Science"
  ]

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }
class NewQuestionAnswer extends Component {
 
  constructor() {
    super();
    this.state = {
        question:"",
        answer:"",
        status:"TODO",
        reference:"",
        course_id:"",
        created_at:new Date(),
        created_by:"",
        keywords:"",
        subject_id:"",
        updated_at:new Date(),
        // updated_by:"1",
        currentDay: new Date(),
        course_dropdown:[],
        subject_dropdown:[],
        

    };
    this.getSubjects = this.getSubjects.bind(this);
    this.getCourse = this.getCourse.bind(this);
    this.handleAuthorCreated = this.handleAuthorCreated.bind(this);
  }

  async handleAuthorCreated() {
    const formData = new FormData();
    console.log(parseInt(localStorage.id))
    formData.append('question', this.state.question);
    formData.append('answer', this.state.answer);
    // formData.append('status', this.state.status);
    formData.append('course_id', this.state.course_id);
    formData.append('reference', this.state.reference);
    // formData.append('created_at', this.state.currentDay);
    formData.append('created_by', parseInt(localStorage.id));
    // formData.append('keywords', this.state.keywords);
    formData.append('subject_id', this.state.subject_id);
    // formData.append('updated_by', parseInt(localStorage.id));
    // formData.append('updated_at', this.state.currentDay);
    // formData.append('updated_by', this.state.updated_by);
    // formData.append('keywords', "dde");

    console.log(formData)
    
    message.info('Successfuly created');
    let options = {
      method:'POST',
      data:formData,
      url:"http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerCreateAPIView/",
      headers:{
        'Accept':'application/json', 
        'Content-Type': 'multipart/form-data',
        "Authorization": `JWT ${localStorage.getItem('token')}`
          }
      }
      console.log(this.state.question)
      console.log(this.state.answer)
      // console.log(this.state.status)
      console.log(this.state.course_id)
      console.log(this.state.subject_id)
      // console.log(this.state.created_at)
      // console.log(this.state.updated_at)
      // console.log(this.state.updated_by)
      console.log(this.state.created_by)
        let response = await axios(options)
        console.log(response)
  }

async getCourse(e) {
    let options = {
      method:'GET',
      url:"http://niranjan-sia.herokuapp.com/api/v1/chairman/get_subjects_by_course/",
      headers:{
        'Accept':'application/json', 
        "Authorization": `JWT ${localStorage.getItem('token')}`
      }
  }
  console.log(options)
  let response = await axios(options)
  console.log(response)
  let accessCourse
  let role = localStorage.getItem('role')
  // newww.map((item,key) => { console.log(item)
  if (role === "Admin"){
    accessCourse = response.data.courses
  }
  else if (localStorage.getItem('course') !== null){
    accessCourse = response.data.courses.filter(course => course.name === localStorage.getItem('course'))
  }
  else {
    accessCourse = response.data.courses
  }
  

  await this.setState({ 
    course_dropdown:accessCourse
                })
    
              };
  

async getSubjects(id){
this.setState({course_id:id})

let options = {
  method:'GET',
  url:`http://niranjan-sia.herokuapp.com/api/v1/chairman/get_subjects_by_course/?course=${id}`,
  headers:{
    'Accept':'application/json', 
    "Authorization": `JWT ${localStorage.getItem('token')}`
  }
}
console.log(options)
let response = await axios(options)
console.log(response)
await this.setState({ 
  subject_dropdown:response.data.subjects
            })
          };





  render() {
    
    const usersOnline = this.state.course_dropdown.filter(course => course.name === "English");
    return (
      <div>
      <View style={{ justifyItems:"center"}}>

                <View style={{width:"95%", alignSelf:"center",justifyContent:"space-between", flexDirection:"row"}}>
                <Select
                  defaultValue="select"
                  style={{ width: 250 }}
                  onChange={e => this.setState({course_id:e})}
                  onFocus={e=>this.getCourse(e)}
                  onSelect={e=>this.getSubjects(e)}
                >
                  <Option key="select" value="select">Choose Course</Option>
                  
                  {this.state.course_dropdown.map((value,key) => {
                  return (<Option key={value.id} value={value.id}>{value.name}</Option>)
                })
                  }
                </Select>
                
                <Select
                  defaultValue="select"
                  style={{ width: 250 }}
                  onChange={e => this.setState({subject_id:e})}
                  // onFocus={e=>this.getSubjects(e)}
                >
                  <Option key="select" value="select">Choose Subject</Option>
                  {this.state.subject_dropdown.map((value,key) => {
                  return (<Option key={value.id} value={value.id}>{value.name}</Option>)

                })
                  }
                </Select>
                </View>
                <View style={{width:"95%", alignSelf:"center"}}>
                  <Text style={{textAlign:"center"}}>Tags</Text>
  

                  <TextInput 
                  placeholder="  Referance area" 
                  style={{ height: 30, backgroundColor: 'white', borderWidth:0.1, borderColor:"gray"}}
                  onChangeText={text =>  this.setState({reference:text})}
                  value={this.state.reference}
                /> 
                <div style={{ margin: '5px 0' }} />  


                <Text style={{textAlign:"center"}} > Question
                </Text>
                <CKEditor
                  editor={ClassicEditor}
                  config={editorConfiguration}
                  data={this.state.question}
                  onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const ques_data = editor.getData();
                    this.setState({question:ques_data})
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
                
                </View>
                <View style={{width:"95%", alignSelf:"center"}}>
                <Text style={{textAlign:"center"}}> Answer
                </Text>
                <CKEditor
                  editor={ClassicEditor}
                  config={editorConfiguration}
                  data={this.state.answer}
                  onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const ans_data = editor.getData();
                    this.setState({answer:ans_data})
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
                
                </View>
                <div style={{ margin: '5px 0' }} />  
                <View style={{width:"95%", alignSelf:"center"}}>

                <Select
                  defaultValue={this.state.status }
                  style={{ width: 120 }}
                  // onChange={e => this.setState({status:e})}
                  onChange={e=>this.setState({status:e})}
                >
                   <Option value="REJECT">REJECT</Option>
                   <Option value="TODO">TODO</Option>
                   <Option value="APPROVED">APPROVED</Option>
                </Select>                             
                </View>
                
                <View style={{width:"20%",alignSelf:"center"}}>
                <Button  onPress={this.handleAuthorCreated} title="  Submit  " color="gray" accessibilityLabel="Tap on Me"/>
                </View>
              
                
        </View >

        </div>
    );
}
}

export default NewQuestionAnswer;
