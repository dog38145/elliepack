onEvent('recipes', event => {
	event.remove({output: 'refinedstorage:controller'})
	event.remove({output: 'refinedstorage:machine_casing'})
	event.remove({output: 'refinedstorageaddons:wireless_crafting_grid'})
	event.remove({output: 'refinedstorage:grid'})
	event.remove({output: 'refinedstorage:crafting_grid'})

	event.shapeless('refinedstorageaddons:creative_wireless_crafting_grid', ['refinedstorageaddons:wireless_crafting_grid', 'enigmaticlegacy:cosmic_heart'])
	event.shapeless('refinedstorage:crafting_grid', ['#refinedstorage:grid', 'refinedstorage:advanced_processor', 'prettypipes:high_crafting_module'])

	event.shaped('refinedstorage:grid', [
		'GCQ',
		'IMQ',
		'GDQ'
	], {
		G: 'refinedstorage:improved_processor',
		D: 'refinedstorage:destruction_core',
		C: 'refinedstorage:construction_core',
		I: 'prettypipes:item_terminal',
		Q: 'minecraft:glass',
		M: 'refinedstorage:machine_casing'
	})

	event.shaped('refinedstorageaddons:wireless_crafting_grid', [
		'QEQ',
		'QCQ',
		'QPQ'
	], {
		Q: 'refinedstorage:quartz_enriched_iron',
		E: 'enigmaticlegacy:etherium_ingot',
		C: '#refinedstorage:crafting_grid',
		P: 'refinedstorage:advanced_processor'
	})

	event.shaped('refinedstorage:machine_casing', [
		'QQQ',
		'QNQ',
		'QQQ'
	], {
		Q: 'refinedstorage:quartz_enriched_iron',
		N: 'architects_palette:nether_brass_block'
	})

	event.shaped('refinedstorage:controller', [
		'QDQ',
		'PCP',
		'QRQ'
	], {
		Q: 'refinedstorage:quartz_enriched_iron_block',
		D: 'refinedstorage:advanced_processor',
		P: 'prettypipes:pressurizer',
		C: 'refinedstorage:machine_casing',
		R: 'prettypipes:redstone_module'
	})

	console.info('kubejs refined storage custom recipes complete')
})
