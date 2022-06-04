let testStr = `
<>
<div>
    <p>this is a sample of code and stuff.</p>
</div>
</>
// invalid tags below shouldnt be returned:

<invalid
invalid>
<12313>
<></>
<&**&*^&^>
`;

let regex = /<\/?[a-z]+>/gi;
console.log(testStr.match(regex));
