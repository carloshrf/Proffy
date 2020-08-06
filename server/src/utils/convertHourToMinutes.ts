export default function convertHourToMinutes(time: string) {
  console.log(time)
  const [hour, minutes] = time.split(':').map(Number);      
  const timeInMinutes = (hour * 60) + minutes;
  return timeInMinutes;
}