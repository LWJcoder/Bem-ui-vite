// dom.js
exports.generateDiv = () => {
  const div = document.createElement('div')
  div.className = 'c1'
  document.body.appendChild(div)
}

// 数组铺平
// function flat1(arr) {
//   if (Array.isArray(arr)) {
//     arr.forEach((item) => {
//       if (Array.isArray(item)) {
//         item = flat1(item)
//       }
//     })
//     return arr.join(',')
//   }
// }

// function flat2(arr) {
//   let str = flat1(arr)
//   return str.split(',')
// }
