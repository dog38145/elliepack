onEvent('recipes', event => {
	event.remove({mod: 'angelring'})

	event.shapeless('angelring:itemring', ['angelring:itemdiamondring', 'alexsmobs:void_worm_eye'])

	event.shaped('angelring:itemdiamondring', [
		'DFD',
		'CRC',
		'DBD'
	], {
		D: 'enigmaticlegacy:astral_dust',
		C: 'enigmaticlegacy:cosmic_heart',
		R: 'enigmaticlegacy:gem_ring',
		F: 'enigmaticlegacy:fabulous_scroll',
		B: 'minecraft:beacon'
	})
	console.info('kubejs creative custom recipes complete')
})
