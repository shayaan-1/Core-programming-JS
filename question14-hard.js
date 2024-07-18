//Given an absolute path for a Unix-style file system, which begins with a slash '/', transform this path into its simplified canonical path.
/**
 * @param {string} path
 * @return {string}
 */

function simplifyPath(path) {
    const parts = path.split('/');
    let arr = [];

    for (let part of parts) {
        if (part === '' || part === '.') {
            continue;
        } else if (part === '..') {
            if (arr.length > 0) {
                arr.pop();
            }
        } else {
            arr.push(part);
        }
    }

    let res = '/' + arr.join('/');

    return res;
}

console.log(simplifyPath("/home/user/Documents/../Pictures"))