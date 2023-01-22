interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }

  return "";
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  callback?.();
}
