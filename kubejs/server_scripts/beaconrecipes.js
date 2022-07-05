onEvent('recipes', event => { 
	event.remove({mod: "mobilebeacon118"})
	event.shaped('mobilebeacon118:mobile_beacon_netherite_ii', [
		'123',
		'ABA',
		'456'
	], {
		A: 'enigmaticlegacy:astral_dust',
		B: 'minecraft:beacon',
		1: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_regeneration"}'),
		2: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_swiftness"}'),
		3: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_leaping"}'),
		4: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:strong_haste"}'),
		5: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_strength"}'),
		6: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:strong_resistance"}')
	})
}) 
