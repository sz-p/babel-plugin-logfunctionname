exports.default = function (babel) {
  const t = babel.types;
  const insertLog = function (path, functionName) {
    path.get('body')
      .unshiftContainer('body',
        t.expressionStatement(
          t.callExpression(
            t.memberExpression(
              t.identifier('console'), t.identifier('log')
            ),
            [t.stringLiteral('function_working:' + functionName)]
          )
        )
      );
  }
  return {
    visitor: {
      Function(path) {
        // Function
        // example function functionHere() { }
        if (path.node.id &&
          path.node.id.name &&
          path.node.id.type === 'Identifier' &&
          path.node.id.name[0] !== '_' &&
          (path.node.id.name !== 'get' || path.node.id.name !== 'set')) {
          insertLog(path, path.node.id.name);
        }
        // VariableDeclarator
        // example const functionName = function () {}
        else if (path.parent.type === 'VariableDeclarator' &&
          path.parent.id.name
        ) {
          insertLog(path, path.parent.id.name);
        }
        // AssignmentExpression
        // example this.getName = function () {}
        else if (path.parent.type === 'AssignmentExpression' &&
          path.parent.left.type === 'MemberExpression' &&
          path.parent.left.property.type === 'Identifier' &&
          path.parent.left.property.name
        ) {
          insertLog(path, path.parent.left.property.name);
        }
      }
    }
  };
};
module.exports = exports["default"];