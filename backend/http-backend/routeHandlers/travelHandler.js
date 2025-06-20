import client from "../../../db/prisma"

export const getTravelPlans = async(req, res) => {

    const destination = req.params.filter.destination;
    const timeSlot = req.params.filter.timeSlot;
    const date = req.params.filter.date;

    if(destination && !timeSlot && !date) {
        let plans = await client.travelPlan.findMany({
            where: {
                destination
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(timeSlot && !destination && !date) {
        let plans = await client.travelPlan.findMany({
            where: {
                timeSlot: time
            }
        })

        res.status(200).json({
            plans: plans
        })
        return;
    }

    if(!destination && !timeSlot && date) {
        let plans = await client.travelPlan.findMany({
            where: {
                date
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && timeSlot && !date) {
        let plans = await client.travelPlan.findMany({
            where: {
                destination,
                timeSlot
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(!destination && timeSlot && date) {
        let plans = await client.travelPlan.findMany({
            where: {
                destination,
                date
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(!destination && timeSlot && date) {
        let plans = await client.travelPlan.findMany({
            where: {
                timeSlot,
                date
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && timeSlot && date) {
        let plans = await client.travelPlan.findMany({
            where: {
                destination,
                timeSlot,
                date
            }
        })

        res.json({
            plans: plans
        })
        return;
    }
}