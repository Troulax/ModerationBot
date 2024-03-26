# ModerationBot

ModerationBot is an advanced moderation bot developed using Discord.js, designed to streamline the tasks of moderators in Discord servers.

## Commands

ModerationBot offers the following commands:

- **cezalı**: Removes all permissions from the specified user and assigns the designated penalty role.
- **destek**: Creates a text channel visible only to moderators and the user who issued the command.
- **geçici-sustur**: Temporarily mutes the specified user for a set duration.
- **ip**: Displays the IP address of the connected CSGO server and provides information on the number of players and the current map being played.
- **masum**: Removes the penalty role from the specified user and assigns registered member roles.
- **oylama**: Initiates a poll by sending the provided text and adding check and cross emojis for voting.
- **ping**: Reports the bot's latency and total latency.
- **rolinfo**: Provides information about the specified role.
- **say**: Reports the total number of users in voice channels on the server.
- **sil**: Deletes the specified number of messages.
- **slowmode**: Applies slow mode to the text channel on a per-second basis.
- **sorgula**: Indicates when the specified user's Discord account was created and when they joined the server.
- **çek**: Moves the specified user to the voice channel you're currently in.
- **uyarı1**: Assigns the warning1 role to the specified user.
- **uyarı2**: Removes the warning1 role from the specified user and assigns the warning2 role.
- **uyarı3**: Removes all roles from the specified user and assigns the penalty role.

## Installation

1. Download or clone the project files to your computer.
2. Install Node.js and npm (if not already installed).
3. Navigate to the project directory in your terminal or command prompt.
4. Run the command `npm install` to install the necessary dependencies.
5. Create a file named `.env` and add your Discord bot token to it.
6. Start the bot by running the command `node bot.js` or `npm start`.
