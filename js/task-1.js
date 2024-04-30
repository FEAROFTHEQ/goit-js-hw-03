function slugify(title){
    const lowerTittle= title.toLowerCase();
    const words = lowerTittle.split(' ');
    const slug = words.join('-');
    return slug;
}
console.log('======================task 1======================');
console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));