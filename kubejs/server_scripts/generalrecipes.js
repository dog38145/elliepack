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

	event.recipes.createMixing('create:chromatic_compound', [
		'3x minecraft:glowstone_dust',
		'3x create:powdered_obsidian',
		'create:polished_rose_quartz'
	]).superheated()

	event.recipes.createMixing('minecraft:lapis_lazuli', [
		'minecraft:quartz',
		Fluid.of('thermal:ender', 100)
	]).heated()
	event.recipes.thermal.bottler('minecraft:lapis_lazuli', [
		'minecraft:quartz',
		Fluid.of('thermal:ender', 100)
	])

	event.recipes.createMixing('kubejs:rich_basalt', [
		'minecraft:basalt',
		'create:copper_nugget',
		Fluid.of('minecraft:lava', 250)
	]).heated()

	event.recipes.createCrushing(['3x create:copper_nugget',Item.of('create:crushed_copper_ore').withChance(0.4),Item.of('minecraft:basalt').withChance(0.8)
	], 'kubejs:rich_basalt')
	event.recipes.thermal.pulverizer('8x create:copper_nugget', [
		'kubejs:rich_basalt'
	])

	console.info('kubejs general custom recipes complete')
})
