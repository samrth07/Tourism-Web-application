import * as RoomService from "../../prisma/services/roomService.js";

export const getTravelPlans = async (req, res) => {
  try {
    const userId = req.id;
    const response = await RoomService.getAllplans(userId);
    const currentPlans = response.filter((plan) =>
      plan.members.some((member) => member.user.id === userId)
    );

    const notJoinedPlans = response.filter(
      (plan) => !plan.members.some((member) => member.user.id === userId)
    );

    res.json({
      currentPlans,
      notJoinedPlans,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Servaer error",
    });
  }
};
export default getTravelPlans;
