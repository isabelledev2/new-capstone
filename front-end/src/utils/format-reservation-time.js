<<<<<<< HEAD
import { formatAsTime } from "./date-time";

function formatTime(reservation) {
  reservation.reservation_time = formatAsTime(reservation.reservation_time);
  return reservation;
}

/**
 * Formats the reservation_time property of a reservation.
 * @param reservations
 *  a single reservation, or an array of reservations.
 * @returns {[reservation]|reservation}
 *  the specified reservation(s) with the reservation_time property formatted as HH:MM.
 */
export default function formatReservationTime(reservations) {
  return Array.isArray(reservations)
    ? reservations.map(formatTime)
    : formatTime(reservations);
}
=======
import { formatAsTime } from "./date-time";

function formatTime(reservation) {
  reservation.reservation_time = formatAsTime(reservation.reservation_time);
  return reservation;
}

/**
 * Formats the reservation_time property of a reservation.
 * @param reservations
 *  a single reservation, or an array of reservations.
 * @returns {[reservation]|reservation}
 *  the specified reservation(s) with the reservation_time property formatted as HH:MM.
 */
export default function formatReservationTime(reservations) {
  return Array.isArray(reservations)
    ? reservations.map(formatTime)
    : formatTime(reservations);
}
>>>>>>> c6842d8ce2a3a6fc2c01ee13f639b328a570eae5
