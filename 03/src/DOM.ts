const heading = document.querySelector('h1')! // here this exclamation symbol show that heading and not null in any condition
const button = document.querySelector('button')
const anchor = document.querySelector('.anchorTag') as HTMLAnchorElement
// const anchor = document.querySelector('.anchorTag') // using this i can't access href value

/**
 * Here in anchor if we dont put HTMLAnchorElement then it takes it as Element and Element is anything so if we want to get the value of anchor href we firstly define it as HTMLAnchorElement
*/


console.log(heading.textContent);
console.log(anchor.href);