import React, {useEffect, useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import {Text, TextInput, View} from "react-native";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import {editorConfiguration} from "../../../matx";
import axios from "axios";
import {Select} from 'antd';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const {Option} = Select;


async function fetchById(id) {
    return await axios.get(`http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/${id}/`, {
        headers: {
            'Accept': 'application/json',
            "Authorization": `JWT ${localStorage.getItem('token')}`
        }
    }).then((res) => {
        debugger;

        return res.data;

    }).catch((err) => {
        debugger;

    })
    /* let options = {
         method: 'GET',
         url: `http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/${id}/`,
         headers: {
             'Accept': 'application/json',
             "Authorization": `JWT ${localStorage.getItem('token')}`
         }
     }
     return axios(options).catch((err) => {
         debugger;
     })*/
}

async function updateQuestion(id, formData) {
    return await axios.put(`http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/${id}/`,
        getFormData(formData)
        , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `JWT ${localStorage.getItem('token')}`
            }
        }).then((res) => {

        debugger;

    }).catch((err) => {

    })
}

function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}


const QueryTableUpdate = ({handleQueryTableUpdate, updateQueryTable, onSubmit, row}) => {
    const [selectedQuestion, setSelectedQuestion] = useState({});
    useEffect(() => {
        fetchById(row.id).then((res) => {
            setSelectedQuestion(res);
        })
    }, [row.id]);
    const handleChange = (value, name) => {
        debugger;
        if (selectedQuestion && Object.keys(selectedQuestion).length > 0) {
            selectedQuestion[name] = value;
            setSelectedQuestion(selectedQuestion);
        }
    }
    const Submit = () => {
        debugger;
        updateQuestion(row.id, selectedQuestion).then((res) => {
        })
        onSubmit();
    }


    return (
        <Dialog maxWidth={'lg'} open={updateQueryTable} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">webTechnology</DialogTitle>
            <DialogContent>
                {/*<DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>*/}
                <View style={{width: "95%", alignSelf: "center"}}>
                    <Text style={{textAlign: "center"}}>Tags</Text>
                    <TextInput
                        placeholder="  Referance area"
                        style={{height: 30, backgroundColor: 'white', borderWidth: 0.1, borderColor: "gray"}}
                        value='reference value'
                    /><br/>

                    <CKEditor
                        name='question'
                        editor={ClassicEditor}
                        config={editorConfiguration}

                        data={selectedQuestion && selectedQuestion.question ?
                            selectedQuestion.question : ''}
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                            handleChange(editor.getData(), 'question');
                        }}
                        onBlur={(event, editor) => {
                        }}
                        onFocus={(event, editor) => {
                        }}
                    />
                    <Text style={{textAlign: "center"}}> Answer
                    </Text>
                    <CKEditor
                        name="answer"
                        editor={ClassicEditor}
                        config={editorConfiguration}
                        data={selectedQuestion && selectedQuestion.answer ? selectedQuestion.answer : ''}
                        onInit={editor => {
                        }}
                        onChange={(event, editor) => {
                            handleChange(editor.getData(), 'answer');
                        }}
                        onBlur={(event, editor) => {
                        }}
                        onFocus={(event, editor) => {
                        }}
                    /><br/><br/>
                    <div>
                        {/* <Select
                            labelInValue
                            defaultValue={{key: 'TODO'}}
                            style={{width: 220}}
                            onChange={e => alert(e)}
                        >
                            <Option value="TODO">TODO</Option>
                            <Option value="APPROVED">APPROVED</Option>
                            <Option value="REJECT">REJECT</Option>
                        </Select>*/}
                        <label htmlFor="cars">Action</label>

                        <select name="cars" id="cars" onChange={(e) => {
                            handleChange(e.target.value, 'status')
                        }}>
                            <option
                                selected={selectedQuestion && selectedQuestion.status && selectedQuestion.status === 'TODO'}
                                value="TODO">TODO
                            </option>
                            <option
                                selected={selectedQuestion && selectedQuestion.status && selectedQuestion.status === 'APPROVED'}
                                value="APPROVED">APPROVED
                            </option>
                            <option value="REJECT"
                                    selected={selectedQuestion && selectedQuestion.status && selectedQuestion.status === 'REJECT'}>REJECT
                            </option>
                        </select>
                        {/*<FormControl fullWidth>
                        <Select
                            name="status"
                            value='TODO'
                            onChange={(event) => {
                                alert(event);
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='TODO'>TODO</MenuItem>
                            <MenuItem value='REJECT'>REJECT</MenuItem>
                            <MenuItem value='APPROVED'>APPROVED</MenuItem>
                        </Select>
                    </FormControl>*/}
                    </div>
                </View>
                {JSON.stringify(row)}*/}
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleQueryTableUpdate}>
                    Cancel
                </Button>
                <Button color="primary" onClick={Submit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>)

};

export default QueryTableUpdate;
QueryTableUpdate.propTypes = {
    updateQueryTable: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleQueryTableUpdate: PropTypes.bool.isRequired
};