import React, { Component } from "react";
import { RichTextEditor, Breadcrumb, editorConfiguration } from "matx";

import CKEditor from "@ckeditor/ckeditor5-react";
// NOTE: Use the editor from source (not a build)!
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

// import editorConfiguration from '../..'

class CkEditorForm extends Component {
  state = {
    content: `<h1>Matx | Matx Pro Admin Template</h1><p><a href="http://matx-react.ui-lib.com/" target="_blank"><strong>Matx</strong></a></p><p><br></p><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>`
  };

  handleContentChange = contentHtml => {
    this.setState({
      content: contentHtml
    });
  };

  render() {
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Forms", path: "/forms" },
              { name: "CkEditor" }
            ]}
          />
        </div>
        {/* <RichTextEditor
          content={this.state.content}
          handleContentChange={this.handleContentChange}
          placeholder="insert text here..."
        /> */}
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data={this.state.content}
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const ques_data = editor.getData();
            // this.setState({question:ques_data})
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default CkEditorForm;
