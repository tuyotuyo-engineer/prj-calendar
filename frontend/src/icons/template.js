const tips = `
  // このファイルは自動生成されています。直接編集しないでください。
`

const template = (variables, { tpl }) => {
  return tpl`
${tips}
${variables.imports};
${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
`
}

module.exports = template