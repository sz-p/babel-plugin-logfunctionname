exports.default = function (babel) {
  return {
    visitor: {
      Program(path, state) {
        const { excludeFunctionsName, functionWorkingHint, excludeFilesName, enable } = { ...state.opts };
        if (enable === false || excluded(state.filename, excludeFilesName)) {
          return;
        }
        path.traverse({
          Function(path) {
            // Function
            // example function functionHere() { }
            if (path.node.id &&
              path.node.id.name &&
              path.node.id.type === 'Identifier' &&
              path.node.id.name[0] !== '_' &&
              (path.node.id.name !== 'get' || path.node.id.name !== 'set')) {
              insertLog(babel.types, path, path.node.id.name, excludeFunctionsName, functionWorkingHint);
            }
            // VariableDeclarator
            // example const functionName = function () {}
            else if (path.parent.type === 'VariableDeclarator' &&
              path.parent.id.name
            ) {
              insertLog(babel.types, path, path.parent.id.name, excludeFunctionsName, functionWorkingHint);
            }
            // ClassMethod
            // example class ClassFunction { seyHello() { }}
            else if (path.node.type === 'ClassMethod' &&
              path.node.key.type === 'Identifier' &&
              path.node.key.name !== 'constructor'
            ) {
              insertLog(babel.types, path, path.node.key.name, excludeFunctionsName, functionWorkingHint);
            }
            // Class
            // example class ClassFunction {}
            else if (path.node.type === 'ClassMethod' &&
              path.parentPath.type === 'ClassBody' &&
              path.parentPath.parent &&
              path.parentPath.parent.type === 'ClassDeclaration' &&
              path.parentPath.parent.id.name
            ) {
              insertLog(babel.types, path, path.parentPath.parent.id.name, excludeFunctionsName, functionWorkingHint);
            }
            // AssignmentExpression
            // example this.getName = function () {}
            else if (path.parent.type === 'AssignmentExpression' &&
              path.parent.left.type === 'MemberExpression' &&
              path.parent.left.property.type === 'Identifier' &&
              path.parent.left.property.name
            ) {
              insertLog(babel.types, path, path.parent.left.property.name, excludeFunctionsName, functionWorkingHint);
            }
          }
        })
      }
    }
  };
};

const excludedByRegExp = function (name, excludeNames) {
  for (let i = 0; i < excludeNames.length; i++) {
    if (excludeNames[i].constructor &&
      excludeNames[i].constructor.name === 'RegExp' && (
        excludeNames[i].test(name) ||
        excludeNames[i].test(name.substring(name.lastIndexOf('\\') + 1, name.indexOf('.')))
      )) {
      return true;
    }
  }
  return false;
}
const excluded = function (name, excludeNames) {
  if ((excludeNames &&
    excludeNames.constructor &&
    excludeNames.constructor.name === 'Array') &&
    ((excludeNames.indexOf(name) !== -1 ||
      excludeNames.indexOf(name.substring(name.lastIndexOf('\\') + 1, name.indexOf('.'))) !== -1) ||
      excludedByRegExp(name, excludeNames))) {
    return true;
  }
  return false;
}
const insertLog = function (t, path, functionName, excludeFunctionsName, functionWorkingHint) {
  if (!excluded(functionName, excludeFunctionsName)) {
    path.get('body')
      .unshiftContainer('body',
        t.expressionStatement(
          t.callExpression(
            t.memberExpression(
              t.identifier('console'), t.identifier('log')
            ),
            [t.stringLiteral((functionWorkingHint || 'function_working:') + functionName)]
          )
        )
      );
  }
}

module.exports = exports["default"];