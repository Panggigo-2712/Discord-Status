const clientId = '985875734633533461';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity(){
  if (!RPC) return;
  RPC.setActivity({
    details: `My Social Media`,
    state: `Jangan lupa follow cuy`,
    startTimestamp: Date.now(),
    largeImageKey: `menu2`,
    largeImageText: `Nadine Abigail`,
    smallImageKey: `menu`,
    smallImageText: `HEHEHEHEHE`,
    instance: false,
    buttons: [
      {
        label: `Instagram`,
        url: `https://www.youtube.com/`
      },
      {
        label: `Youtube`,
        url: `https://www.youtube.com/channel/UCYY2dC8od7sqJYeNX445c0w`
      }
    ]
  });
}

RPC.on('ready', async () => {
  setActivity();
  setInterval(() => {
    setActivity();
  }, 15 * 1000);
});

RPC.login({ clientId }).catch(err => console.error(err));