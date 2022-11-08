export const msToTime = (ms: number) => {
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);

  const StringHours = hours < 10 ? `0${hours}` : hours;
  const StringMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const StringSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${StringHours}시 ${StringMinutes}분 ${StringSeconds}초`;
};
