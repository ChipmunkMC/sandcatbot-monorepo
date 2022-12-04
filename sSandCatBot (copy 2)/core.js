function inject(bot) {
  const core = {}

  core.pos = { x: 0, y: null, z: null }
  core.size = { fromX: -2, fromY: 0, fromZ: -2, toX: 3, toY: 1, toZ: 3 }
  core.block = { x: core.size.fromX, y: core.size.fromY, z: core.size.fromZ }
  core.refill = () => {
    core.pos = { x: Math.round(bot.player.entity.position.x), y: 0, z: Math.round(bot.player.entity.position.z) }
    core.block = { x: core.size.fromX, y: core.size.fromY, z: core.size.fromZ }
    bot.chat(`/fill ${core.pos.x + core.size.fromX} ${core.pos.y + core.size.fromY} ${core.pos.z + core.size.fromZ} ${core.pos.x + core.size.toX} ${core.pos.y + core.size.toY} ${core.size.toZ + core.pos.z} repeating_command_block replace`)
  }
  core.run = command => {
    core.block.x++
    if (core.block.x > core.size.toX) {
      core.block.x = core.size.fromX;
      core.block.z++
      if (core.block.z > core.size.toZ) {
        core.block.z = core.size.fromZ
        core.block.y++
        if (core.block.y > core.size.toY) {
          core.block.x = core.size.fromX
          core.block.y = core.size.fromY
          core.block.z = core.size.fromZ
        }
      }
    }
    bot._client.write('update_command_block', {
      location: {
        x: core.pos.x + core.block.x,
        y: core.pos.y + core.block.y,
        z: core.pos.z + core.block.z
      }, command: command, mode: 1, flags: 0b100
    })
  }

  bot.core = core
  bot.once('spawn', () => {
    bot.core.refill()
  })
}

module.exports = inject