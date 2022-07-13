onEvent('recipes', event => {
	event.remove({output: 'easy_villagers:auto_trader'})
	event.remove({output: 'easy_piglins:barterer'})
	event.remove({output: 'lightmanscurrency:coinmint'})
	event.remove({output: 'create_stuff_additions:chocolate_fountain'})

	event.recipes.createMechanicalCrafting('easy_villagers:auto_trader', [
		'GGGGG',
		'GRNRG',
		'GRHRG',
		'GRBRG',
		'IICII'
	], {
		G: 'minecraft:glass_pane',
		R: 'minecraft:redstone',
		N: 'tconstruct:netherite_nugget',
		H: 'minecraft:hopper',
		B: 'minecraft:barrel',
		I: 'minecraft:iron_ingot',
		C: 'create:chute'
	})
	event.recipes.createMechanicalCrafting('easy_piglins:barterer', [
		'GGGGG',
		'GRNRG',
		'GRHRG',
		'GRBRG',
		'IICII'
	], {
		G: 'minecraft:glass_pane',
		R: 'minecraft:redstone',
		N: 'tconstruct:netherite_nugget',
		H: 'minecraft:hopper',
		B: 'minecraft:barrel',
		I: 'minecraft:gold_ingot',
		C: 'create:chute'
	})

	console.info('kubejs general custom recipes complete')
})
