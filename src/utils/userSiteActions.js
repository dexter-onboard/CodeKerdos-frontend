export function userDataPushActions(userAction, userId = "not needed") {
  window.dataLayer.push({
    event: userAction,
    user_id: userId,
  });
}
