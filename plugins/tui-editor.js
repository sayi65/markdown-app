import Vue from 'vue'
import { Editor } from '@toast-ui/vue-editor'

// css
import 'codemirror/lib/codemirror.css'
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'tui-chart/dist/tui-chart.css'
import 'tui-color-picker/dist/tui-color-picker.min.css'
import 'highlight.js/styles/atom-one-dark.css'

// js
import 'tui-editor/dist/tui-editor-extTable.js'
import 'tui-editor/dist/tui-editor-extColorSyntax.js'
import 'tui-editor/dist/tui-editor-extScrollSync.js'
import 'tui-editor/dist/tui-editor-extUML.js'
import 'tui-editor/dist/tui-editor-extChart.js'

Vue.component('editor', Editor)
