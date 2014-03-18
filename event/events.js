var Events = {};
(function () {
        Events.baseID = "BBBBFEADFWS-44D432DEW-5FW543FESDW-Realism-";
        Events.ID = Events.ID = {};
        Events.CreateEvent = function() {
                Events.ID.push(Events.ID.length);
                for(var i = 0; i < Events.ID.length; i++)
                        Events.ID[i] = baseID + "Events-" + i;
        };
        Events.GetEventID = function() {
                return Events.ID.pop();
        };
        Events.callGameRumor = function(company) {
                if(!CompManager.GetCompetitiorN(company)) return;
                Events.CreateEvent();
                var thisID = Events.GetEventID();
                var e = {
                        id : thisID,
                        isRandom : false,
                        maxTriggers : 1,
                        trigger : function (company) {
                                return true;
                        },
                        getNotification: function (company) {
                                var game = company.currentGame;
                                var msg = "News: It seems {0} has a new game coming to the market. They haven't comfirmed it but {0} seems to be finishing development on the game.".localize().format(company);
                                var n = new Notification({
                                        sourceId: thisID,//this is important, otherwise nothing will happen when the player selects an option.
                                        header: "Rumor: New Game".localize(),//granted, this is a silly header.
                                        text: msg
                                });
                                n.adjustHype(-5+-2*company.GetRandom());
                                return n;
                        }
                }
                GDT.addEvent(e);
                ReventKeys.NPCoRumorGameDefinition(CompManager.GetCompetitiorN(company));
        };
        Events.callEngineRumor = function() {
                if(!CompManager.GetCompetitiorN(company)) return;
                Events.CreateEvent();
                var thisID = Events.GetEventID();
                var e = {
                        id : thisID,
                        isRandom : false,
                        maxTriggers : 1,
                        trigger : function (company) {
                                return true;
                        },
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
                GDT.addEvent(e);
                ReventKeys.NPCoRumorEngineDefinition(CompManager.GetCompetitiorN(company));
        };
        
        Events.callConventionRumor = function() {
                if(!CompManager.GetCompetitiorN(company)) return;
                Events.CreateEvent();
                var thisID = Events.GetEventID();
                var e = {
                        id : thisID,
                        isRandom : false,
                        maxTriggers : 1,
                        trigger : function (company) {
                                return true;
                        },
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
                GDT.addEvent(e);
                ReventKeys.NPCoRumorConventionDefinition(CompManager.GetCompetitiorN(company));
        };
        
})();
