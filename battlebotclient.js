({
    afterChannelMessage: function(message, channel, html) {
    if (message.indexOf(':') >= 0) { 
        message = message.substr(message.indexOf(':') + 2); 
        }
    if (message == "BattleBot") { // Put bot name 
        client.network().sendChanMessage(channel, "BattleBot Version 1.7 Current Supported Tiers: XY 1v1 Created By: Tyrantrum, Akari1 Use ~commands to view commands");
       return;
// Displays the commands
}
if (message == "~commands") {
client.network().sendChanMessage(channel, "Commands are ~mute, ~jump, ~joke, ~joke2, joke3, ~catch, ~attack, ~botbattle, ~spam(do not use for trolling servers only.)");
return;
// False mute
}
if (message == "~mute") {
client.network().sendChanMessage(channel, "You cannot mute silly wabbit.");
return;
}
// Random Boring Command.
if (message == "~jump") {
client.network().sendChanMessage(channel, "** Jumps!.");
return;
// Random Jokes
}
if (message == "~joke") {
client.network().sendChanMessage(channel, "Did you hear about the guy whose whole left side was cut off? He's all right now.");
return;
}
if (message == "~joke2") {
client.network().sendChanMessage(channel, "I'm reading a book about anti-gravity. It's impossible to put down.");
return;
}
if (message == "~joke3") {
client.network().sendChanMessage(channel, "It's not that the man did not know how to juggle, he just didn't have the balls to do it.");
return;
}
// Catch a Random Pokemon
if (message == "~catch") {
client.network().sendChanMessage(channel, "You caught a "  + sys.pokemon(sys.rand(1, 649)) + "!");
}
// Displays Attacks (DOES NOT WORK)
if (message == "~attack") {
client.network().sendChanMessage(channel, "Attack does not work.");
}
// Explains If BOT Battle is active
if (message == "~botbattle") {
client.network().sendChanMessage(channel, "»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
}
if (message == "~botbattle") {
client.network().sendChanMessage(channel, "BattleBot is active just challenge me to XY 1v1");
}
if (message == "~botbattle") {
client.network().sendChanMessage(channel, "»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
}
// Auto Spam Command
// WARNING THIS COMMAND WILL MAKE YOU OVERACTIVE QUICKLY
if (message == "~spam") {
client.network().sendChanMessage(channel, "~spam");
}
if (message == "~spam") {
client.network().sendChanMessage(channel, "~spam");
}
if (message == "~spam") {
client.network().sendChanMessage(channel, "~spam");
}
if (message == "~spam") {
client.network().sendChanMessage(channel, "~spam");
}
if (message == "~spam") {
client.network().sendChanMessage(channel, "~spam");
}   
}
});
