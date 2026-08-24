const Menu = (timeFt, Bot, prefixo, sender, groupName, memberCount) => {
  const numero = sender.split('@')[0]

  return `
╭───────────────╮
│ 🌸 𝑨𝑵𝑰𝑨 𝑩𝑶𝑻 𝑩𝑨𝑺𝑬 🌸 │
│ ✦ 𝑴𝑬𝑵𝑼 𝑷𝑹𝑰𝑵𝑪𝑰𝑷𝑨𝑳 ✦ │
╰───────────────╯

🌷 ${timeFt}, @${numero} 💗

╭───── 𝑰𝑵𝑭𝑶 ─────╮
│ 🌸 Bot: ${Bot}
│ 🩵 Prefijo: ${prefixo}
│ 💗 Grupo: ${groupName}
│ ✨ Miembros: ${memberCount}
╰─────────────────╯

╭─── 🌸 𝑨𝑵𝑰𝑨 ───╮
│ ✦ ${prefixo}ping
│   Comprueba la respuesta de ANIA
│
│ ✦ ${prefixo}perfil
│   Consulta tu perfil
│
│ ✦ ${prefixo}cartera
│   Revisa tu economía
│
│ ✦ ${prefixo}reg
│   Registra tu perfil
│
│ ✦ ${prefixo}minar
│   Consigue recursos
╰─────────────────╯

╭─── 🛠️ 𝑯𝑬𝑹𝑹𝑨𝑴𝑰𝑬𝑵𝑻𝑨𝑺 ───╮
│ ✦ ${prefixo}toimg
│   Convierte un sticker en imagen
│
│ ✦ ${prefixo}ytsearch
│   Busca contenido en YouTube
│
│ ✦ ${prefixo}google
│   Realiza una búsqueda
│
│ ✦ ${prefixo}ia
│   Habla con ANIA IA
╰──────────────────────────────╯

╭─── 👑 𝑨𝑵𝑰𝑨 𝑪𝑹𝑬𝑨𝑫𝑶𝑹𝑨 ───╮
│ ✦ ${prefixo}boton
│   Activa ANIA
│
│ ✦ ${prefixo}botoff
│   Desactiva ANIA
│
│ ✦ ${prefixo}setprefix
│   Cambia el prefijo
│
│ ✦ ${prefixo}reiniciar
│   Reinicia ANIA
│
│ ✦ ${prefixo}update
│   Actualiza la conexión
╰────────────────────────────╯

︶︶︶୨🌸୧︶︶︶
> 𝑨𝑵𝑰𝑨 𝑺𝑻𝑼𝑫𝑰𝑶 | 𝟐𝟎𝟐𝟔 🌸
`
}

module.exports = Menu
