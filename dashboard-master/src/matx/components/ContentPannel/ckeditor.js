
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';

import LineHeight from './line-space/src/lineheight';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';     // <--- ADDED

import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

import MathType from '@wiris/mathtype-ckeditor5';

import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Clipboard from  '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Enter from '@ckeditor/ckeditor5-enter/src/enter'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak'

import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportword';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';

import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';

//https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/using-react-in-a-widget.html
import './ckeditor.css'
const customColorPalette = [
  {
      color: 'hsl(4, 90%, 58%)',
      label: 'Red'
  },
  {
      color: 'hsl(340, 82%, 52%)',
      label: 'Pink'
  },
  {
      color: 'hsl(291, 64%, 42%)',
      label: 'Purple'
  },
  {
      color: 'hsl(262, 52%, 47%)',
      label: 'Deep Purple'
  },
  {
      color: 'hsl(231, 48%, 48%)',
      label: 'Indigo'
  },
  {
      color: 'hsl(207, 90%, 54%)',
      label: 'Blue'
  },

  // ...
];

const templateCSS = '.styled { font-weight: bold; text-align: center; }'
const editorConfiguration = {
  plugins: [
    //   Essentials, Bold, Italic, Paragraph, 
    BlockToolbar, ParagraphButtonUI, HeadingButtonsUI,
    EssentialsPlugin,
    AutoformatPlugin,
    Alignment,  
    Underline,
    Strikethrough,
    Code,
    LineHeight,
    TextTransformation,
    Subscript,
    Superscript,  
    Autosave, 
    BoldPlugin,
    ItalicPlugin,
    BlockQuotePlugin,
    HeadingPlugin,
    ImagePlugin,
    ImageCaptionPlugin,
    ImageStylePlugin,
    ImageToolbarPlugin,
    EasyImagePlugin,
    ImageUploadPlugin,
    ImageResize,
    LinkPlugin,
    ListPlugin,
    ParagraphPlugin,
    UploadAdapterPlugin,
    Base64UploadAdapter,
    Clipboard,
    Enter,
    // CKFinder,
    HorizontalLine,
    Table, TableToolbar, TableProperties, TableCellProperties,
    SpecialCharacters, SpecialCharactersEssentials,SpecialCharactersMathematical,
    CodeBlock,ExportPdf,ExportWord,SimpleUploadAdapter,SelectAll,LinkImage,MediaEmbed,

   MathType  ,    
    Font,
    Highlight,
    Indent, IndentBlock,
    Mention,
    PasteFromOffice,
    RemoveFormat,
    PageBreak,
    TodoList,
],
  toolbar: {
    blockToolbar: [
      'paragraph', 'heading1', 'heading2', 'heading3',
      '|',
      'bulletedList', 'numberedList',
      '|',
      'blockQuote', 'imageUpload'
  ],
    items: [
    
    'heading',
    '|','lineHeight',
    'alignment', 'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor',
  'bold',
  'italic',
  'underline', 
  'bulletedList',
  'numberedList','MathType', 'ChemType',
  'specialCharacters','codeBlock','selectAll',
  'imageUpload','mediaEmbed', 'insertTable','indent', 'outdent',
  'highlight',
  'horizontalLine','pageBreak',
"|",
'strikethrough',  'subscript',
			'superscript', 'removeFormat',
  'blockQuote','todoList',
  'undo',
  'redo',
  'linkImage',
  'tableColumn', 'tableRow', 'mergeTableCells',
  'tableProperties', 'tableCellProperties',
  'imageStyle:alignLeft',
  'imageStyle:alignRight',
  'imageTextAlternative',
  'code',
  
  
]},
fontSize: { options: [9, 10, 11, 12, 14, 19, 21, 24] },
exportPdf: {
  stylesheets: [ 'EDITOR_STYLES' ],
  fileName: 'document.pdf',
  converterUrl: 'https://pdf-converter.cke-cs.com/v1/convert',
  converterOptions: {
      format: 'A4',
      page_orientation: 'portrait',
      wait_for_network: true,
      wait_time: 0,
      margin_top: '15mm',
      margin_bottom: '15mm',
      margin_right: '15mm',
      margin_left: '15mm',
      header_html: '<div class="styled">Header content</div>',
      footer_html: '<div class="styled-counter"><span class="pageNumber"></span></div>',
      header_and_footer_css: '#header, #footer { background: hsl(0, 0%, 95%); } .styled { font-weight: bold; text-align: center; } .styled-counter { font-size: 1em; color: hsl(0, 0%, 60%); }',

  }
},
exportWord: {
  fileName: 'document.docx',
  converterUrl: 'https://docx-converter.cke-cs.com/v1/convert',
  stylesheets: [ 'EDITOR_STYLES' ],
  converterOptions: {
      header: [
        // Header template for all headers (without `type` property).
        { html: '<div class="styled">Default header content</div>', css: templateCSS },
        // Header template only for the first page of the document.
        { html: '<div class="styled">First document page header content</div>', css: templateCSS, type: 'first' },
        // Header template for the every even page of the document.
        { html: '<div class="styled">Every even page header content</div>', css: templateCSS, type: 'even' },
        // Header template for the every odd page of the document.
        { html: '<div class="styled">Every odd page header content</div>', css: templateCSS, type: 'odd' }
    ],
      footer: [
        // Footer template for all footers (without `type` property).
        { html: '<div class="styled">Default footer content</div>', css: templateCSS },
        // Footer template only for the first page of the document.
        { html: '<div class="styled">First document page footer content</div>', css: templateCSS, type: 'first' },
        // Footer template for the every even page of the document.
        { html: '<div class="styled">Every even page footer content</div>', css: templateCSS, type: 'even' },
        // Footer template for the every odd page of the document.
        { html: '<div class="styled">Every odd page footer content</div>', css: templateCSS, type: 'odd' }
    ],
  
}},
// simpleUpload: {
//   // The URL that the images are uploaded to.
//   uploadUrl: 'http://example.com',

//   // Enable the XMLHttpRequest.withCredentials property.
//   withCredentials: true,

//   // Headers sent along with the XMLHttpRequest to the upload server.
//   headers: {
//       'X-CSRF-TOKEN': 'CSFR-Token',
//       Authorization: 'Bearer <JSON Web Token>'
//   }
// },
// ckfinder: {
//   // Upload the images to the server using the CKFinder QuickUpload command.
//   // uploadUrl: 'file:///C:/Users/Niranjan/Pictures/Screenshots/',

//   // Define the CKFinder configuration (if necessary).
//   options: {
//       resourceType: 'Images'
//   },
//   // openerMethod: 'popup'
// },
  image: {
    toolbar: [
        'imageStyle:full',
        'imageStyle:alignLeft',
        'imageStyle:alignRight',
        'imageTextAlternative'
    ],
    styles: [
      // This option is equal to a situation where no style is applied.
      'full',

      // This represents an image aligned to the left.
      'alignLeft',

      // This represents an image aligned to the right.
      'alignRight',
      
  ]
},

heading: {
  options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      {
          model: 'headingFancy',
          view: {
              name: 'h2',
              classes: 'fancy'
          },
          title: 'Heading 2 (fancy)',
          class: 'ck-heading_heading2_fancy',

          // It needs to be converted before the standard 'heading2'.
          converterPriority: 'high'
      },
      
      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
      { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
      { model: 'heading7', view: 'h7', title: 'Heading 7', class: 'ck-heading_heading7' },
  ]
},
indentBlock: {
  offset: 1,
  unit: 'em'
},
language: 'en',

table: {
  contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells',
  'tableProperties', 'tableCellProperties', ],
  tableToolbar: [ 'bold', 'italic' ],
  tableProperties: {
    borderColors: customColorPalette,
    backgroundColors: customColorPalette
},

// Set the palettes for table cells.
tableCellProperties: {
    borderColors: customColorPalette,
    backgroundColors: customColorPalette
      }
    },

config: {
			ui: {
				width: '500px',
				height: '300px'
			}
		}    
};


export default editorConfiguration ;