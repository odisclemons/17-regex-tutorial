let testStr = `
<>
<div>
    <p>this is a sample of code and stuff.</p>
</div>
</>
`;

let regex = /<\/?[a-z]+>/gi;
console.log(testStr.match(regex));
