

const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

const buf6 = Buffer.from('sastoooo');
console.log(buf6);

// 编码
const buf = Buffer.from('Aa', 'utf8');
console.log(buf);

// 解码
console.log(buf.toString());
const bufs = Buffer.from('Asas是多少a', 'utf16le');
console.log(bufs.toString());


const buf5 = Buffer.alloc(10);
buf5[0]=0x88;
buf5[1]=88;

console.log(buf5);



// console.log(Buffer);