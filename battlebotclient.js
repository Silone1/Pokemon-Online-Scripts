({
    afterChannelMessage: function(message, channel, html) {
    if (message.indexOf(':') >= 0) { 
        message = message.substr(message.indexOf(':') + 2); 
        }
    if (message == "Bot") { // Put bot name 
        client.network().sendChanMessage(channel, "Bot Version 1.7 Current Supported Tiers: XY 1v1 Created By: Tyrantrum, Akari1 Use ~commands to view commands");
       return;
}
if(client.ownName=="Bot")
if (message == "~commands") {
client.network().sendChanMessage(channel, "Commands are ~mute, ~jump, ~joke, ~joke2, joke3, ~catch, ~attack, ~botbattle");
return;
}
if(client.ownName=="Bot")
if (message == "~mute") {
client.network().sendChanMessage(channel, "You cannot mute silly wabbit. ");
return;
}
if(client.ownName=="Bot")
if (message == "~jump") {
client.network().sendChanMessage(channel, "** Jumps!.");
return;
}
if(client.ownName=="Bot")
if (message == "~joke") {
client.network().sendChanMessage(channel, "Did you hear about the guy whose whole left side was cut off? He's all right now.");
return;
}
if(client.ownName=="Bot")
if (message == "~joke2") {
client.network().sendChanMessage(channel, "I'm reading a book about anti-gravity. It's impossible to put down.");
return;
}
if(client.ownName=="Bot")
if (message == "~joke3") {
client.network().sendChanMessage(channel, "It's not that the man did not know how to juggle, he just didn't have the balls to do it.");
return;
}
if(client.ownName=="Bot")
if (message == "~catch") {
client.network().sendChanMessage(channel, "You caught a "  + sys.pokemon(sys.rand(1, 649)) + "!");
}
if(client.ownName=="Bot")
if (message == "~attack") {
client.network().sendChanMessage(channel, "Attack command under construction.");
}
if(client.ownName=="Bot")
if (message == "~botbattle") {
client.network().sendChanMessage(channel, "»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
}
if(client.ownName=="Bot")
if (message == "~botbattle") {
client.network().sendChanMessage(channel, "BattleBot is active just challenge me to XY 1v1");
}
if(client.ownName=="Bot")
if (message == "~botbattle") {
client.network().sendChanMessage(channel, "»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
}
if(client.ownName=="Bot")
if (message == "~sotd") {
client.network().sendChanMessage(channel, "Song of The Day Is: Imagine Dragons ~ radioactive.");
return;
}
if(client.ownName=="Bot")
if (message == "~me") {
client.network().sendChanMessage(channel, "What about you?");
}
}   
}
});
