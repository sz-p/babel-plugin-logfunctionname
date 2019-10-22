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
        if (path.node.id &&
          path.node.id.name &&
          path.node.id.type === 'Identifier' &&
          path.node.id.name[0] !== '_' &&
          (path.node.id.name !== 'get' || path.node.id.name !== 'set')) {
          insertLog(path, path.node.id.name);
        }
      },
      VariableDeclarator(path) {
        if (path.node.init && (
          path.node.init.type === 'FunctionExpression' ||
          path.node.init.type === 'ArrowFunctionExpression'
        )) {
          insertLog(path.get('init'), path.node.id.name);
        }
      },
    }
  };
};
module.exports = exports["default"];