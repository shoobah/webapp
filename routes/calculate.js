exports.docalc = function(req, res){
    var myAnswer=7;
    res.render('calculate', { title: 'Calculate color diff', answer:myAnswer });
};