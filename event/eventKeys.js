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
	ReventKeys.checks = {
		self.rumor = {
			self.game = false,
			self.engine = false,
			self.convention = false
		}
		self.announced = {
			self.game = {
				self.itself = false,
				self.name = false,
				self.features = false,
				self.relDate = false,
				self.endDate = false
			}
			self.engine = {
				self.itself = false,
				self.name = false,
				self.features = false,
				self.relDate = false,
				self.pubDate = false	
			},
			self.convention = {
				self.itself = false,
				self.name = false,
				self.date = false,
				self.isfor = false
			}
		}
		self.released = {
			self.game = false,
			self.engine = false
		}
		self.canceled = {
			self.game = false,
			self.convention = false
		}
		
	}
})();
Revent = {};
Revent.Call = function(obj,hook) {
	if(obj){
		if(hook != null)
			GDT.fire(ReventKeys,hook,null);
		}
};
Revent.Check = function() {
	//For Loop for Rumors
	for(var i = 0; i < ReventKeys.keys.rumor.length; i++)
		Revent.Call(ReventKeys.checks.rumor[i],ReventKeys.keys.rumor[i]);
	self.checka = ReventKeys.checks.announced;
	//For Loop for Announced Items
	for(var i = 0; i < self.checka.length; i++){
		self.checka[i] = self.inside;
		for(var b = 0; b < self.inside.length; b++)
			Revent.Call(self.inside[i],self.inside[i]);	
	}
	//For Loop for Released Items
	for(var i = 0; i < ReventKeys.keys.released.length; i++)
		Revent.Call(ReventKeys.checks.released[i],Revent.keys.releeased[i]);
	//For Loop for Cancelled Items
	for(var i = 0; i < ReventKeys.keys.canceled.length; i ++)
}
