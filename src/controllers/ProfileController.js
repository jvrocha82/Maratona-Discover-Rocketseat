const Profile  = require('../model/Profile')
module.exports = {
    index(req, res) {
      return res.render("profile", { profile: Profile.get() });
    },
    update(req, res) {
      //req.body para pegar os dados
      const data = req.body;
      //definir quantas semanas tem em um ano
      const weeksPerYear = 52;
      //remover as semanas de férias do ano
      const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12;
      const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
      const monthlyTotalHours = weekTotalHours * weeksPerMonth;
      const valueHour = data["monthly-budget"] / monthlyTotalHours;
      Profile.update({
        ...Profile.data,
        ...req.body,
        "value-hour": valueHour,
      }) 
      
      
      
      return res.redirect("/profile");
    },
  }