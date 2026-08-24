const Menu = (timeFt, Bot, prefixo, sender, groupName, memberCount) => {
  const numero = sender.split('@')[0]

  return `
╭────────────────────╮
│   🌸 ANIA BOT BASE 🌸
│      MENÚ PRINCIPAL
╰────────────────────╯

${timeFt}, @${numero} 💗

╭────── INFORMACIÓN ──────╮
│ ✦ ${prefixo}menu
│ ✦ ${prefixo}ping
│ ✦ ${prefixo}infobot
╰─────────────────────────╯

╭──────── GRUPO ──────────╮
│ ✦ ${prefixo}n
│ ✦ ${prefixo}antiprivado
│ ✦ ${prefixo}minar
│ ✦ ${prefixo}listreg
│ ✦ ${prefixo}rank
│ ✦ ${prefixo}rankcoins
│ ✦ ${prefixo}ranknivel
│ ✦ ${prefixo}formarpareja
╰─────────────────────────╯

╭────────── IA ───────────╮
│ ✦ ${prefixo}ia
╰─────────────────────────╯

╭────── HERRAMIENTAS ─────╮
│ ✦ ${prefixo}toimg
│ ✦ ${prefixo}ytsearch
│ ✦ ${prefixo}play
│ ✦ ${prefixo}play2
│ ✦ ${prefixo}ytmp4
│ ✦ ${prefixo}playdoc
│ ✦ ${prefixo}fb
│ ✦ ${prefixo}tiktok
│ ✦ ${prefixo}twitter
│ ✦ ${prefixo}mediafire
│ ✦ ${prefixo}instagram
│ ✦ ${prefixo}pinterest
│ ✦ ${prefixo}google
│ ✦ ${prefixo}wikipedia
│ ✦ ${prefixo}horoscopo
│ ✦ ${prefixo}apk
╰─────────────────────────╯

╭────── ANIA STUDIO ──────╮
│ ✦ ${prefixo}botoff
│ ✦ ${prefixo}setprefix
╰─────────────────────────╯

> ANIA STUDIO | 2026 🌸
`
}

module.exports = Menu
