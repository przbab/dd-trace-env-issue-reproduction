function HelloWorld() {
    return <span>Hello world!</span>
}

export function getServerSideProps(ctx) {
    ctx.res.statusCode = 403;
    console.log('res.end test', ctx.res.end)
    ctx.res.end('Unauthroized');
    console.log('res.end worked')

    return {
        props: {},
    };
}

export default HelloWorld;