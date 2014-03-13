var CompManager = {};
(function (){
        CompManager.comp = {};
        CompManager.CreateCompetitior = function(cname,cid,cicon) {
                if(cname && cid)
                        CompManager.comp[cid].name = cname;
                if(cicon)
                        CompManager.comp[cid].icon = cicon;
        };
        CompManager.GetCompetitiorID = function(id) {
                var Unknown = null;
                if(!CompManager.comp[id].name) return Unknown;
                return CompManager.comp[id].name;
        };
        CompManager.GetCompetitiorN = function(name) {
                var Comp = CompManager.comp;
                var Unknown = null;
                if(Comp.length < 0) return Unknown;
                for(i = 0; i<Comp.length;i++)
                {
                        if(Comp.name == name)
                                return i;
                }
                return Unknown;
        };
        CompManager.CreateRandom() = function() {
                
                CompManager.CreateCompetitior()
        };
})();
var RandCompName = {
        prefixes = ["Crashed","Missing","Fun","Angry","Flying","Blocked","Kicking","Jumping","Punched","Headless","Round","Cluesless"],
        names = ["Watermelon","Shuttle","Pole","Shoes","Tech","Computers","Pumkins","Sword","Hammer","Mirror","Cart","Programs"],
        //The current icons are mostly placeholders for now
        icons = ['./mods/realism-mod/img/Wat.png','./mods/realism-mod/img/Shu.png','./mods/realism-mod/img/Pol.png','./mods/realism-mod/img/Sho.png','./mods/realism-mod/img/Tec.png','./mods/realism-mod/img/Com.png','./mods/realism-mod/img/Pum.png','./mods/realism-mod/img/Swo.png','./mods/realism-mod/img/Ham.png','./mods/realism-mod/img/Mir.png','./mods/realism-mod/img/Car.png','./mods/realism-mod/img/Pro.png']
        suffixess = ["Ltd","Inc","LLC","Corp.","Co.","Association","Syndicate"]
};
RandCompName.addName = function (name){
        RandCompName.names.push(name);
};
RandCompName.addPrefix = function (name) {
        RandCompName.prefixes.push(name);
};
RandCompName.addSuffix = function (name){
        RandCompName.suffixess.push(name);
};
CompManager.CompNameGenerator = function(){
        var numis = null;
        function getItem(array) {
                var num = Math.floor(Math.random()*array.length);
                numis = num;
                return array[num];
        }

        var Comp = {};
        
        if(Math.random() < 0.7) {
            Comp.name += "" + getItem(RandCompName.prefixes);
            Comp.name += " " + getItem(RandCompName.names);
            Comp.icon = RandCompName.icons[numis];
            Comp.name += " " + getItem(RandCompName.suffixess);
        }
        else {
            Comp.name += "" + getItem(RandCompName.names);
            Comp.name += " " + getItem(RandCompName.names);
            Comp.icon = RandCompName.icons[numis];
            Comp.name += " " + getItem(RandCompName.suffixess);
        }
        
        return Comp;
};
