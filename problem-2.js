function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let separate = email.split("@");
  let userName = separate[0];
  let domainName = separate[1];
  let notification = `${userName} sent you an email from ${domainName}`;
  return notification;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification("sadia8i@cloud@.com"));
