// const a = {key:'a'}
// const b = {key:'b'}
// const c = {key:'c'}
// a[b] = 123
// a[c] = 456
// console.log(a[b])

// let a = {name: 'a'}
// let b = [a]
// a = null
// console.log(b, a)

/*  都是false  */
// new Number(2) === new Number(2)
// new Number(2) == new Number(2)
// new Boolean(false) === new Number(false)
// new Boolean(false) == new Number(false)
// new Boolean(true) === new Number(true)
// new Boolean(true) == new Number(true)

// async function getData() {
//   return await Promise.resolve('I make it!')
// }
// const data = getData();
// console.log(data)
// data.then(res => console.log(res))

// const name = 'Lydia'
// age = 21
// console.log(delete name)
// console.log(delete age)

// const spookyItems = ['a', 'b', 'c', ];
// ({item: spookyItems[3]} = {item: 'd'});
// console.log(spookyItems);

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }
// const person = 'Lydia';
// const age = 21;
// getPersonInfo`${person} is ${age} years old`;

// const myPromise = Promise.resolve(Promise.resolve('Promise!'))
// function funcOne() {
//   myPromise.then(res => res).then(res => console.log(res, '-->1'))
//   setTimeout(() => console.log('Timeout1!', 0))
//   console.log('Last line1!')
// }
// async function funcTwo() {
//   const res = await myPromise;
//   console.log(await res, '-->2');
//   setTimeout(() => console.log('Timeout2!', 0))
//   console.log('Last line2!')
// }
// funcOne()
// funcTwo()

/*  setter  */
// const config = {
//   languages: [],
//   set language(lang) {
//   /*  */
//     return this.languages.push(lang)
//   }
// };
// console.log(config.language)
// console.log(config.languages)
// config.language = 'lang'
// console.log(config.languages)

// const language = {
//   set current(name) {
//     this.log.push(name);
//   },
//   log: []
// }
// language.current = 'EN';
// console.log(language.log); // ['EN']
// delete config.current

// const info = {
//   [Symbol('a')]: 'b'
// }
// console.log(info)
// console.log(Object.keys(info))

// async function* range(start, end) {
//   for (let index = start; index <= end; index++) {
//     yield Promise.resolve(index)
//   }
// }
// (async () => {
//   const gen = range(1,3)
//   console.log('gen--->', gen)
//   for await (const item of gen) {
//     console.log(item)
//   }
// })()
