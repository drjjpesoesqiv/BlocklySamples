'use strict'

goog.provide('Blockly.Blocks.defaultToolbox');
goog.require('Blockly.Blocks');

Blockly.Blocks.defaultToolbox = '' +
'<xml id="toolbox-categories" style="display: none">'+
  '<category name="System" colour="#4C97FF" secondaryColour="#3373CC">'+
    '<block type="logger" id="logger">'+
      '<field name="TO_LOG">default text</field>'+
    '</block>'+
  '</categotry>' +
'</xml>';

Blockly.Blocks['logger'] = {
  /**
   * Block to log to console.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "log %1",
      "args0": [
        {
          "type": "field_input",
          "name": "TO_LOG",
          "text": "default text",
          "spellcheck": false
        }
      ]
    });
  }
};

Blockly.JavaScript['logger'] = function(block) {
  var to_log = block.getFieldValue('TO_LOG');
  return `console.log("${to_log}");`
};