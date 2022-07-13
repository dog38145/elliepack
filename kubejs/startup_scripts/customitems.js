onEvent('item.registry', event => {
    event.create('rich_basalt')
    event.create('manaflux_husk')
    event.create('manaflux_apomagi')
    event.create('manaflux_xypnise')
    console.info('kubejs custom items complete')
})

onEvent('fluid.registry', event => {
    event.create('thick_fluid')
    .thickTexture(0x64a9e9)
    .bucketColor(0x64a9e9)
    .displayName('Flowing Manaflux')
    console.info('kubejs custom fluids complete')
})

