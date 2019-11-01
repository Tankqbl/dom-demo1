window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments === 3) {
            node.style[name] = value
        }
        else if (arguments === 2) {
            if (typeof name === "string") {
                return node.style[name]
            }
            else if (name instanceof Object) {
                let object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}
