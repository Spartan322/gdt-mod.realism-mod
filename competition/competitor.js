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
                }
        }
}();
