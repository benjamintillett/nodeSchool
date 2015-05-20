function getShortMessages(messages) {
  shortMessageObjects = messages.filter(function(messageObject){
  	return messageObject.message.length < 50;
  });
  return shortMessageObjects.map(function(messageObject){
  		return messageObject.message;
  });
}

module.exports = getShortMessages