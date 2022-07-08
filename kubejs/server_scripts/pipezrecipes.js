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
	event.shaped('16x pipez:item_pipe', [
		'III',
		'EPR',
		'III'
	], {
		E: 'prettypipes:high_extraction_module',
        I: 'minecraft:iron_ingot',
		P: 'prettypipes:pipe',
        R: 'prettypipes:high_retrieval_module'
	})
	event.shaped('16x pipez:fluid_pipe', [
		'III',
		'EPR',
		'III'
	], {
		E: 'ppfluids:high_fluid_extraction_module',
        I: 'minecraft:iron_ingot',
		P: 'ppfluids:fluid_pipe',
        R: 'ppfluids:high_fluid_retrieval_module'
	})

	event.shaped('pipez:filter_destination_tool', [
		'III',
		'RGR',
		'IBI'
	], {
		R: 'minecraft:redstone',
		I: 'minecraft:iron_ingot',
		G: '#forge:glass_panes',
		B: '#minecraft:buttons'
	})

    event.shaped('pipez:basic_upgrade', [
		'RIR',
		'IEI',
		'RIR'
	], {
		R: 'minecraft:redstone',
        I: 'minecraft:iron_ingot',
        E: 'thermal:electrum_gear'
	})
    event.shaped('pipez:improved_upgrade', [
		'RIR',
		'ISI',
		'RIR'
	], {
		R: 'minecraft:redstone',
        I: 'minecraft:gold_ingot',
        S: 'thermal:steel_gear'
	})
	event.shaped('pipez:advanced_upgrade', [
		'RDR',
		'DED',
		'RDR'
	], {
		R: 'minecraft:redstone',
        D: 'minecraft:diamond',
        E: 'thermal:enderium_gear'
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