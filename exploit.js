const Discord = require("discord.js");
const Cleverbot = require("cleverbot-node");
const client = new Discord.Client();
const clbot = new Cleverbot;
clbot.configure({botapi: "TOKEN"});

client.on("message", message => {
  if (message.author.id == "USERID")  {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.login("TOKEN");
