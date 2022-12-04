const bot = require("mineflayer")
bot.on('spawn', () => {
    const x = 561
    const y = 150
    const z = -5151

    setInterval(() => {
        check(x, y, z);
    }, 3000);

});
function check(x, y, z){
    let posupd = new vec3(bot.player.entity.position)

    let xu = Math.round(posupd.x)
    let yu = Math.round(posupd.y)
    let zu = Math.round(posupd.z)

    if((x+y+z) != (xu+yu+zu)){
        sleep(150);
        bot.chat(`/tp ${x} ${y+0.5} ${z}`);
        sleep(150);
        bot.chat(`/fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 minecraft:repeating_command_block`);
    };

    const commandBlock = bot.findBlock({
        matching: mcData.blocksByName.repeating_command_block.id
        });
    
    if(commandBlock == null){
        bot.chat(`/fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 minecraft:repeating_command_block`);
    };

    
};
function core(command) {
 
    const commandBlock = bot.findBlock({
    matching: mcData.blocksByName.repeating_command_block.id
    });

    try {
        bot.setCommandBlock(commandBlock.position, command, { mode: 1, trackOutput: true, conditional: false, alwaysActive: true });
    } catch (e) {

        console.log('[Error]: '+e.message);

        if(e.message.includes('creative mode')){
            bot.chat('/gmc');
            sleep(150);
            core(command);
        };
    };
    
};