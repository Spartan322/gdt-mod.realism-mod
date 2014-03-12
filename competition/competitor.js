var Competitiors = {};
(function () {
        Competitiors.competition = {
                CreateCompetitior = function(cname,cid,cicon) {
                        if(cname && cid) 
                                Competitiors.entity[cid].name = cname;
                        if(cicon)
                                Competitiors.entity[cid].icon = cicon;
                };
                GetCompetitiorID = function(id) {
                        var Unknown = "Null Entity"
                        if(!Competitior[id].name) return Unknown;
                        return Competitior[id].name
                };
                GetCompetitiorN = function(name) {
                        var Comp = Competitiors.entity;
                        var Unknown = 'Null Entity';
                        if(Comp.length < 0) return Unknown;
                        for(i = 0; i<Comp.length;i++)
                        {
                                if(Comp.name == name)
                                        return i;
                        }
                        return Unknown;
                };
                CreateRandomCompetitior = function() {
                        var name = UltimateLib.NameGenerator().generateCompanyName();
                        return self.CreateCompetitior(name, Competitiors.entity.length);
                };
        }
}();
Competitiors.dataStore = GDT.getDataStore("Realism-Mod");
Competitiors.save = function() {
        if(Competitiors.entity.length == 0)
                return;
        
        self.dataStore.data.cEntities = Competitiors.entity;
}();
Competitiors.startUp = function() {
        GDT.on(GDT.eventKeys.saves.saving, Competitiors.save);
        GDT.on(GDT.eventKeys.saves.loading, function(){
                Competitiors.entity = self.dataStore.data.cEntities;
        });
}
