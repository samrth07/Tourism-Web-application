import * as RoomService from '../../prisma/services/roomService.js';

export const getTravelPlans = async(req, res) => {

    const destination = req.params.destination;
    const timeSlot = req.params.timeSlot;
    const date = req.params.date;

    if(destination && !timeSlot && !date) {
        const plans = RoomService.filterByDestination(destination);
        res.json({
            plans
        })
        return;
    }

    if(timeSlot && !destination && !date) {
        let plans = RoomService.filterByTimeSlot(timeSlot)

        res.status(200).json({
            plans: plans
        })
        return;
    }

    if(!destination && !timeSlot && date) {
        let plans = RoomService.filterByDate(date);

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && timeSlot && !date) {
        let plans = RoomService.filterByTimeAndDestination(timeSlot, destination);

        res.json({
            plans: plans
        })
        return;
    }

    if(!destination && timeSlot && date) {
        let plans = RoomService.filterByDateAndTime(date, timeSlot)

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && !timeSlot && date) {
        let plans = RoomService.filterByDateAndDestination(date, destination);

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && timeSlot && date) {
        let plans = RoomService.filterByTimeDateDestination(timeSlot, date, destination);

        res.json({
            plans: plans
        })
        return;
    }
}
export default getTravelPlans 