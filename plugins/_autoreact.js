let handler = async (m, { conn }) => {
	let emot = conn.pickRandom(["🗿", "👍", "💨", "🩱", "🐷", "🤡", "👋🏻", "🚀", "🐒", "🌝", "💦", 🤣", "👹", "📸", "😠", "💪", "🔥", "🚥", "🌃", "🌙", "🍻", "🇮🇩", "🌈", "💩", "❤️", "⚠️", "🌹", "👻", "🔥", "🖕"])
    conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
}
handler.customPrefix = /(bile?k|ban?h|cum?|rez?a|co?k|knt?l|y?|ban?g|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k)/i
handler.command = new RegExp

module.exports = handler
