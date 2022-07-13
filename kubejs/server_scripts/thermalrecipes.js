onEvent('recipes', event => {
    event.recipes.thermal.crucible(Fluid.of('kubejs:thick_fluid', 500), 'kubejs:manaflux_xypnise')
    event.recipes.thermal.furnace(('kubejs:manaflux_xypnise'), 'kubejs:manaflux_apomagi')
})