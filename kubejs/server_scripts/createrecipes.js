const minecraft = ['iron', 'copper', 'gold']
const create = ['zinc']
const thermal = ['tin', 'lead', 'silver', 'nickel']
const immersive = ['aluminum', 'uranium']
const manaflux = 'kubejs:thick_fluid'

onEvent('recipes', event => {
    for (i = 0; i < minecraft.length; i++) {
        event.recipes.createMixing('5x create:crushed_' + minecraft[i] + '_ore', [
            '2x minecraft:raw_' + minecraft[i],
            Fluid.of(manaflux, 125)
        ]).superheated()
    }

    for (i = 0; i < create.length; i++) {
        event.recipes.createMixing('5x create:crushed_' + create[i] + '_ore', [
            '2x create:raw_' + create[i],
            Fluid.of(manaflux, 125)
        ]).superheated()
    }

    for (i = 0; i < thermal.length; i++) {
        event.recipes.createMixing('5x create:crushed_' + thermal[i] + '_ore', [
            '2x thermal:raw_' + thermal[i],
            Fluid.of(manaflux, 125)
        ]).superheated()
    }

    for (i = 0; i < immersive.length; i++) {
        event.recipes.createMixing('5x create:crushed_' + immersive[i] + '_ore', [
            '2x immersiveengineering:raw_' + immersive[i],
            Fluid.of(manaflux, 125)
        ]).superheated()
    }

    event.recipes.createMixing('create:chromatic_compound', [
		'3x minecraft:glowstone_dust',
		'3x create:powdered_obsidian',
		'create:polished_rose_quartz'
	]).superheated()

	event.recipes.createMixing('minecraft:lapis_lazuli', [
		'minecraft:quartz',
		Fluid.of('thermal:ender', 125)
	]).heated()
	event.recipes.thermal.bottler('minecraft:lapis_lazuli', [
		'minecraft:quartz',
		Fluid.of('thermal:ender', 125)
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

    event.recipes.createCompacting('kubejs:manaflux_husk', [
        '3x minecraft:clay_ball',
        'create:powdered_obsidian'
    ]).heated()
    event.recipes.createCompacting(Fluid.of(manaflux, 500), [
        'kubejs:manaflux_xypnise'
    ]).heated()
})