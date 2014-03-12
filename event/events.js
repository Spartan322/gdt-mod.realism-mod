var Events = {};
(function () {
        Events.baseID = "BBBBFEADFWS-44D432DEW-5FW543FESDW-Realism-";
        Events.rands.ID = Events.rands.ID = {};
        Events.CreateEvent = function() {
                Events.rands.ID.push(Events.rands.ID.length);
                for(var i = 0; i < Events.rands.ID.length; i++)
                        Events.rands.ID[i] = baseID + "rnd-" + i;
        };
        Events.GetEventID = function(id) {
                return Events.rands.ID[id];        
        }
        Events.rand[0] = {
                Events.CreateEvent();
                var thisID = Events.GetEventID(0);
                id : thisID
                isRandom : true
                trigger : function (company) {
                        return ReventKeys.keys.rumor.game;
                }
                getNotification: function (company) {
                        var game = company.currentGame;
                        var msg = "News: It seems {0} has a new game coming to the market. They haven't comfirmed it but {0} seems to be finishing development on the game.".localize().format(Competitiors.entity[Competitiors.entity.length-1].name);
                        var n = new Notification({
                                sourceId: thisID,//this is important, otherwise nothing will happen when the player selects an option.
                                header: "Rumor: New Game".localize(),//granted, this is a silly header.
                                text: msg
                        });
                        n.adjustHype(-5+-2*company.GetRandom());
                        return n;
                }        
        }
        GDT.addEvent(Events.rand[0]);
        Events.rand[1] = {
                Events.CreateEvent();
                var thisID = Events.GetEventID(1);
                id : thisID
                isRandom : true
                trigger : function (company) {
                        Competitiors.competition.CreateRandomCompetitior();
                        return ReventKeys.keys.rumor.engine;
                }
                getNotification: function (company) {
                        var game = company.currentGame;
                        var msg = "News: It seems {0} is creating a video game engine. It seems to be {1} but it hasn't been announced so we have no idea".localize().format(Competitiors.entity[Competitiors.entity.length-1].name,CheckTech());
                        return new Notification({
                                sourceId: thisID,//this is important, otherwise nothing will happen when the player selects an option.
                                header: "Rumor: New Game Engine".localize(),//granted, this is a silly header.
                                text: msg
                        });
                }        
        }
        GDT.addEvent(Events.rand[1]);
        Events.rand[2] = {
                Events.CreateEvent();
                var thisID = Events.GetEventID(2);
                id : thisID
                isRandom : true
                trigger : function (company) {
                        Competitiors.competition.CreateRandomCompetitior();
                        return ReventKeys.keys.rumor.convention;
                }
                getNotification: function (company) {
                        var game = company.currentGame;
                        var msg = "News: It seems {0} is trying to start a game convention. Even the rumors of this convention are lowering {1}'s hype.".localize().format(Competitiors.entity[Competitiors.entity.length-1].name,game.title);
                        var n = new Notification({
                                sourceId: thisID,//this is important, otherwise nothing will happen when the player selects an option.
                                header: "Rumor: New Game Convention".localize(),//granted, this is a silly header.
                                text: msg
                        });
                        n.adjustHype(10 + 5*company.GetRandom());
                }        
        }
        GDT.addEvent(Events.rand[2]);
})();
