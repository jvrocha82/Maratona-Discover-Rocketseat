const Job = require('../model/Job')
const Profile = require('../model/Profile')

const JobUtils = require('../utils/JobUtils')
module.exports = {
index(req, res) {
    const jobs = Job.get();
     const profile = Profile.get();
 
     let statusCount = {
      progress:0,
      done:0,
      total:jobs.length,
    }
    //ajustes no job
    //calculo do tempo restante para entregas de
    let jobTotalHours = 0
    const updatedJobs = jobs.map((job) => {
      const remaining = JobUtils.remainingDays(job);
      const status = remaining <= 0 ? "done" : "progress";
      //somando a quantidade de status
      statusCount[status] += 1;

      jobTotalHours += status === 'progress' ?  Number(job["daily-hours"]) : 0
    
      return {
        ...job,
        remaining,
        status,
        budget: JobUtils.calculateBudget(job, profile["value-hour"]),
      };
    });
    const freeHours = profile["hours-per-day"] - jobTotalHours;
    return res.render("index", { jobs: updatedJobs,profile,statusCount,freeHours});
  }
}