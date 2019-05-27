<template>
  <v-content grid-list-lg text-xs-left>
    <v-layout justify-center column>
      <v-flex class="px-4 pb-2">
        <v-text-field
          ref="tittle"
          v-model="tittle"
          name="tittle"
          type="text"
          label="Tittle"
          counter
          single-line
          outline
          clearable
          required
        ></v-text-field>
      </v-flex>
      <v-layout v-resize="onResize" row wrap justify-center>
        <v-flex class="px-4">
          <TuiEditor
            v-model="editorText"
            mode="markdown"
            preview-style="vertical"
            :height="`${editorResizeHeight}` + 'px'"
            :options="editorOptions"
            :visible="editorVisible"
            class="editor"
          />
        </v-flex>

        <!-- Markdown Viewer
      <TuiEditorViewer :value="editorText" /> -->
      </v-layout>
      <v-spacer />
      <v-layout justify-end column>
        <v-spacer></v-spacer>
        <v-flex class="px-3">
          <v-btn color="success" class="btn-positon">Success</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-content>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'tui-chart/dist/tui-chart.css'
import 'tui-color-picker/dist/tui-color-picker.min.css'

export default {
  data() {
    return {
      editorResizeHeight: 400,
      editorText: '# This is Viewer.\n Hello World.',
      editorVisible: true,
      editorOptions: {
        useCommandShortcut: true,
        usageStatistics: true,
        exts: [
          'scrollSync',
          'colorSyntax',
          'uml',
          'mark',
          'table',
          {
            name: 'chart',
            minWidth: 400,
            minHeight: 200,
            maxWidth: 600,
            maxHeight: 300
          }
        ]
      }
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.editorResizeHeight = window.innerHeight - 210
    }
  }
}
</script>
<style>
code {
  box-shadow: none !important;
}
.te-preview {
  background-color: white;
}
.te-table-selection {
  background-repeat: inherit !important;
}
.btn-positon {
  float: right;
}
</style>
