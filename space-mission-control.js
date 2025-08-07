// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
let oneTimeTasks = [];
let monitoringTaskId;

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
  // TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters.
  // This function should add an object containing both parameters into the `oneTimeTasks` array.
  oneTimeTasks.push({ function: func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
  for (const oneTimeTask of oneTimeTasks) {
    setTimeout(oneTimeTask.function, oneTimeTask.delay);
  }
}

// Task 4: Start Monitoring Function
function startMonitoring() {
  //need a console.log output
  console.log("Start monitoring");

  monitoringTaskId = setInterval(function () {
    console.log("monitoring space station");
    //Mock some conditions, we use oxygen and powerStatus
    const oxygen = Math.random();
    const powerStatus = Math.random;
    console.log(`Oxygen: ${oxygen} | PowerStatus: ${powerStatus}`);
  }, 8000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
  clearInterval(monitoringTaskId);
  console.log("Monitoring stopped.");
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
  let timeLeft = duration;
  //need add console.log output
  console.log(`Countdown started: ${timeLeft} seconds`);

  const countdownTimerId = setInterval(function () {
    timeLeft--;
    console.log(`Countdown: ${timeLeft} seconds remaining`);

    if (timeLeft <= 0) {
      clearInterval(countdownTimerId);
      console.log("The rocket has been launced");
    }
  }, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
  startMonitoring();
  //same as: addOneTimeTask(function () {console.log("Pre-launch system check complete.");}, 5000);
  addOneTimeTask(() => console.log("Pre-launch system ready"), 1000);
  addOneTimeTask(() => startMonitoring(), 2000);
  addOneTimeTask(() => stopMonitoring(10), 11000);

  runOneTimeTasks();
}

scheduleMission(); // Starts the mission.
