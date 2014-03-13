var ReventKeys = {};
(function () {
        /*
        //These are for events related to competitiors
        //If you plan on using them
        //Make sure you only use them for competitior events
        */
        ReventKeys.keys = {
                rumor = {
                        game : "rumor.game",
                        engine : "rumor.engine",
                        convention : "rumor.convention"
                }
                announced = {
                        game = {
                                itself : "announced.game.itself",
                                name : "announced.game.name",
                                features : "announced.game.features",
                                relDate : "announced.game.relDate",
                                endDate : "announced.game.endDate"
                        }
                        engine = {
                                itself : "announced.engine.itself",
                                name : "announced.engine.name",
                                features : "announced.engine.features",
                                relDate : "announced.engine.relDate",
                                pubDate : "announced.engine.pubDate"
                        }
                        convention = {
                                itself : "announce.convention.itself",
                                name : "announced.convention.name",
                                date : "announced.convention.date",
                                isfor : "announced.convention.isfor"
                        }
                }
                released = {
                        game : "released.game",
                        engine : "released.engine"
                }
                canceled = {
                        game : "canceled.game",
                        engine : "canceled.engine",
                        convention : "canceled.convention"
                }
        }
        var _subscribers = {};
	var getSubscribers = function (key) {
		if (!_subscribers.hasOwnProperty(key))
			_subscribers[key] =
				[];
		return _subscribers[key]
	};
	ReventKeys.on = function (key, handler) {
		getSubscribers(key).push(handler)
	};
	ReventKeys.off = function (key, handler) {
		getSubscribers(key).remove(handler)
	};
	ReventKeys.fire = function (obj, key, data) {
		var subs = getSubscribers(key);
		for (var i = 0; i < subs.length; i++)
			if (subs[i] != null)
				try {
					subs[i].call(obj, data)
				} catch (e) {
					Logger.LogWarning("GDT event handler error", e)
				}
	};
	var rek = ReventKeys;
	rek.NPCoRumorGameDefinition = function (id) {
		rek.fire(CompManager,rek.rumor.game,{
			company : CompManager.GetCompetitiorID(id)
		});
	};
	rek.NPCoRumorEngineDefinition = function (id) {
		rek.fire(CompManager,rek.rumor.engine, {
			company : CompManager.GetCompetitiorID(id)
		});
	};
	rek.NPCoRumorConventionDefinition = function (id) {
		rek.fire(CompManager,rek.rumor.convention, {
			company : CompManager.GetCompetitiorID(id)
		});
	};
})();
