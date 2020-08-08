const person = {name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom hancks','Tom cruise','Tom Yarn']}
const {address, phone, gfName} = person;
console.log(gfName, phone, address)

const friends = ['Sakib khan','Arman Khan','Amir Khan','Salman Khan','Shahrukh Khan'];
const [chhotoFriend, nextFriend,...restFriends] = friends;
console.log(restFriends);
console.log(chhotoFriend);

const complexObject = {
    name : 'abc',
    info: {
        address: 'Kola Bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);