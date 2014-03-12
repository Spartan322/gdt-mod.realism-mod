var CheckTech = function() {
        self.rand = 1 + 99*GameManager.company.GetRandom();
        if(self.rand<70)
                return "Low Tech";
        return "High Tech;"
};
