function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'please provide an Array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['boltu','nat','hablumarka','bob','nayoka'];
const myBigBuddy = megaFriend(123545);
console.log(myBigBuddy);

// indexOf
if(friends.indexOf('fox') != -1){
    console.log('nat exists');
}else{
    console.log("fox doesn't exist");
}

// includes 
if(friends.includes('boltu')){
    console.log('boltu exits in includes');
}
// concat 
const first = [1,2,3,4];
const second = [3,4,5,6];
const combined = first.concat(second);
console.log(combined);