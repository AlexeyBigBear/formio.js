export default {
  form: `
<{{input.type}} 
  ref="button" 
  name="{{input.attr.name}}" 
  type="{{input.attr.type}}" 
  class="ui button {{component.theme}} {{component.customClass}}" 
  lang="{{input.attr.lang}}" 
  {% if (input.attr.placeholder) { %}placeholder="{{input.attr.placeholder}}"{% } %}
  {% if (input.attr.tabindex) { %}tabindex="{{input.attr.tabindex}}"{% } %}
>
{% if (component.leftIcon) { %}<i class="{{component.leftIcon}}"></i>&nbsp;{% } %}
{{input.content}}
{% if (component.rightIcon) { %}&nbsp;<i class="{{component.rightIcon}}"></i>{% } %}
</{{input.type}}>
`,
};