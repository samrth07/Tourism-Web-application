import client from "../index.js";

export const createUser = async ( email , hashedPassword , name , profileImage) => {
  
  return await client.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      profileImage
    },
  });
};

export const createAddress = async ( city , country , pincode , userId) => {

  return await client.address.create({
          data : {
            city,
            userId,
            country,
            pincode
          }
  });
};

export const getUserByEmail = async (email) => {
  return await client.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserById = async (id) => {
  return await client.user.findUnique({
    where: {
      id,
    },
    include : {
      sender : true,
      reciever : {
        select : {
          recievedBy : true
        }
      }
    }
  });
};

export const connectUserWithRoom = async (roomId, userId) => {
  await client.travelPlan.update({
    where: { 
      id: roomId
    },
    data: {
      members: {
        connect: {
          id: userId 
        }
      } 
    },
  });
};

export const isUserAdmin = async(roomId, userId) => {
  return await client.travelPlan.findUnique({
    where: {
      id: roomId,
      userId: userId
    }
  });
};


export const getUser = async ( userID ) => {

      return await client.user.findMany({
        where : {
          id :{
            not : userID
          }
        },
          include : {
            Address : true
          }
      })
}

export const getMyinformation = async ( userID) => {
    return await client.user.findFirst({
      where : {
        id : userID
      },
      include : {
        Address : true,
        password : false,
        createdPlans : true,
        travelPlans : true,
        sender:{
          where: {
            isAccepted : true
          }
        },
        reciever:{
          where: {
            isAccepted : true
          }
        },
      }
    })
}