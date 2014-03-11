var Competitiors = {};
(function () {
        Competitiors.competition = {
                competitior: {
                        CreateCompetitior = function(name,id,icon) {
                                if(name && id) 
                                        Competitiors[id].name = name;
                                if(icon)
                                        Competitiors[id].icon = icon;
                        };
                        GetCompetitiorN = function(id) {
                                var Unknown = "Null Entity"
                                if(!Competitior[id].name)
                                        return Unknown;
                                return Competitior[id].name
                        };
                }
        }
}();
