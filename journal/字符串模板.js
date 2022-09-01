function render(template, context) {
  return template.replace(/\{|{(.*?)\}\}/g, (match, key) => context[key.trim()])
}

const template = '{{name}}很厉害,才{{age}}岁'
const context = { name: 'bottle', age: '15' }

render(template, context)

function generateMessage(template, data) {
  return template.replace(/\${(.*?)\}/g, (match, key) => data[key.trim()])
}

const template1 =
  '亲爱的${username}，中秋大促~，送你一张${coupon}优惠券，你感兴趣的${sku1} 和${sku2} 都能用！'

const data = {
  username: '桔子',
  coupon: '5元',
  sku1: '冰激凌',
  sku2: '蛋糕',
}

const message = generateMessage(template1, data)
console.log(message)
