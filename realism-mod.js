var Realism = {};
(function () {
        Realism.eventKeys = {
                competition: {
                        rumorGame : "competition.rumorGame",
                        comfirmedGame : "competition.comfirmedGame",
                        canceledGame : "competition.canceledGame",
                        releasedGame : "competition.releasedGame",
                        rumorEngine : "competition.rumorEngine",
                        comfirmedEngine : "competition.comfirmedEngine",
                        releasedEngine : "competition.releasedEngine",
                }
        };
        Realism.eventFunc = {
                competition: {
                    rumorGame = function () {
                            new Notification(
                            header : "Competition Rumor".localize(),
                            text : "{0} hasn't comfirmed it yet but we believe that {0} is going to be coming out with a game{n}It seems this game's rumors could affect out sales".localize().format(Realism.competitiorFunc.GetComptitior()))
                    }
                }
        };
        GDT.on(this.eventKeys.competition.rumorGame, Realism.eventFunc.competition.rumorGame);
        
}();
