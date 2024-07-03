// Obtener la fecha actual
const today = new Date();
// Formatear la fecha actual a YYYY-MM-DD
const todayStr = today.toISOString().split('T')[0];

// Obtener la fecha dentro de una semana
const nextWeek = new Date();
nextWeek.setDate(today.getDate() + 14);
// Formatear la fecha de la próxima semana a YYYY-MM-DD
const nextWeekStr = nextWeek.toISOString().split('T')[0];

// Asignar los valores min y max al input de fecha
document.getElementById('turno-fecha').setAttribute('min', todayStr);
document.getElementById('turno-fecha').setAttribute('max', nextWeekStr);