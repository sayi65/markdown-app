<template>
  <v-content grid-list-lg text-xs-left>
    <v-layout justify-center column>
      <v-flex class="px-4">
        <v-text-field
          ref="tittle"
          v-model="tittle"
          name="tittle"
          type="text"
          label="Tittle"
          color="green"
          counter
          single-line
          outline
          clearable
          required
        ></v-text-field>
      </v-flex>
      <v-layout v-resize="onResize" row wrap justify-center>
        <v-flex class="px-4">
          <no-ssr placeholder="Loading...">
            <editor
              v-model="editorText"
              mode="markdown"
              preview-style="vertical"
              :height="`${editorResizeHeight}` + 'px'"
              :options="editorOptions"
              :visible="editorVisible"
              class="editor"
            />
          </no-ssr>
        </v-flex>

        <!-- Markdown Viewer
      <TuiEditorViewer :value="editorText" /> -->
      </v-layout>
      <v-spacer />
      <v-layout justify-end column>
        <v-spacer></v-spacer>
        <v-flex class="px-3">
          <v-btn color="success" class="btn-positon">Save</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      tittle: null,
      editorResizeHeight: 400,
      editorText: '# This is Viewer.\n Hello World.',
      editorVisible: true,
      editorOptions: {
        hideModeSwitch: true,
        // useCommandShortcut: true,
        usageStatistics: false,
        // usageStatistics: true
        exts: [
          'scrollSync',
          'colorSyntax',
          'uml',
          'mark',
          'table',
          {
            name: 'chart',
            minWidth: 500,
            minHeight: 300,
            maxWidth: 800,
            maxHeight: 800
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
  background-color: #fff0 !important;
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

.tui-editor-contents pre {
  color: #efefef !important;
  background: #414a5d !important;
}

* {
  background-repeat: inherit;
}
</style>
