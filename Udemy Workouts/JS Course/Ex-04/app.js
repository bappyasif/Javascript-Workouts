let servers = [true, true, false, true];

// for (let i = 0; i < servers.length; i++) {
//   console.log(`Server ${i}.`, checkServer(servers[i])); // Shows undefined
//   checkServer(servers[i]); // Works Fine.
// }

// function checkServer(bool) {
//   if (bool === true) {
//     console.log("Running....");
//   } else {
//     console.log("Down, Restarting....");
//   }
// }

for (let i = 0; i < servers.length; i++) {
  if (servers[i]) {
    showMessage(i);
  } else {
    console.log(`Server ${i}, down.Restarting....`);
    restartServer(i);
  }
}

function showMessage(index) {
  console.log(`Server ${index}.Running....`);
}

function restartServer(index) {
  servers[index] = true;
  if (servers[index]) {
    showMessage(index);
  }
}
