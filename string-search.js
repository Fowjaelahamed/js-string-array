const products = [
    'dell hardcore i9 1TB laptop',
    'iphone 1Tb camera Phone',
    'Dell yellow laptop with back camera',
    'lenevo comercial laptop',
    'htc low price phone',
    'lg low price Laptop',
    'walton high badget PHONE'
];
const searching = 'laptop';
const startSearch = 'dell';
const endSearch = 'phone';
// indexOf 
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

// includes  
// it is case sensitive mane jeita search dibo seita boro na choto hater
for (const product of products) {
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);

// startsWith
for (const product of products) {
    if(product.toLowerCase().startsWith(startSearch.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);

// endsWith 
for (const product of products) {
    if(product.toLowerCase().endsWith(endSearch.toLowerCase())){
        output.push(product);
    }
}
console.log(output);