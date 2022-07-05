onEvent('recipes', event => {  
    event.remove({mod: 'pipez'})

    event.shaped('16x pipez:energy_pipe', [
		'III',
		'RCR',
		'III'
	], {
		R: 'minecraft:redstone',
        I: 'minecraft:iron_ingot',
        C: 'immersiveengineering:coil_lv'
	})
    event.shaped('pipez:basic_upgrade', [
		'RIR',
		'ICI',
		'RIR'
	], {
		R: 'minecraft:redstone',
        I: 'minecraft:iron_ingot',
        C: 'immersiveengineering:coil_mv'
	})
    event.shaped('pipez:improved_upgrade', [
		'RIR',
		'ICI',
		'RIR'
	], {
		R: 'minecraft:redstone',
        I: 'minecraft:diamond',
        C: 'immersiveengineering:coil_hv'
	})
    event.shaped('pipez:wrench', [
		' F ',
		' SF',
		'S  '
	], {
		S: 'minecraft:stick',
        F: 'minecraft:flint'
	})
    console.info('kubejs pipez custom recipes complete')
})