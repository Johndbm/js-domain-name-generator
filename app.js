let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let toplvldomain = ['.com','.us','.tk','.org','.biz','.eth','.net','.ve']

for (let i = 0; i < pronoun.length; i++) {
    for (let i = 0; i < adj.length; i++) {
        for (let i = 0; i < noun.length; i++) {
            for (let i = 0; i < toplvldomain.length; i++) {
                console.log (`${pronoun[i]}${adj[i]}${noun[i]}${toplvldomain[i]}`)
            }
        }
    }
    
}
//console.log("any string")