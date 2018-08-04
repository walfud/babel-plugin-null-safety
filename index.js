module.exports = function({types: t}) {
    return {
        visitor: {
            Identifier(path, state) {
                // console.log(path.node.name)
            },
            BinaryExpression(path) {
                if (path.node.operator !== '===') {
                    return
                }

                console.log(path.node.property)
            }
        }
    }
}