// priority: 0
onEvent('item.registry', event => {
    event.create('rich_basalt').group(misc).tooltip('The impurities look suspiciously copper-coloured...')

    console.info('kubejs custom items complete')
})

