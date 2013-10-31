exports.docalc = function(req, res){
    var picker1Hex=req.body.picker1;
    var picker2Hex=req.body.picker2;
    res.render('calculate', { title: 'Calculate color diff', answer1: picker1Hex, answer2: picker2Hex });
};