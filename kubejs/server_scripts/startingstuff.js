onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
            event.player.tell('Say "startergear" to recieve starting items!')
    }
})

onEvent('player.chat', event => {
    if (event.message.equals('startergear'), !event.player.stages.has('starting_items'))  {
        var items = Item.of('tconstruct:vein_hammer', '{Damage:0,HideFlags:3,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:wood","tconstruct:copper","tconstruct:wood"],tic_modifiers:[{level:2s,name:"tconstruct:cultivated"},{level:1s,name:"tconstruct:dwarven"},{level:2s,name:"tconstruct:piercing"},{level:1s,name:"tconstruct:sturdy"}],tic_multipliers:{"tconstruct:attack_damage":1.25f,"tconstruct:durability":5.0f,"tconstruct:mining_speed":0.3f},tic_persistent_data:{abilities:1,upgrades:2},tic_stats:{"tconstruct:attack_damage":3.90625f,"tconstruct:attack_speed":0.85f,"tconstruct:durability":1104.0f,"tconstruct:harvest_tier":"minecraft:iron","tconstruct:mining_speed":1.4250001f}}')
        event.player.give(items)
        event.player.stages.add('starting_items')
    }
})
