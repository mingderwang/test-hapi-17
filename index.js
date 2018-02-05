const Hapi = require('hapi');

(async () => {
    try {
        const server = Hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 3000)
        });

        server.route({
            path: '/',
            method: 'GET',
            handler: (request, h) => {
                console.log("ming");
                return 'Hello World!';
            }
        });

        await server.start();

        console.log(`Server running at: ${server.info.uri}`);
    } catch (error) {
        console.log(error);
    }
})();
